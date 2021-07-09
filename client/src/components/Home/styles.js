import { blue, blueGrey, brown, deepOrange, deepPurple, green, grey, indigo, orange, purple, red, yellow } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

export default makeStyles((theme) => ({

  
  mainContainer:{
    position: "relative",
    // marginRight: "auto",
    // marginLeft: theme.spacing(5),
    // paddingLeft: "48px",
    // paddingRight: "48px",
    // paddingTop: "0px",
    width: "100%",
    // maxWidth: "1800 px",
    boxSizing: "border-box",
    
  },
  paper: {

    paddingTop: "10px",
    paddingBottom: "10px",
    background: grey[100]
  },


  buttonSubmit: {
    // marginLeft: '300px',
    // marginTop: '-30px',
    color: red[50],
    background: green[600],
    "&:hover": {background: green[900]}
   
  },

  buttonClear: {
    // marginLeft: '300px',
    // marginTop: '-30px',
    color: red[50],
    
   
  },
  main: {
     
    
   
 },

 textField: {
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: grey[400]
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: grey[600]
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: grey[400]
  },
  
},

textFont: {
  color: theme.palette.common.white,
},

floatingLabelFocusStyle:{
  color: grey[400],
    '&.Mui-focused': {
      color: grey[400],
    },
    
},

textForm:{
  
},
    
  form: {
     marginBottom:"50px",   
    
  },
  formPaper: {
    padding: theme.spacing(1.5),
    marginTop: "30px",
    width: "100%",
    
  },
  div: {
    marginTop: "40px",
  },
  fileInput: {
    width: '97%',
    marginTop: '40px',
  },
  tabRoot: {

    flexGrow: 1,
    display: 'flex',
    height: 100,

  },
  tabs: {

    "&:hover": {background: grey[200]},

  },
  title : {


    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
      marginTop: "5px",
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '13px',
      marginTop: "8px",
    },


  // [theme.breakpoints.up('md')]: {
  //   fontSize: '10px',
  // },

  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
    marginTop: "12px",
  },



  },

  title2 : {

    fontSize: '30px',
    color: theme.palette.common.white,

  },










}));