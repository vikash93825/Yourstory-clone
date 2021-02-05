import React from 'react';

const HeadingContent = ({head, para}) => {
    return (
        <div style={{display:"flex",paddingLeft: "5%",paddingTop: 30}}>
            <div style={{padding: 10, marginTop: 20}}>
                <img src="https://images.yourstory.com/assets/icons/ic_startup.svg" width="40px" />
            </div>
            
            <div style={{padding: 10}}>
                <h2>{head} </h2>
                <p style={{marginTop: -10}} >{para} </p>
            </div>
        </div>
    );
}

export default HeadingContent;
