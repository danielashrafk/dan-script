import { makeStyles } from '@material-ui/core/styles';
import {blue, blueGrey, deepOrange, deepPurple, green, grey, lightGreen, pink, purple, red, yellow} from '@material-ui/core/colors';

const drawerWidth = 240;
const color = deepPurple[700];
export default makeStyles((theme) => ({

    root: {
      display: 'flex', 
      
      }, 



  brandContainer: {

    marginLeft: "15px",
  },
  purple: {
    
    color: '#2660A4',
    backgroundColor: theme.palette.common.white,


  },
  login: {
      marginRight: theme.spacing(2),
  },



  appBar: {
    background: "transparent",
    height:"50px",
    
    boxShadow: 'none',
    
  },
  drawer: {
    
      width: drawerWidth,
      flexShrink: 0,
   
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
   
    
  },

toolbar: theme.mixins.toolbar,
  drawerPaper: {
  width: drawerWidth,
},

drawerPaper: {
  width: drawerWidth,
  background: theme.palette.common.white,
},

image: {

  
  // [theme.breakpoints.down('xs')]: {
  //   marginBottom:"1vh",
  // },
  [theme.breakpoints.up('xs')]: {
    marginBottom:"10px",
  },
},

formControl: {
  [theme.breakpoints.down('sm')]: {
    minWidth: 90,
    marginBottom: "10px",
    boxShadow: 'none',
  },
  [theme.breakpoints.down('xs')]: {
    minWidth: 90,
    marginBottom: "5px",
    boxShadow: 'none',
  },

  [theme.breakpoints.up('md')]: {
    minWidth: 120,
    marginBottom: "10px",
    boxShadow: 'none',
  },
}
}));