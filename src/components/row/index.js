import React, { Component } from 'react';

export default ({ decorative, children }) => {
  const count = React.Children.count(children);

  const renderColumns = React.Children.map(children, (child, index) => {
    const columns = <div className="col-sm">{child}</div>;
    const twoColumns1 = <div className="col-sm-6 ">{child}</div>;
    const twoColumns2 = <div className="col-sm-5 offset-sm-1">{child}</div>;
    const threeColumns = <div className="col-sm-3">{child}</div>;

    if (count === 3) {
      if (index == 1) {
        return columns;
      }
      return threeColumns;
    }

    if (count == 2 && decorative) {
      if (index == 0) {
        return twoColumns1;
      }
      return twoColumns2;
    }

    return columns;
  });

  return <div className="row">{renderColumns}</div>;
};
