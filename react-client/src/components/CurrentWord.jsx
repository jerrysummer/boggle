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
                <h6>{this.props.currentSelection}</h6>
                <button>submit</button>
            </div>
        );
    }
}

export default CurrentWord;