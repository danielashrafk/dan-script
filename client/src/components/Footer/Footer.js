import React from 'react';
import {Paper, createMuiTheme, Avatar, Button, Typography, AppBar, Toolbar, IconButton, Menu,withStyles, ListItemIcon, ListItemText, Fade, Box, Grid, Hidden, CssBaseline, Drawer, useTheme, ThemeProvider, Divider, MenuItem, InputLabel, FormHelperText, FormControl, Select} from '@material-ui/core';
import useStyles from'./styles';
import { blueGrey, deepPurple, grey, red } from '@material-ui/core/colors';

  
const Footer = ({value}) => {

    
    const classes = useStyles();
    
    return (

        
        <div style={{ bottom: "0", width: "100%"}}>
       
      
        
          
          <Paper style={{background: grey[800],  minHeight: "150px", }}>
            {value === 0 ? (
            <>
            <Grid item container xs={12} >
            <Grid item xs={4} container justify="center">
            <Grid item container xs={4} style={{paddingTop: "20px"}}>
                <Grid item container xs={12} >
                    <p className="lead" className={classes.footerTitle} style={{color: "white"}}>How to transcribe MP4 videos?</p>
                </Grid>
                <Grid item container xs={12} >
                    <p className={classes.footerText} style={{color: "gainsboro"}}>1. Choose the language and number of channel inputs.</p>
                </Grid>
                <Grid item container xs={12} >
                    <p className={classes.footerText} style={{color: "gainsboro"}}>2. Choose a MP4 file and upload it.</p>
                </Grid>
                <Grid item container xs={12} >
                    <p className={classes.footerText} style={{color: "gainsboro"}}>3. Click start and wait for the process to finish.</p>
                </Grid>
             </Grid>
             </Grid>

             <Grid item xs={4} container justify="center">
            <Grid item container xs={4} style={{paddingTop: "20px"}}>
                <Grid item container xs={12} >
                    <p className={classes.footerTitle} className="lead" className={classes.footerTitle} style={{color: "white",}}>Free MP4 video transcription and indexing</p>
                </Grid>
                <Grid item container xs={12}>
                    <p className={classes.footerText} style={{color: "gainsboro"}}>MP4 Video transcription is a free and unlimited MP4 video transcription and indexing service. You can easily upload any video on your device and search for any word you want to look for in that video.</p>
                </Grid>
            </Grid>
            </Grid>

            <Grid item xs={4} container justify="center">
            <Grid item container xs={4} style={{paddingTop: "20px"}}>
                <Grid item container xs={12} >
                    <p className="lead" className={classes.footerTitle} style={{color: "white",}}>Why use video transcription, indexing & search?</p>
                </Grid>
                <Grid item container xs={12}>
                    <p className={classes.footerText} style={{color: "gainsboro"}}>1. Fast and easy to use.</p>
                </Grid>
                <Grid item container xs={12}>
                    <p className={classes.footerText} style={{color: "gainsboro"}}>2. Efficient transcription and indexing.</p>
                </Grid>
                <Grid item container xs={12}>
                    <p className={classes.footerText} style={{color: "gainsboro"}}>3. Always free and unlimited transcription.</p>
                </Grid>
            </Grid>
            </Grid>

            </Grid>
            </>
            ): (
                <Grid item container xs={12} >
                <Grid item xs={4} container justify="center">
                <Grid item container xs={4} style={{paddingTop: "20px"}}>
                    <Grid item container xs={12} >
                        <p className="lead" className={classes.footerTitle} style={{color: "white"}}>How to transcribe YouTube videos?</p>
                    </Grid>
                    <Grid item container xs={12} >
                        <p className={classes.footerText} style={{color: "gainsboro"}}>1. Choose the language and number of channel inputs.</p>
                    </Grid>
                    <Grid item container xs={12} >
                        <p className={classes.footerText} style={{color: "gainsboro"}}>2. Paste the link of your YouTube video.</p>
                    </Grid>
                    <Grid item container xs={12} >
                        <p className={classes.footerText} style={{color: "gainsboro"}}>3. Click start and wait for the process to finish.</p>
                    </Grid>
                 </Grid>
                 </Grid>
    
                 <Grid item xs={4} container justify="center">
                <Grid item container xs={4} style={{paddingTop: "20px"}}>
                    <Grid item container xs={12} >
                        <p className={classes.footerTitle} className="lead" className={classes.footerTitle} style={{color: "white",}}>Free YouTube video transcription and indexing</p>
                    </Grid>
                    <Grid item container xs={12}>
                        <p className={classes.footerText} style={{color: "gainsboro"}}>YouTube Video transcription is a free and unlimited YouTube video transcription and indexing service. You can easily paste the link of any YouTube video and search for any word you want to look for in that video.</p>
                    </Grid>
                </Grid>
                </Grid>
    
                <Grid item xs={4} container justify="center">
                <Grid item container xs={4} style={{paddingTop: "20px"}}>
                    <Grid item container xs={12} >
                        <p className="lead" className={classes.footerTitle} style={{color: "white",}}>Why use video transcription, indexing & search?</p>
                    </Grid>
                    <Grid item container xs={12}>
                        <p className={classes.footerText} style={{color: "gainsboro"}}>1. Fast and easy to use.</p>
                    </Grid>
                    <Grid item container xs={12}>
                        <p className={classes.footerText} style={{color: "gainsboro"}}>2. Efficient transcription and indexing.</p>
                    </Grid>
                    <Grid item container xs={12}>
                        <p className={classes.footerText} style={{color: "gainsboro"}}>3. Always free and unlimited transcription.</p>
                    </Grid>
                </Grid>
                </Grid>
    
                </Grid>
            )}

          </Paper>
          

          </div>
          

      
       
      
     
    

    )





}

export default Footer;