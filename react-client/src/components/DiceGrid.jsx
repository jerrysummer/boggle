import React from 'react';
import Die from './Die.jsx';
import { connect } from 'react-redux';

class DiceGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="diceGrid">
        {
          this.props.board.map((die, i) => (<Die
            die={die}
            key={i}
            pos={i}
          />))
        }
      </div>
    );
  }
}

function mapStateToProps({ board }) {
  return { board };
}

export default connect(mapStateToProps)(DiceGrid);
