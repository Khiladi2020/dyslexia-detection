import React from "react";
import { Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// material
import {
  Box,
  Button,
  Grid,
  Container,
  TextField,
  styled,
  Card,
  Typography,
} from "@mui/material";
// components
import {
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import Page from "../../components/Page";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import swal from 'sweetalert';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';

// ----------------------------------------------------------------------


const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: theme.customShadows.z20,
  padding: theme.spacing(6, 6),
  borderRadius: '12px',
  backgroundColor: '#ffffff75',
  color: '#000000',
}));


export default function Profile(props) {
  const [auth, setAuth] = useState(true);
  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [storeImage, setStoreImage] = useState([]);
  const [name, setName] = useState("");
  const [fav, setFav] = useState(false);

  const [todaySales, setTodaySales] = useState("");
  //props.setEmail(window.atob(window.location.pathname.slice(16)));

}
