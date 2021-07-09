import { makeStyles } from '@material-ui/core/styles';
import {blue, blueGrey, deepOrange, deepPurple, green, grey, lightGreen, pink, purple, red, yellow} from '@material-ui/core/colors';

const drawerWidth = 240;
const color = deepPurple[700];
export default makeStyles((theme) => ({


footerTitle: {

  [theme.breakpoints.down('xs')]: {
    fontSize:"12px",
  },

  [theme.breakpoints.up('sm')]: {
    fontSize:"20px",
  },
},

footerText: {

    [theme.breakpoints.down('xs')]: {
      fontSize:"7px",
    },
  

  }
}));