import React from 'react';
import Die from './Die.jsx'

class DiceGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="diceGrid">
                {
                    this.props.board.map((die,i) => {
                            return <Die 
                                        die={die} 
                                        key={i} 
                                        pos={i}
                                        handleDieSelect={this.props.handleDieSelect}  
                                    />
                    })
                }
            </div>
        )
    }
}

export default DiceGrid;