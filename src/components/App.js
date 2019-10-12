import React from 'react';
import SearchBar from "./SearchBar";
import unSplash from "../api/unsplash";

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await unSplash.get('/search/photos', {
            params: {query: term},
        });
        this.setState({images: response.data.results});
    };


    render() {
        return (
            <div className={"ui container"} style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <p>Found: {this.state.images.length} images</p>
            </div>)
    }
}

export default App;