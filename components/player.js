import React, { Component } from 'react'
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';

class Video extends Component {

    _onReady(event) {
        // add mute
        event.target.mute();
        // add autoplay
        event.target.playVideo();
    }

    render() {
        const opts = {
            width: "390",
            height: "auto",

            playerVars: {
                autoplay: 0
                // remove video controls 
                // controls: 0,
                // remove related video
                // rel: 0
            }
        };
        const { videoId } = this.props;
        return (

            <YouTube

                videoId={videoId}
                opts={opts}
                // add autoplay
                onReady={this._onReady}
                // add loop
                onPlay={this.videoOnPlay}
                onStateChange={this.videoStateChange}
                onEnd={this._onReady}
            />

        )
    }

}

export default Video;