import React from "react";
import { Grid } from "react-virtualized";

const GridView = () => {
  const peopleData = ["Shalom", "Peter", "Shawn", "Michael", "Travies"];
  const cellRender = ({ rowIndex, key, style }) => {
    const personName = peopleData[rowIndex];
    return (
      <div key={key} style={style}>
        {personName}
      </div>
    );
  };
  return (
    <div>
      <Grid
        width={300}
        height={300}
        rowCount={peopleData.length}
        columnCount={3}
        rowHeight={50}
        cellRenderer={cellRender}
        columnWidth={100}
      />
    </div>
  );
};

export default GridView;
