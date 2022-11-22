import React from 'react';
import './Toolbar.css';

const ToolbarItem = ({filterItem, selected, onSelectFilter}) => {
  return (
    <>
    {selected 
      ? <li 
        className={["select__item", "active"].join(' ')} 
        onClick = {() => onSelectFilter(filterItem)} 
        >{filterItem}</li>
      : <li 
        className="select__item" 
        onClick = {() => onSelectFilter(filterItem)} 
        >{filterItem}</li>
    }
    </>
  )
}

export default ToolbarItem