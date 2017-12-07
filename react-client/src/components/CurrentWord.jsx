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
                <h5 className="letters">{this.props.currentSelection}</h5>
                <input 
                    type="submit" 
                    value="Submit Word" 
                    id="submit" 
                    className="button"
                    onClick={this.props.handleWordSubmit}
                />
            </div>
        );
    }
}

export default CurrentWord;