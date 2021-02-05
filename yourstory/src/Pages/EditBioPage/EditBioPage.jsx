import React, {useState} from "react"
import Grid from "@material-ui/core/Grid"
import styles  from "./EditBioPage.module.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import parse from "html-react-parser"
const EditBioPage = () => {
    const [text, setText] = useState("")
    const [normalText, setNormalText] = useState("")
    const handleRedirectToProfile = () => {
        console.log();
    }
    console.log(normalText);
    console.log(text);
    // ClassicEditor
    // .create( document.querySelector( '#editor' ), {
    //     plugins: [ SimpleUploadAdapter, ...ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ) ],
    //     simpleUpload: {
    //         // The URL that the images are uploaded to.
    //         uploadUrl: 'https://api.imgur.com/oauth2',

    //         // Enable the XMLHttpRequest.withCredentials property.
    //         withCredentials: true,

    //         // Headers sent along with the XMLHttpRequest to the upload server.
    //         headers: {
    //             'X-CSRF-TOKEN': 'CSRF-Token',
    //             Authorization: 'Bearer 9e457f7c95e737c'
    //         }
    //     }
    // } )
    // .then( res => console.log(res.data) )
    // .catch( err => console.log(err) );
    // console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));
    return (
        <>
            <Grid xs = {12}>
                <div className = {styles.myBioHeader} >
                    <div>
                        <ArrowBackIcon onClick = {handleRedirectToProfile} />
                    </div>
                    <div className = {styles.bioStyle}>
                        BIO
                    </div> 
                </div>
            </Grid>
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
                    {/* <h2>Content</h2>
                    <p>{parse(text)}</p> */}
                    <button className = {styles.savBtn} onClick = { () => setNormalText(parse(text))} >Save</button>
                </div>
            </div>
        </>
    )
}

export default EditBioPage