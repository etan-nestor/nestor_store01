import React from 'react';
import './bag.css';

const Bag = ({animes,reference}) => {
  return (
<section id="bag" className="bag" ref={reference}>
    <h1>My Bag</h1>
</section>
  )
}

export default Bag