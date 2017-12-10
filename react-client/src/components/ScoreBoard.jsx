import React from 'react';

const ScoreBoard = (props) => {
  const wordToScore = (word) => {
    const len = word.length || 0;
    if (len <= 2) return 0;
    else if (len <= 4) return 1;
    else if (len === 5) return 2;
    else if (len === 6) return 3;
    else if (len === 7) return 5;
    else if (len >= 8) return 11;
  }; // convert string length to score

  const wordNScore = props.pastSelection.map(string => [string, wordToScore(string)]); // convert array of chars to include score

  let totalScore = 0;

  wordNScore.forEach((element) => {
    totalScore += element[1];
  }); // calculate total score

  return (
    <div className="scoreBoard">
      <table >
        <tbody>
          <tr>
            <th className="leftCol">Word</th>
            <th>Score</th>
          </tr>
          {
            wordNScore.map((arr, i) => (
              <tr key={i}>
                <td className="leftCol">{arr[0].toLowerCase()}</td>
                <td>{arr[1]}</td>
              </tr>
            ))
          }
          <tr>
            <th className="leftCol">Total</th>
            <th>{totalScore}</th>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoard;
