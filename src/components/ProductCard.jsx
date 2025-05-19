import React from 'react';
import '../App.css';


function ProductCard ({ image, title, Description })  {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
		  <div className='content'>
			   <p>{Description}</p>
			  
			  
		   </div>
		  <button src="#">Buy Now</button>
    </div>
  );
};

export default ProductCard;
