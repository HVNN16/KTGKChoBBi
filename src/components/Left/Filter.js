import React from "react";
import Button from 'react-bootstrap/Button';
function Filter({ onSizeFilter }) {
  const handleSizeFilter = (size) => {
    onSizeFilter(size);
  }

  return (
    <div className="Left-Container"> 
      <div className="filter-left">
        <p className="Size">Size:</p>
        <div className="gr-btt">
          <Button variant="danger" className='Button1' onClick={() => handleSizeFilter('XS')}>XS</Button>{' '}
          <Button variant="danger" className='Button1' onClick={() => handleSizeFilter('S')}>S</Button>{' '}
          <Button variant="danger" className='Button1' onClick={() => handleSizeFilter('M')}>M</Button>{' '}
          <Button variant="danger" className='Button1' onClick={() => handleSizeFilter('ML')}>ML</Button>{' '}
          <br></br>
          <Button variant="danger" className='Button1' onClick={() => handleSizeFilter('L')}>L</Button>{' '}
          <Button variant="danger" className='Button1' onClick={() => handleSizeFilter('XL')}>XL</Button>{' '}
          <Button variant="danger" className='Button1' onClick={() => handleSizeFilter('XXL')}>XXL</Button>{' '}
          <Button variant="danger" className='Button1' onClick={() => handleSizeFilter(null)}>ALL</Button>{' '}
        </div>
      </div>
    </div>
  );
}

export default Filter;
