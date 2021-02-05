import React from 'react';
import YouTube from 'react-youtube'
import styles from './YourstoryComp.module.css'

class YourstoryTv extends React.Component {
    render() {
        const {id} = this.props
        const opts = {
            height: '600px',
            width: '100%',
            playerVars: {
                autoplay: 1,
            },
        };

        return <YouTube videoId={id} className={styles.com} opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default YourstoryTv