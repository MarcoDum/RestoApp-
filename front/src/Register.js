import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      password1: '',
      password2: ''
    };
  }
  
  
  UserPassword = (e) =>{
    this.setState({
      password1: e.target.value
    })
  }
  
  confirmedPassword = (e) => {
    this.setState({
      password2: e.target.value
    })
  }

  render() {
    
    const { classes } = this.props;
    const message = this.state.password1 === this.state.password2 && this.state.password1 !== '' && this.state.password2 !=='' ?
      <span className='valid'> Match </span>
      : <span className='invalid'> Invalid Password Confirmation </span>
    
    return (
      <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
              <LockIcon />
          </Avatar>
          <Typography variant="headline">Sign in</Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
              <InputLabel >Nom</InputLabel>
              <Input autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Prenom</InputLabel>
              <Input id="email" name="email" autoComplete="email"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoComplete="email"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Mot de passe</InputLabel>
              <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password1}
                  onInput={this.UserPassword}
              />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Confirmation Mot de pass</InputLabel>
              <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password2} 
                  onInput={this.confirmedPassword}
              />
              </FormControl>
              <p>{message}</p>
              <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
              >
              Sign in
              </Button>
              <Link to="/" >
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="secondary"
                linkButton={true}
                className={classes.submit}
              >
              Cancel
              </Button>
              </Link>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);