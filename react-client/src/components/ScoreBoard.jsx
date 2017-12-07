import React from 'react';

const ScoreBoard = (props) => {

    let wordToScore = (word) => {
        let len = word.length || 0;
        if (len <= 2) return 0;
        else if (len <=4) return 1;
        else if (len === 5) return 2;
        else if (len === 6) return 3;
        else if (len === 7) return 5;
        else if (len >= 8) return 11;
    };

    let wordNScore = props.pastSelection.map(string => [string, wordToScore(string)]);

    let totalScore = 0;

    wordNScore.forEach(element => {
        element = element || [0,0]
        totalScore += element[1]
    });
    return (
        <div className="scoreBoard">
            <h4> ScoreBoard </h4>
            <tbody>
                <tr>
                    <th>Word</th>
                    <th>Score</th>
                </tr>
                {
                    wordNScore.map((arr, i) => {
                        return(
                            <tr>
                                <td>{arr[0]}</td>
                                <td>{arr[1]}</td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <th>Total</th>
                    <th>{totalScore}</th>
                </tr>

            </tbody>
        </div>
    )
}

export default ScoreBoard;