import React from 'react';


class CurrentWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    render() {
        return (
            <div className="currentWord">
                <h5 className="word">Current Word : </h5>
                <h6>{this.props.currentSelection}</h6>
                <button className="button" onClick={this.props.handleWordSubmit}>
                    Submit Word
                </button>
            </div>
        );
    }
}

export default CurrentWord;