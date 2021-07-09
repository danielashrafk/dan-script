import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import './VideoStepper.css';
import{Container, Grow, Grid, Typography, createMuiTheme, ThemeProvider, Button, Stepper, Step, StepLabel, StepContent, Paper, StepConnector, withStyles, makeStyles, LinearProgress, IconButton  } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import MUIDataTable from "mui-datatables";
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import StartSVG from '../../images/Start.tsx'
import Boop from "./Boop.js"
import { blueGrey, green, lightBlue, lightGreen } from '@material-ui/core/colors';
import {videoToAudio, optimiseVideo, transcribeVideo} from '../../actions/files.js'
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <GraphicEqIcon />,
    2: <i className="far fa-hand-scissors"></i>,
    3: <i className="fas fa-spell-check"></i>,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  progressRoot: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  start: {
    background: blueGrey[100],
    "&:hover": {background: blueGrey[200]}
  },

}));

function getSteps() {
  return ['Converting video to audio', 'Optimising audio for transcription', 'Transcribing audio'];
}

function getAllIndexes(arr, val) {
  if(val.length === 1){
  var indexes = [], i = -1;
  while ((i = arr.indexOf(val[0], i+1)) != -1){
      indexes.push(i);
  }
  return indexes;
}

else{

  var indexes = [];
  var flag = true;
  var i = -1;
  var j =0;
  var k;
  var m;
  var flag2;
  while(flag){
    flag2 = true;
    i = arr.indexOf(val[j], i+1);
    if(i === -1){
      flag = false;
    }
    else{
      m = i;
      
      for(k = 1; k < val.length && flag2; k++){
        if(m+1 <= arr.length){
          if(val[k] !== arr[m+1]){
              flag2 = false;
          }
          m++;
      }
      else{
        flag2 = false;
      }
      }

      if(flag2){
        indexes.push(i);
      }
  }
  }
  return indexes;
}
}

function sentenceToWords(str) {
  
  return str.trim().split(" ");
}








const VideoStepper = ({uniqueName, setResponse, handleClick, language, channel, videoStepper}) => {
  
    const dispatch = useDispatch();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(null);
    const [startStepper, setStartStepper] = React.useState(false);
    const [uniqueParts, setUniqueParts] = React.useState();
    const [errorOccurred, setErrorOccured] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [indexes, setIndexes] = React.useState(null);
    const [tableData, setTableData] = useState([]);
    const [clicked, set] = useState(false);
    

    const steps = getSteps();
    var optimiseVideoData;
    const { scale } = useSpring({ scale: clicked ? 0.8 : 1 });
    const columns = ["Word", "Time"];
    const options = {
      filter: true,
      filterType: "dropdown",
    };


    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    async function handleStart() {
      
      setActiveStep(0);
      setStartStepper(true);
      
      var videoToAudioData = null;
      videoToAudioData = await dispatch(videoToAudio({uniqueName}));
      console.log(videoToAudioData);
      if(videoToAudioData !== "Done") {
        setErrorOccured(true);
        setStartStepper(false);
        setActiveStep(-1);
        setResponse("Something went wrong.");
        handleClick();
      }
      else{
        setActiveStep(1);
        optimiseVideoData = await dispatch(optimiseVideo({uniqueName}));
        console.log(optimiseVideoData);
        setUniqueParts(optimiseVideoData);
        if(optimiseVideoData === 'Something went wrong.') {
          setErrorOccured(true);
          setStartStepper(false);
          setActiveStep(-1);
          setResponse("Something went wrong.");
          handleClick();
        }
        else{
          setActiveStep(2);
          var transcribeVideoData = null;
          transcribeVideoData = await dispatch(transcribeVideo({optimiseVideoData, language, channel}));
          console.log(transcribeVideoData);
          setData(transcribeVideoData);
         

          if(transcribeVideoData === 'Something went wrong.') {
            setErrorOccured(true);
            setStartStepper(false);
            setActiveStep(-1);
            setResponse("Something went wrong.");
            handleClick();
          }
          else if(transcribeVideoData === 'Invalid number of channels.'){
            setErrorOccured(true);
            setStartStepper(false);
            setActiveStep(-1);
            setResponse("Invalid number of channels.");
            handleClick();
          }
          else{
            var i;
            for(i = 0; i< transcribeVideoData[0].length; i++){
              let a = tableData;
              a.push([transcribeVideoData[0][i], transcribeVideoData[2][i]]);
              setTableData(a);
              // setTableData([transcribeVideoData[0][i], transcribeVideoData[1][i]]);
            }
            setActiveStep(3);
          }
        }
      
      }
    };
    async function search() {
      
      if(searchValue !== null && searchValue !== ""){
        
        var words = sentenceToWords(searchValue);
       
        
        
        var indexes = await getAllIndexes(data['words'], words);
        console.log(indexes);
      }
    };
    
    return(

    <Grow in>
      <div className={classes.root}>
          

          
            {activeStep === steps.length ? (
              <>
                <Paper style={{background: 'linear-gradient(to right bottom, #430089, #82ffa1)', marginBottom: "5vh"}}>
                <Grid item container xs={12} justify="center" style={{paddingBottom: "5vh", paddingTop: "5vh"}}>
                    <MUIDataTable 
                        title={"Transcription & Indexing"}
                        data={tableData}
                        columns={columns}
                        options={options}
                    />
                </Grid>  
                </Paper>  
               </>
            ) : (
              <>
              <Stepper style={{background: "transparent",}} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
              <div>
                
                {!startStepper ? (
                  <>
                <Grid item container xs={12} justify="center" style={{paddingTop: "40px"}}>
                
                  <Boop rotation={20} timing={200} >
                {(videoStepper && !errorOccurred) ? (
                <IconButton style={{}} className={classes.start} onClick={handleStart}>
                <i className="fas fa-power-off"></i>
                </IconButton>
                ):(
                  <IconButton disabled style={{}} className={classes.start} onClick={handleStart}>
                  <i className="fas fa-power-off"></i>
                  </IconButton>
                )}
                </Boop>
                
                </Grid>
                 <Grid item container xs={12} justify="center" style={{paddingTop: "10px"}}>
                <h4 className="display-4 text-center mb-4" style={{color: "slategrey", fontSize:"15px"}}>Start</h4>
                </Grid>
                </>
                ): (
                  
                  <div className={classes.root}>
                  <LinearProgress />
                  <LinearProgress color="secondary" />
                </div>

                )}
              </div>
              </>
            )}
            
          
        </div>
      </Grow>
    )
};

export default VideoStepper;