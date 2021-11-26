import React from "react";

const ScoresTable = (props) => {
  const { name, scores } = props.value;

  const DescendingScores = scores.sort((a, b) => {
    return a.s < b.s ? 1 : -1;
  });

  return (
    <div className="table-wrapper">
      <div>
        <h3>Scores of {name}</h3>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {DescendingScores.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{person.n}</td>
                  <td>{person.s}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoresTable;
