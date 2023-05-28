import { Icon } from '@iconify/react';
import { useRef, useState, useEffect } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
// import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Notifs from 'src/_mocks_/notification';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
import axios from 'axios';
import { io } from "socket.io-client";
//
// import account from '../../_mocks_/account';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------
export default function NotifPopover() {
  const navigate = useNavigate();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState([
    {
        content: "We have a new launch comming soon!",
        title: "New Launch Notification",
        redirection: "https://www.mi.com/in",
        thumbnail: "https://www.91-cdn.com/hub/wp-content/uploads/2022/02/Redmi-Note-11-Pro-feat.jpg?tr=w-217,h-115,c-force,dpr-2/",
        createdAt: "2022-07-15T11:03:42.289Z",
    }]);
  const MENU_OPTIONS = [
    {
      label: 'Home',
    },
    {
      label: 'Profile',
    },
    // {
    //   label: 'Settings',
    //   icon: settings2Fill,
    //   linkTo: '#'
    // }
  ];

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/', { replace: true })
  }

  const markAsRead = (e, index, notificationId) => {
    e.stopPropagation()
    setNotification((items) => items.filter((_, i) => i !== index));

    axios.put(`http://localhost:8000/api/v1.0/notifications/read?notificationId=${notificationId}&userId=${userId}`)
    .then((result)=> {
      console.log(result);
    })
    .catch((err) => {
      console.log(err)
    })

  }
 
  const navigateNotificationURL = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const socket = io("ws://localhost:4000");
  const userId = localStorage.getItem("id");
  console.log(userId)
  const notificationCount = 5;

  useEffect(() => {

    axios.get(`http://localhost:8000/api/v1.0/notifications/${notificationCount}?userId=${userId}`)
        .then((result)=> {
          console.log(result.data.data);
          setNotification(result.data.data);
        })
        .catch((err) => {
          console.log(err)
        })

      socket.on("notification", (data) => {
        let message = data;
        let content = message.content;
        alert(content);
      });

      const publishKey = `notification:${userId}`;
      socket.on(publishKey, (data) => {
        console.log("notification = ", data);
        let message = data.content;
        alert(message);
      });

  }, []);

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Icon icon="clarity:notification-solid-badged" color='black'/>
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 400 }}
      >
        <div style={{ paddingTop: "8px", paddingLeft: "16px", paddingBottom: "8px" }}>
          <h3>
            Notifications
          </h3>
        </div>
        
        {notification.map((option, index) => (
            <>
          <center>
            <Divider sx={{ width: "95%" }} />
          </center>
          <MenuItem
            key={option.label}
            sx={{ typography: 'body2', py: 1, px: 2, display: 'flex', flexDirection: "row", justifyContent: "space-between", position: "relative", zIndex: 1 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', width: "70%", justifyContent: "space-between" }}>
              <div 
                style={{textAlign: "left" }}             
                onClick={() => navigateNotificationURL(option.redirection)}>
                  {option.content}</div>
              <div>
                <span 
                style={{color: "Blue", fontSize: "xx-small", position: "relative",  zIndex: 2 }} 
                onClick={ (e) => markAsRead(e, index, option._id)}> 
                  Mark As Read
                </span>
              </div>
            </div>            
            <div style={{marginLeft:"auto", marginRight: "auto"}}>
                <img 
                  style={{maxWidth: "75px", minWidth: "50px", height: "50px"}}
                  src= {option.thumbnail}
                  onClick={() => navigateNotificationURL(option.redirection)}/>
            </div>
            

          </MenuItem>
          
          </>
        ))} 
        
      </MenuPopover>
    </>
  );
}

