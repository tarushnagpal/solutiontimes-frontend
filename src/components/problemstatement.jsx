import React from 'react'
import YoutubeEmbedVideo from 'youtube-embed-video'
import ResponsiveEmbed from 'react-responsive-embed'
import Button from 'react-overlays'
import Modal from 'react-overlays'

import '../css/problemstatement.css'
import { NavLink } from 'react-router-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            youtube: "https://www.youtube.com/embed/"
        };
    }

    render() {
        
        var video_link = this.state.youtube.concat(this.props.youtube);
        console.log(video_link)

        return (
        <div>       
            <NavLink to='/challenge'>
                <div className="col col-lg-3 col-sm-6 col-xs-12 big-challenge">
                    <div className="challenge">
                        
                        <div className="category"> Domain: {this.props.domain} </div>
                        <ResponsiveEmbed src={video_link} allowFullScreen />
                        <div className="title"> {this.props.title} </div>
                        
                        <div className="details">
                            <div className="contestants"> Contestants: {this.props.submissions} </div>
                            <div className="date"> {this.props.date} </div>
                        </div>
                        <br className="clear" />
                    </div>
                </div>
            </NavLink>         
        </div>
        );  
    }
}

export default App;