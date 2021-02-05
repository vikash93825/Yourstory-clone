import React from 'react';
import YouTube from 'react-youtube'

class YourstoryTv extends React.Component {
    render() {
        const {id} = this.props
        const opts = {
            height: '550',
            width: '100%',
            
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return <YouTube videoId={id} opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default YourstoryTv