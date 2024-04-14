import React from "react";
import { Table } from "react-virtualized";
const TableView = () => {
  const users = [
    { name: "Shalom", age: 15, city: "Bangalore" },
    { name: "Sofia", age: 22, city: "New York" },
    { name: "Aryan", age: 18, city: "London" },
    { name: "Riya", age: 20, city: "Tokyo" },
    { name: "Kiran", age: 25, city: "Mumbai" },
    { name: "Liam", age: 30, city: "Los Angeles" },
    { name: "Priya", age: 28, city: "Paris" },
    { name: "Rohan", age: 19, city: "Sydney" },
    { name: "Ella", age: 16, city: "Toronto" },
    { name: "Aarav", age: 21, city: "Berlin" },
  ];

  const rowRender = ({ index, key, style }) => {
    const rowData = users[index];
    return (
      <div key={key} style={style} className="table-row-cell">
        <p className="table-row-content">{rowData.name}</p>
        <p className="table-row-content">{rowData.age}</p>
        <p className="table-row-content">{rowData.city}</p>
      </div>
    );
  };
  const headerRender = ({ columnIndex }) => {
    return (
      <div className="table-header" key={columnIndex}>
        <p className="table-header-content">Name</p>
        <p className="table-header-content">Age</p>
        <p className="table-header-content">City</p>
      </div>
    );
  };
  return (
    <div>
      <Table
        width={500}
        height={550}
        rowCount={users.length}
        rowHeight={50}
        rowGetter={(index) => users[index]}
        headerHeight={50}
        rowRenderer={rowRender}
        headerRowRenderer={headerRender}
      />
    </div>
  );
};

export default TableView;
