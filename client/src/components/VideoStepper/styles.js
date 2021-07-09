import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    root: {
        width: '100%',
        
      },
      button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      actionsContainer: {
        marginBottom: theme.spacing(2),
      },
      resetContainer: {
        padding: theme.spacing(3),
      },

      table:{
        head: {
          backgroundColor: "red !important"
      }
      }
      
}));