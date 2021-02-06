import React,{useState} from "react"
import styles from "./FeaturedPage.module.css"
import Title from "./FeaturedFolder/Title"
import BrandElement from "./FeaturedFolder/BrandElement"
import SubTitle from "./FeaturedFolder/SubTitle"
import ThumbAndBrand from "./FeaturedFolder/ThumbAndBrand"
import UpdatedContentButton from "./FeaturedFolder/UpdatedContentButton"
import Grid from "@material-ui/core/Grid"
import Tags from "./FeaturedFolder/Tags"


const FeaturedPage  = (props) => {

    const [title, setTitle] = useState("")
    const [subtitle, setSubTitle] = useState("")
    const [image,setImage] = useState(null)
    const [tag, setTag] = useState("")
    const [brand, setBrand] = useState("MyStory")
    const [tagDescription, setTagDescription] = useState("")
   

    const handleChnageTitle = (e) => {
        if(title.split("").length <= 1000){
            setTitle(e.target.value)
        }
    }

    const handleKeyUpTitle = (e) => {
        if(title.split("").length > 1000 && e.keyCode === 8){
            setTitle(e.target.value)
        }
    }


    const handleChnageSubTitle = (e) => {
        if(subtitle.split("").length <= 300){
            setSubTitle(e.target.value)
        }
    }
    const handleKeyUpSubTitle = (e) => {
        if(subtitle.split("").length > 300 &&  e.keyCode === 8){
            setSubTitle(e.target.value)
        }
    }

    const handleImageChange  = (e) => {
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0]
            setImage(URL.createObjectURL(img))
        }
    }

    const handleTag = (e)=> {
        setTag(e.target.value)
    }
    const handleTagDescription = (e) => {
        setTagDescription(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        // console.log(title, subtitle, image, tag, brand);
        let payload = {
            start_id: uuidv4(),
            title:title,
            subtitle: subtitle,
            descrition: text,
            img_url: image,
            tag: "dshaklf",
            brand,
            date: new Date().toLocaleDateString(),
            language: "en",
            authors: 'yourstory',
            category: 'education',
            country: "us",
            like: 6,
            user_id: 2,
            french: {
                    start_id: uuidv4(),
                    title:title,
                    subtitle: subtitle,
                    descrition: text,
                    img_url: image,
                    tag: "dfadfad",
                    brand,
                    date: new Date().toLocaleDateString(),
                    language: "fr",
                    authors: 'yourstory',
                    category: 'education',
                    country: "us",
                    like: 6,
                    user_id: 2,
            },
            german: {
                    start_id: uuidv4(),
                    title:title,
                    subtitle: subtitle,
                    descrition: text,
                    img_url: image,
                    tag: "dfadfad",
                    brand,
                    date: new Date().toLocaleDateString(),
                    language: "fr",
                    authors: 'yourstory',
                    category: 'education',
                    country: "us",
                    like: 6,
                    user_id: 2,
      }
        };
          dispatch(postStory(payload))
        console.log(payload);
        console.log(title, subtitle);
        // history.push('/search')
    }
    const handleReview = (e) => {
        e.preventDefault()
        console.log(title, subtitle, image, tag, brand);
    }


  return (
    <Grid className = {styles.paddingLeft10} >
      <Grid container> 
        <Grid xs = {12} sm = {7} md = {5}>
          <Title title = {title} handleChnageTitle = {handleChnageTitle} handleKeyUpTitle = {handleKeyUpTitle} />
          <SubTitle subtitle = {subtitle} handleChnageSubTitle = {handleChnageSubTitle} handleKeyUpSubTitle = {handleKeyUpSubTitle} />
        </Grid>

        <Grid xs = {12} md = {5}>
          <ThumbAndBrand image = {image} handleImageChange = {handleImageChange} />
          <BrandElement />
        </Grid> 

        <Grid xs = {12} >
          <Tags tag = {tag} handleTag = {handleTag} handleTagDescription = {handleTagDescription}  />
        </Grid>

        <Grid >
          <UpdatedContentButton handleUpdate = {handleUpdate} handleReview = {handleReview} />
        </Grid>

      </Grid>

    </Grid> 
  )
}

export default FeaturedPage