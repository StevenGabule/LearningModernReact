import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

    state = {lat: null, lon: null, errMessage: ''};

    /*constructor(props) {
        super(props);
        this.state = {lat: null, lon: null};
    }*/

    componentDidMount() {
        window.navigator
            .geolocation
            .getCurrentPosition(
                position => {
                    this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
                },
                err => this.setState({errMessage: err.message})
            );
    }

    renderContent() {
        if (this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage}</div>
        }

        if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message={"Please accept location request"}/>
    }

    render() {
        return (<div className={"border red"}>{this.renderContent()}</div>)
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
