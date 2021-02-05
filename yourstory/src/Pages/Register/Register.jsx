import React, { useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Button,
  CssBaseline,
  TextField,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#e5002d",
    height: "75vh",
    backgroundColor: "#fafafa"
  },

  form: {
    width: "70%",
    marginTop: theme.spacing(3),
    color: "#e5002d"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#e5002d"
  }
}));

const Register = () => {
  const classes = useStyles();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleRegister = (e) => {
    e.preventDefault()
    console.log(email,password)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up with Email
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" style={{textDecoration:"none"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export { Register };