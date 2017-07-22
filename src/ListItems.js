import React from 'react';
import './index.scss';

const ListItems = (props) => {
  return (
    <div className="DatList">
    <ul className="unordered">
      {props.list.map((name) => {
        return <div className="ListItems">
          <input id="checkBox" type="checkbox"/><li>{name}</li>
               </div>
      })}
    </ul>
    <button className="clear" onClick={props.onDelete}>Clear List</button>
    </div>
  );
};

export default ListItems;
