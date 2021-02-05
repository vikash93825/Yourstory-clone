import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid"
import styles from "./MyStoriesDataPage.module.css"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import ClearIcon from '@material-ui/icons/Clear';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop:"25px"
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    width:"200px",
    textAlign:"center",
    padding: theme.spacing(2, 4, 3),
  },

}));

function getSteps() {
  return ['Drafts', 'InReview', 'Published','Rejected', 'Trashed'  ];
}

const stepLabel = {

  padding: "15px",
  paddingBottom:"5px",
  paddingTop:"0px",
  borderBottom: "5px solid rgb(221, 19, 19)",
  margin: "0px"
}

const allData = [
  {
    title:"new title 1",
    lastUpdatedTime:"10-0e-404"
  },
  {
    title:"new title 2",
    lastUpdatedTime:"10-07-404"
  },
  {
    title:"new title 3",
    lastUpdatedTime:"10-044-404"
  },
  {
    title:"new title 4",
    lastUpdatedTime:"10-05-404"
  }
]

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Drafts';
    case 1:
      return 'InReview';
    case 2:
      return 'Published';
    case 3:
        return 'Rejected';
    case 4:
        return 'Trashed';
    default:
      return 'No strories';
  }
}

const MyStoriesDataPage = () => {
  const history = useHistory();

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState(allData)
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const steps = getSteps();
  console.log(data, data.length);
  const handleSteps = (id) => {
    setActiveStep(id);
  };


  const handleToGoCreatePostPage = () => {
      // console.log("we need to navigate to create post page");
     history.push("/poststory")
  }

  const handleStoriesRequestData = (payload) => {
      const endPoint = payload.toLowerCase()
      console.log(endPoint);
      //make get request to get the data

  }

  return (
    <div className={classes.root}>
      <Grid container>
      <Grid xs= {0} md = {1}></Grid>
        <Grid xs = {4} >
          <select className = {styles.selectorStyles}>
            <option className = {styles.selectorOptionStyles} value="all" >All</option>
            <option className = {styles.selectorOptionStyles} value="myStory" >MyStory</option>
          </select>
        </Grid>
        <Grid xs={5} ></Grid>
        <Grid xs={2} >
        <div>
          <div className = {styles.modelParentDiv} >
            <button type="button" className = {styles.writeStoryModal} onClick={handleOpen}>
              Write a story
            </button>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={styles.paper}>
                <p onClick = {handleClose}  > <ClearIcon fontSize="small" className = {styles.closeModelButton} /></p>
                <h4 id="transition-modal-title">Select a Brand:</h4>
                <Divider />
                <p id="transition-modal-description" onClick = {handleToGoCreatePostPage} className = {styles.modalData}>My Story</p>
              </div>
            </Fade>
          </Modal>
        </div>
        </Grid>
      </Grid>
      {/* stepper */}
      <Stepper activeStep={activeStep} alternativeLabel>
        <Grid container xs = {12}>
          <Grid xs= {0} md = {1}></Grid>
          {steps.map((label, index) => (
            <>
            <Grid xs = {4} md = {2} >
              <StepLabel className = {styles.stepperHeadings}  style = {stepLabel} onClick = { () => handleSteps(index)} key={label}><span onClick = {handleStoriesRequestData} style= {{fontSize:"22px",color:"black", textAlign:"center"}}>{label}</span></StepLabel>
            </Grid>
            </>
          ))}
        </Grid>
      </Stepper>
      <div style = {{paddingLeft : "5px"}}>
        {data && data.length > 0 ? data.map( (item,index) =>{
          return  ( <>
            <Grid container >
              <Grid key = {index}  item  xs = {0} md = {1} ></Grid>
              <Grid item xs = {10} style = {{ borderBottom:"1px solid cyan"}} >
                <Grid container >

                  <Grid item xs={6} md = {7} >
                    <p className =  {styles.title}>{item.title}</p>
                    <p ><span className = {styles.colorCyan}>Last updated date: </span>{item.lastUpdatedTime}</p>
                  </Grid>
              
                  <Grid item xs ={4} xs md = {4}></Grid>
                  <Grid item xs = {1} className = {styles.moreVertIconDiv} style = {{paddingTop:"5px"}} ><MoreVertIcon className = {styles.moreVertIcon} /></Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
          )})

          :

          <p className = {styles.noStories}>No Stories to Display</p>
        
        } 
      </div>
    </div>
  );
}

export {MyStoriesDataPage}