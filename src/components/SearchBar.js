import React, {Component} from 'react';

class SearchBar extends Component {
    state = {term: ''};

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    };

    onFormSubmit = e => {
      e.preventDefault();
      this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className={"search-bar ui segment"}>
                <form onSubmit={this.onFormSubmit} className={"ui form"}>
                    <div className="field">
                        <label htmlFor="videoSearch">Video Search</label>
                        <input type="text" id={"videoSearch"} value={this.state.term} onChange={this.onInputChange}
                               placeholder={"Search videos..."}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;