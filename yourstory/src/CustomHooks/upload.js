import React, { useState, useEffect, useRef } from "react";
function removeItems(arr, item) {
  for (var i = 0; i < item; i++) {
    arr.pop();
  }
}
function useFiles({ initialState = [], maxFiles }) {
  const [state, setstate] = useState(initialState);
  function withBlobs(files) {
    const destructured = [...files];
    console.log(files);
    if (destructured.length > maxFiles) {
      const difference = destructured.length - maxFiles;
      removeItems(destructured, difference);
    }
    const blobs = destructured
      .map(file => {
        if (file.type.includes("image")) {
          console.log(file);
          file.preview = URL.createObjectURL(file);
          return file.preview;
        }
        console.log("not image");
        return null;
      })
      .filter(elem => elem !== null);
    setstate(blobs);
  }
  return [state, withBlobs];
}
function Upload({ onDrop, maxFiles = 1 }) {
  const [over, setover] = useState(false);
  const [files, setfiles] = useFiles({ maxFiles });
  console.log(files);
  const $input = useRef(null);
  useEffect(() => {
    if (onDrop) {
      onDrop(files);
    }
  }, [files]);
  return (
    <>
      <div
        onClick={() => {
          $input.current.click();
        }}
        onDrop={e => {
          e.preventDefault();
          e.persist();
          setfiles(e.dataTransfer.files);
          setover(false);
        }}
        onDragOver={e => {
          e.preventDefault();
          setover(true);
        }}
        onDragLeave={e => {
          e.preventDefault();
          setover(false);
        }}
        className={over ? "upload-container over" : "upload-container"}
      >
        <h2>Upload files here!</h2>
        <input
          type="file"
          accept="image/*"
          ref={$input}
          onChange={e => {
            console.log(e.target.files);
            // const preview = URL.createObjectURL(e.target.files)
            // console.log(preview);
            setfiles(e.target.files);
          }}
          multiple={maxFiles > 1}
        />
      </div>
      <div className="blob-container">
        <h2>File Previews</h2>
        {/* {files && files.map(file => { */}
          {/* console.log(files[0]); */}
          <img src={files[0]} alt="your file" width="400px" height="200px"/>
        {/* })} */}
        <p>{JSON.stringify(files.length)}</p>
      </div>
    </>
  );
}
export { Upload };
