import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Drawer, Typography, Avatar } from '@mui/material';
import { Icon } from '@iconify/react';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import { MHidden } from '../../components/@material-extend';
//
// import sidebarConfig from './SidebarConfig';
// import account from '../../_mocks_/account';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';

// ----------------------------------------------------------------------


const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200]
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();


  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const sidebarConfig = [
    {
      title: 'Profile',
      path:`/dashboard/user/${window.btoa(localStorage.getItem('email'))}`,
      icon: <Icon icon={peopleFill} width={22} height={22} style={{color:'grey'}}/>
    },
    {
      title: 'Reports',
      path: '/fetch-report',
      icon: <Icon icon="material-symbols:file-copy-outline-rounded" width={22} height={22} />
    },  
    {
      title: 'Consult',
      path: '/dashboard/products',
      icon: <Icon  icon="material-symbols:medical-services-outline" width={22} height={22} />
    }
  ];

  if (localStorage.getItem('role') === 'ADMIN') {
    sidebarConfig.unshift({
      title: 'dashboard',
      path: '/admin/app',
      icon: <Icon icon={pieChart2Fill} width={22} height={22} style={{color:'white'}} />

    })
  }

  if (localStorage.getItem('role') === 'user') {
    sidebarConfig.push({
      title: 'Sales Calender',
      path: '/dashboard/salescalendar',
      icon: <Icon icon={pieChart2Fill} width={22} height={22} style={{color:'white'}} />

    })
  }


  const renderContent = (
    <Scrollbar 
      sx={{
        height: '100%',
        '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column',color:'white',backgroundColor:'#0d1117'}
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to={localStorage.getItem('role') ? localStorage.getItem('role') === 'ADMIN' ? '/dashboard/app' : `/page/user/${window.btoa(localStorage.getItem('email'))}` : '/'} sx={{ display: 'inline-flex' }}>
          <Logo />
        </Box>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={localStorage.getItem('profilePic')} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {/* {account.displayName} */}
                {localStorage.getItem('name') || "Please take test"}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {localStorage.getItem('role')}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      
    </Scrollbar>
  );

  return (
    <RootStyle >
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              color:'white',
              bgcolor: 'black'
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
