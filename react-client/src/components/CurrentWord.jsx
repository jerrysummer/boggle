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
                <h6>selection:</h6>
                <button>submit</button>
            </div>
        );
    }
}

export default CurrentWord;