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
            <div>
                <h5>current Selection</h5>
                <h6>{this.props.currentSelection}</h6>
                <button onClick={this.props.handleWordSubmit}>
                    submit
                </button>
            </div>
        );
    }
}

export default CurrentWord;