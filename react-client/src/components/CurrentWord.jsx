import React from 'react';
import { connect } from 'react-redux';


class CurrentWord extends React.Component {
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

function mapStateToProps({ currentSelection }) {
  return { currentSelection };
}

export default connect(mapStateToProps)(CurrentWord);
