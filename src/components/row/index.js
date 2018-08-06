import React, { Component } from 'react';

export default ({ children }) => {
  const count = React.Children.count(children);

  const renderColumns = React.Children.map(children, (child, index) => {
    const columns = <div className="col-sm">{child}</div>;
    const threeColumns = <div className="col-sm-3">{child}</div>;

    if (count === 3) {
      if (index == 1) {
        return columns;
      }
      return threeColumns;
    }

    return columns;
  });

  return <div className="row">{renderColumns}</div>;
};
