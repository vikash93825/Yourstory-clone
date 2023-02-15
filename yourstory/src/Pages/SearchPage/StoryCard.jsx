import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import styles from "./StoryCard.module.css";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 140,
  },
});

const StoryCard = (props) => {
  const classes = useStyles();
  const { start_id, title, description, date, img_url, tag } = props.element;

  const history = useHistory();

  return (
    <div className={styles.card}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/story/${start_id}`}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`${img_url}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="p" style={{}}>
                {date}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="secondry"
              style={{ color: "#f23f2d", background: "#fff5f4" }}
            >
              {tag}
            </Button>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
};
export { StoryCard };
