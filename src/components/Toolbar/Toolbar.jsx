import React from 'react'
import ToolbarItem from './ToolbarItem';
import './Toolbar.css';

const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <ul className="select">
      {filters.map((item) =>
        <ToolbarItem 
        filterItem = {item} 
        key = {item}
        onSelectFilter = {onSelectFilter}
        selected = {item == selected ? selected : ''}
        />
      )}
    </ul>
  )
}

export default Toolbar