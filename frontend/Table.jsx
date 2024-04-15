import React from 'react';
import './Table.css';
import tableImage from '../assets/images/figure_5.png';

function Table({ trump }) {
  return (
    <div className="Table">
      <div className={`tableImage`}><img src={tableImage} /> </div>
    </div>
  );
}

export default Table;