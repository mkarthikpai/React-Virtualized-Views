import React from "react";
import { List } from "react-virtualized";

const ListView = () => {
  const data = ["item1", "item2", "item3", "item4"];
  const rowRender = ({ index, key, style }) => (
    <div key={key} style={style}>
      {data[index]}
    </div>
  );
  return (
    <div>
      <List
        rowRenderer={rowRender}
        width={300}
        height={300}
        rowCount={data.length}
        rowHeight={50}
      />
    </div>
  );
};

export default ListView;
