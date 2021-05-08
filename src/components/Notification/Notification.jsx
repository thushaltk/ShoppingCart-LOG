import { makeStyles, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    root:{
        top: theme.spacing(12)
    }
}))

const Notification = (props) => {
  var notify = props.notify;
  const classes = useStyles();

  console.log(notify);

  const handleClose=(event, reason) => {
    notify.isOpen = false;
  }

  return (
    <div>
      <Snackbar
        className={classes.root}
        open={notify.isOpen}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert severity={notify.type}>{notify.message}</Alert>
      </Snackbar>
    </div>
  );
};

export default Notification;
