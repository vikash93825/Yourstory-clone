import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSourceData,
  fetchFilteredData,
  fetchLanguageData,
} from "../../Redux/DataRedux/actionCreator";

import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const newsData = useSelector((state) => state.app.source);
  const dispatch = useDispatch();
  const [params, setParams] = React.useState([]);
  let langData = [];

  const handleLanguage = (lang) => {
    dispatch(fetchLanguageData(lang));
  };

  console.log(newsData);

  const handleClick = (e) => {
    var k = e.target.name;
    var v = e.target.value;
    if (e.target.checked) {
      setParams([...params, { key: k, value: v }]);
    } else {
      setParams(params.filter((item) => item.value !== v));
    }
  };

  useEffect(() => {
    dispatch(fetchFilteredData(params));
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(fetchSourceData());
  }, [dispatch]);

  return (
    <div>
      <div className={Styles.search}>
        <SearchBar newsData={newsData} />
      </div>

      <div style={{ display: "flex", margin: "100px auto" }}>
        <div style={{ width: "15%", margin: "10px" }}>
          <Hidden smDown implementation="css">
            <Typography variant="h4" component="h4">
              {t("SearchPage.Filter")}
            </Typography>
            <Divider />
            <Typography variant="p" component="p">
              {t("SearchPage.Brand")}
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
              <input placeholder="Search here.." className={Styles.author} />
              <div style={{ marginTop: "5px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={handleClick}
                      name="authors"
                      value="yourstory"
                    />
                  }
                  label="yourstory"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onClick={handleClick}
                      name="authors"
                      value="User"
                    />
                  }
                  label="User"
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <Typography variant="p" component="p">
                  Category
                </Typography>
                <input placeholder="Search here.." />
                <div style={{ marginTop: "5px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={handleClick}
                        name="category"
                        value="Startup"
                      />
                    }
                    label="Startup"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={handleClick}
                        name="category"
                        value="interview"
                      />
                    }
                    label="Interview"
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
                {
                  // langData ?
                  // langData && langData.map((element) => (
                  //   <Grid key={element.start_id} item>
                  //     <StoryCard element={element}/>
                  //   </Grid>
                  //   ))
                  // :
                  newsData &&
                    newsData.map((element) => (
                      <Grid key={element.start_id} item>
                        <StoryCard element={element} />
                      </Grid>
                    ))
                }
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export { Search };
