import React, { useState, useEffect } from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createMuiTheme, Avatar, Button, Typography, AppBar, Toolbar, IconButton, Menu,withStyles, ListItemIcon, ListItemText, Fade, Box, Grid, Hidden, CssBaseline, Drawer, useTheme, ThemeProvider, Divider, MenuItem, InputLabel, FormHelperText, FormControl, Select} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import decode from 'jwt-decode';
import useStyles from'./styles';
import audioWave from '../../images/image.png';
import { blueGrey, deepPurple, grey, red } from '@material-ui/core/colors';



const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  
const Navbar = ({setLanguage, language, setChannel, channel}) => {

    
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [age, setAge] = React.useState('');

    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    };

    const handleChannelChange = (event) => {
      setChannel(event.target.value);
    };
    
    const theme = useTheme();

    return (

      
      <div className={classes.root}>

                   

      <CssBaseline />
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>

        <Grid item container xs={4} justify="center">
          <img  src = {audioWave} alt= "icon" width="70" height='40px' className={classes.image}/>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item container xs={12} sm={6} md={2} xl={1} justify="flex-start">
          <FormControl variant="standard" className={classes.formControl}>
              
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={language}
                onChange={handleLanguageChange}
                label="Age"
              >
                <MenuItem value='en-US'>English (US)</MenuItem>
                <MenuItem value='en-GB'>English (UK)</MenuItem>
                <MenuItem value='en-AU'>English (Australia)</MenuItem>
                <MenuItem value='en-IN'>English (India)</MenuItem>
                <MenuItem value='en-ZA'>English (South Africa)</MenuItem>
                <MenuItem value='en-NZ'>English (New Zealand)</MenuItem>
                <MenuItem value='en-CA'>English (Canada)</MenuItem>
                <MenuItem value='ar-EG'>Arabic (Egypt)</MenuItem>
                <MenuItem value='ar-LB'>Arabic (Lebanon)</MenuItem>
                <MenuItem value='ar-SA'>Arabic (Saudi Arabia)</MenuItem>
                <MenuItem value='ar-MA'>Arabic (Morocco)</MenuItem>
                <MenuItem value='ar-TN'>Arabic (Tunisia)</MenuItem>
                <MenuItem value='ar-DZ'>Arabic (Algeria)</MenuItem>
                <MenuItem value='ar-JO'>Arabic (Jordan)</MenuItem>
                <MenuItem value='ar-KW'>Arabic (Kuwait)</MenuItem>
                <MenuItem value='ar-IQ'>Arabic (Iraq)</MenuItem>
                
              </Select>
          </FormControl>
          </Grid>
          <Grid item container xs={12} sm={6} md={2} xl={1} justify="flex-start">
          <FormControl variant="standard" className={classes.formControl}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={channel}
                onChange={handleChannelChange}
                label="Age"
              >
                <MenuItem value={1}>1 Channel</MenuItem>
                <MenuItem value={2}>2 Channels</MenuItem>
              </Select>
             
          </FormControl>
          </Grid>
          
        </Toolbar>
      </AppBar>
      </div>
       
      
     
    

    )





}

export default Navbar;