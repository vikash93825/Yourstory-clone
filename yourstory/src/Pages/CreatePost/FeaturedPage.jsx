import React,{useState} from "react"
import styles from "./FeaturedPage.module.css"
import Title from "./FeaturedFolder/Title"
import BrandElement from "./FeaturedFolder/BrandElement"
import SubTitle from "./FeaturedFolder/SubTitle"
import ThumbAndBrand from "./FeaturedFolder/ThumbAndBrand"
import UpdatedContentButton from "./FeaturedFolder/UpdatedContentButton"
import { Upload } from '../../CustomHooks/upload'

import Grid from "@material-ui/core/Grid"
import Tags from "./FeaturedFolder/Tags"
import { useDispatch } from "react-redux"
import { postStory } from "../../Redux/DataRedux/actionCreator"
import { v4 as uuidv4 } from 'uuid';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser"

const FeaturedPage  = (props) => {

    const [title, setTitle] = useState("")
    const [subtitle, setSubTitle] = useState("")
    const [image,setImage] = useState(null)
    const [tag, setTag] = useState("")
    const [brand, setBrand] = useState("MyStory")
    const [tagDescription, setTagDescription] = useState("")
    const dispatch = useDispatch();
    const [text, setText] = useState("")
    const [normalText, setNormalText] = useState("")

    const handleRedirectToProfile = () => {
        console.log();
    }
    console.log(normalText);
    console.log(text);
   

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
            // e.map(e=>console.log(e))
            console.log(e[0])
            setImage(e[0])
    }

    const handleTag = (e)=> {
        setTag(e.target.value)
    }

    const handleTagDescription = (e) => {
        setTagDescription(e.target.value)
    }

    // const photo = React.createRef()

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log(title, subtitle, image, tag, brand);
        let payload = {
            start_id: uuidv4(),
            title:title,
            descrition: "",
            img_url: image,
            tag: tag,
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
                    descrition: "",
                    img_url: image,
                    tag: tag,
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
        console.log(normalText);
        console.log(title, subtitle, image, tag, brand);
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
          {/* <ThumbAndBrand image = {image} handleImageChange = {handleImageChange} /> */}
          <Upload
            onDrop={ files =>handleImageChange(files) }
            />

          <BrandElement />
        </Grid> 

        <Grid xs = {12} >
          <Tags tag = {tag} handleTag = {handleTag} handleTagDescription = {handleTagDescription}  />
        </Grid>

        <Grid>
        <div className = {styles.EditBioPage}>
                <div className = {styles.editor} >
                    <CKEditor
                    editor = {ClassicEditor}
                    data = {text}
                    onChange = {(e, editor) => {
                        const data = editor.getData()
                        setText(data)
                    }}
                    />
                </div>
                <div>
                    <button className = {styles.savBtn} onClick = { () => setNormalText(parse(text))} >Save</button>
                </div>
            </div>
        </Grid>

        <Grid >
          <UpdatedContentButton handleUpdate = {handleUpdate} handleReview = {handleReview} />
        </Grid>
      </Grid>
    </Grid> 
  )
}

export default FeaturedPage