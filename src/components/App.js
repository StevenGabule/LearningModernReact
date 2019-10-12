import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import youtube from '../api/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 25,
                key: 'AIzaSyDkG25Np9zFS0nOnReruGAR4UcK6uKLVt4'
            }
        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };

    render() {
        return (
            <div className={"ui container"} style={{marginTop: '20px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="eleven wide column">
                        <p>I have {this.state.videos.length} videos.</p>
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect}  videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;