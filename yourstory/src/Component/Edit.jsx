import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { htmlToText } from 'html-to-text'

class Edit extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange=(editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
   const para =  (draftToHtml(convertToRaw(editorState.getCurrentContent())))
    console.log(para)
    return (
      <div>
        <div style={{width:"50%"}}>
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange} 
        />
        </div>
        <div>
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
        </div>
        <div>{htmlToText(para)}</div>
      </div>
    );
  }
}

export {Edit}