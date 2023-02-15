import React, { useEffect } from "react";
import styles from "./Story.module.css";
import { Button, Divider } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postBookMarkData,
  fetchSourceData,
} from "../../Redux/DataRedux/actionCreator";
const Story = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(fetchSourceData());
  }, []);

  const data = useSelector((state) => state.app.source);
  console.log(data);
  const storyData = data.length
    ? data.filter((item) => item && item.start_id === id)
    : [];

  const handleBookMark = () => {
    dispatch(postBookMarkData(storyData));
  };
  console.log(storyData);
  return (
    <div className={styles.main}>
      <div>
        <Button
          className={styles.tags}
          color="secondary"
          style={{ background: "#323232" }}
          variant="contained"
        >
          {storyData[0].tag}
        </Button>
        <p className={styles.life}>{storyData[0].title}</p>
        <div className={styles.facebook}>
          <div className={styles.date}>
            <p>
              By {storyData[0].authors} | {storyData[0].date}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="">
          <div>
            <img src={storyData[0].img_url} width="100%" alt="" />
          </div>
          <div>
            <div className={styles.qoutes}>
              Speaking at the Resurgence TiEcon Delhi-NCR event, Isha Foundation
              Founder Jaggi Vasudev, popularly known as Sadhguru, said the
              education system is generalising all children with the same kind
              of education, and this needs to change.
            </div>
            <div className={styles.marks}>
              <div style={{ color: "#a8a8a8" }}>
                <span style={{ marginRight: "10px" }}>CLAP</span>
                <img
                  width="25px"
                  src="https://static.thenounproject.com/png/1471176-200.png"
                  alt=""
                />
              </div>
              <div>
                <BookmarkBorderIcon
                  style={{ marginRight: "10px" }}
                  onClick={handleBookMark}
                />
                <img
                  width="25px"
                  src="https://static.thenounproject.com/png/1471176-200.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Divider />
          <div className={styles.story}>
            <p>Story</p>
            <hr />
            <p className={styles.desc}>{storyData[0].descrition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Story };
