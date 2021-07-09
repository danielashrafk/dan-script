import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import { positions } from '@material-ui/system';
import{Box, Tabs, Tab, createMuiTheme, Container, TextField, Grow, Grid, Typography, Button, Stepper, Step, StepLabel, StepContent, Paper, Divider, Slide, LinearProgress, StepConnector, ThemeProvider,} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import VideoStepper from '../VideoStepper/VideoStepper.js'
import UVideoStepper from '../VideoStepper/UVideoStepper.js'
import useStyles from './styles.js';
import PropTypes from 'prop-types';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { grey, yellow } from '@material-ui/core/colors';
import {convertVideo, uploadVideo, uploadYoutubeVideo} from '../../actions/files.js';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';



const Home = () => {

    const dispatch = useDispatch();
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [ffileName, setFFileName] = useState();
    const [ufileName, setUFileName] = useState();
    const[videoStepper, setVideoStepper] = useState(false);
    const[uvideoStepper, setUVideoStepper] = useState(false);
    const[formData, setFormData] = useState();
    const classes = useStyles();  
    const [value, setValue] = React.useState(0);
    const [response, setResponse] = useState(null);
    const [uniqueName, setUniqueName] = useState(null);
    const [uuniqueName, setUUniqueName] = useState(null);
    const[startUpload, setStartUpload] = useState(false);
    const[language, setLanguage] = useState("en-US");
    const[channel, setChannel] = useState(2);
    const[youtubeURL, setYoutubeURL] = useState("");
    const[youtubeTitle, setYoutubeTitle] = useState("");
    const[youtubeAuthor, setYoutubeAuthor] = useState("");

    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const [open, setOpen] = React.useState(false);
    const [uploadProgress, setUploadProgress] = React.useState(0);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleClick = () => {
      setOpen(true);
    };
    
    const handleChange = (event, newValue) => {
      setValue(newValue);

    };

    const onChange = async e => {

      await setFile(e.target.files[0]);
      await setFileName(e.target.files[0].name);
      
      };

      
      const onSubmit = async e => {
        
        e.preventDefault();
        setResponse(null);
        setFFileName(fileName);
        var data = null;
        if(value === 0){
        const videoData = new FormData();
        videoData.append('file', file);
        setStartUpload(true);
        data = await dispatch(uploadVideo(videoData, setUploadProgress));
        if(data === "No video uploaded"){
          setUploadProgress(0)
          setResponse("No video uploaded.");
          handleClick();
        }
        else if(data === "Something went wrong"){
          setUploadProgress(0)
          setResponse("Something went wrong.");
          handleClick();
        }
        else{
          setResponse(null);
          setUniqueName(data);
          setVideoStepper(true);
        }
        
        
      }
      else{
        
        data = await dispatch(uploadYoutubeVideo({youtubeURL}));
        if(data === "Please enter a YouTube URL"){
          setResponse("Please enter a YouTube URL");
          handleClick();
        }
        else if(data === "Something went wrong."){
          setResponse("Something went wrong.");
          handleClick();
        }

        else if(data === "Invalid YouTube URL"){
          setResponse("Invalid YouTube URL");
          handleClick();
        }

        else{
          setResponse(null);
          setUVideoStepper(true);
          setYoutubeTitle(data['title']);
          setYoutubeAuthor(data['author']);
        }
        
      }
      }

      const handleTextFieldChange = async e => {
        setYoutubeURL(e.target.value);
      }
   
    return(
      <>
      <Navbar setLanguage={setLanguage} language={language} setChannel={setChannel} channel={channel}/>
      <Grow in>
          
          <Container maxWidth={false} disableGutters= {true}  style={{flexGrow: 1, paddingTop: "5px", minHeight: 'calc(100vh - 200px)'}}>
            <Grid container style={{}}>
            <Grid item xs={12} style={{}}>
                <Divider style={{ background: grey[600] }}/>
            </Grid>
            <Grid item xs={3}  style={{}}>
                
                </Grid>  
                <Grid item xs={6} style={{}}>
              <Paper style={{flexGrow: 1, paddingBottom:"3px", background:"transparent", boxShadow: 'none'}}>

              
                <Tabs style={{minHeight:"60px", paddingTop: "20px", }}
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  
                >
                  
                  
                  <Tab label={<b style={{paddingBottom: "20px", }}>Video</b>} className={classes.tabs}/>
                  
                  
                  <Tab label={<b style={{paddingBottom: "20px"}}>Youtube</b>} className={classes.tabs}/>
                  
                  
                </Tabs>
                
                
              </Paper>
              </Grid>
              
              <Grid item xs={3}  style={{}}>
                
                </Grid>
            </Grid>
            <Grid container style={{}}>

              <Paper style={{background: grey[800], width: "100%", paddingTop: "60px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "30px"}}>
                {value === 0 ? (
                  <Grid container justify="center">
                    <Grid item container justify="center"  xs={12}>
                      
                      <h4 className="display-4 text-center mb-4" style={{color: "white", fontSize:"40px"}}><i className="fas fa-film fa-fw "> </i>&nbsp;Transcribe MP4 Videos</h4>
                    </Grid>
                    <Grid item container justify="center" xs={12}>
                    <p className="lead" style={{color: "white",}}>Search any word in any MP4 video</p>
                    </Grid>
                    
                    
                    <Grid container justify="center" style={{maxWidth:"1000px", paddingTop: "20px"}}>
                    <form onSubmit={onSubmit} style={{width:"100%"}}>
                    <Grid item xs={12}>
                    <input className="form-control form-control-sm" type="file" id="formFileSm" onChange={onChange}/>
                    </Grid>
                    
                    {videoStepper ? (
                    <>
                    <Grid item container xs={12} style={{marginTop:"20px"}} justify="center">
                    <p className="lead" style={{color: "#F1EDDB"}}>
                    {ffileName}
                    </p>
                    </Grid>
                    <Grid item container xs={12} style={{marginTop:"20px"}} justify="center">
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit style={{}}><CheckCircleOutlineIcon style={{color: "limegreen", fontSize: "30px"}}/></Slide>
                    </Grid>
                    </>
                    ): (
                    <>
                    <Grid item xs={12}>
                    <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" style={{width:"100%"}}/>
                    </Grid>
                    {startUpload && (response !== "No video uploaded." && response !== "Something went wrong.") &&  (
                    <Grid item xs={12} style={{marginTop: "20px"}}>
                    {/* <LinearProgressWithLabel value={uploadProgress} style={{width:"100%"}}/> */}
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{background: "green", width: `${uploadProgress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{uploadProgress}%</div>
                    </div>
                    </Grid>
                    )}
                    </>
                    )}
                    </form>
                    </Grid>
                    
                    </Grid>
                  
                ): (
                  <Grid container justify="center">
                    <Grid item container justify="center"  xs={12}>
                      
                      <h4 className="display-4 text-center mb-4" style={{color: "white", fontSize:"40px"}}><i className="fab fa-youtube"></i>&nbsp;Transcribe YouTube Videos</h4>
                    </Grid>
                    <Grid item container justify="center" xs={12}>
                    <p className="lead" style={{color: "white", fontSize:"18px"}}>Search any word in any YouTube video</p>
                    </Grid>
                    
                    
                    <Grid container justify="center" style={{maxWidth:"1000px", paddingTop: "20px"}}>
                    <form onSubmit={onSubmit} noValidate autoComplete="off" style={{width:"100%"}}>
                    <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Paste YouTube URL" variant="filled" fullWidth InputProps={{className: classes.textFont}} InputLabelProps={{className: classes.floatingLabelFocusStyle,}} className={classes.textField} onChange={handleTextFieldChange}/>
                    </Grid>
                    
                    {uvideoStepper ? (
                    <>
                    <Grid item container xs={12} style={{marginTop:"20px"}} justify="center">
                    <p className="lead" style={{color: "#F1EDDB"}}>
                    {youtubeTitle} - {youtubeAuthor}
                    </p>
                    </Grid>
                    <Grid item container xs={12} style={{marginTop:"20px"}} justify="center">
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit style={{}}><CheckCircleOutlineIcon style={{color: "limegreen", fontSize: "30px"}}/></Slide>
                    </Grid>
                    </>
                    ): (
                    <>
                    <Grid item xs={12}>
                    <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" style={{width:"100%"}}/>
                    </Grid>
                    </>
                    )}
                    </form>
                    </Grid>
                    
                    </Grid>

                )}
              </Paper>

            </Grid>
            
            
              {value === 0 ? (
              <Grid container justify="center" style={{paddingTop: "5vh"}}>
                    
                    <VideoStepper uniqueName={uniqueName} setResponse={setResponse} handleClick={handleClick} language={language} channel={channel} videoStepper={videoStepper}/>

              </Grid>
              ): (
                <Grid container justify="center" style={{paddingTop: "5vh"}}>
                    
                <UVideoStepper youtubeURL={youtubeURL} setResponse={setResponse} handleClick={handleClick} language={language} channel={channel} videoStepper={uvideoStepper}/>

                </Grid>
              )}

       
            
            
            
             

            

















          {response === "No video uploaded." ?(
                    
                    <><Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                      No video chosen
                    </Alert>
                    </Snackbar></>
                    
                ): ( response === "Something went wrong." ? (
               
                  <><Snackbar open={open} autoHideDuration={undefined} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error">
                    Something went wrong
                  </Alert>
                  </Snackbar></>
                )
             : (response === "Invalid number of channels." ? (

                  <><Snackbar open={open} autoHideDuration={undefined} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error">
                    Invalid number of channels
                  </Alert>
                </Snackbar></>
            ): (response === "Please enter a YouTube URL" ?(
              <><Snackbar open={open} autoHideDuration={undefined} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error">
                    Please enter a YouTube URL
                  </Alert>
                </Snackbar></>
            ):(
              response === "Invalid YouTube URL" &&(
                <><Snackbar open={open} autoHideDuration={undefined} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                      Invalid YouTube URL
                    </Alert>
                  </Snackbar></>
            )))))
            }
        </Container>
        
      </Grow>
      <Footer value={value}/>
      </>
    )



}

export default Home;