import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Hidden,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { StoryCard } from "./StoryCard";
import Styles from "./Search.module.css";
import SearchBar from "../../Component/SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 240,
    width: 100,
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <div>
        <div className={Styles.search}>
          <SearchBar/>
        </div>
      
    <div style={{ display: "flex", margin: "100px auto" }}>
      <div style={{ width: "15%" ,margin:"10px"}}>
        <Hidden smDown implementation="css">
          <Typography variant="h4" component="h4">
            Filter
          </Typography>
          <Divider/>
          <Typography variant="p" component="p">
            Brand
          </Typography>
          <div style={{ marginTop: "15px" }}>
            <div style={{ marginTop: "5px" }}>
              <span className={Styles.brand}>Yourstory</span>
              <span className={Styles.brand}>Mystory</span>
            </div>
            <div style={{ margin: "15px" }}>
              <span className={Styles.brand}>Yourstory</span>
              <span className={Styles.brand}>Yourstory</span>
            </div>
          </div>
          <div style={{ marginTop: "15px" }}>
            <Typography variant="p" component="p">
              Authors
            </Typography>
            <input placeholder="Search here.."  className={Styles.author}/>
            <div style={{ marginTop: "5px" }}>
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Gilad Gray"
              />
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Gilad Gray"
              />
            </div>
            <div style={{ marginTop: "15px" }}>
            <Typography variant="p" component="p">
              Category
            </Typography>
            <input placeholder="Search here.." />
            <div style={{ marginTop: "5px" }}>
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Gilad Gray"
              
                />
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Gilad Gray"
              />
            </div>
</div>
          </div>
        </Hidden>
      </div>
      <div style={{ width: "85%", margin: "15px" }}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <Grid key={value} item>
                  <StoryCard />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
</div>
  );
};

export { Search };
