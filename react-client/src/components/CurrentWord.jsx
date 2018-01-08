import React from 'react';
import { connect } from 'react-redux';
import { handleWordSubmit } from '../actions';


class CurrentWord extends React.Component {
  componentDidMount() {}
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
          onClick={() => this.props.handleWordSubmit(this.props.currentSelection)}
        />
      </div>
    );
  }
}

function mapStateToProps({ currentSelection }) {
  return { currentSelection };
}

export default connect(mapStateToProps, { handleWordSubmit })(CurrentWord);
