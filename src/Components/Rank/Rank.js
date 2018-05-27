import React from 'react';


const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`Hello ${name}, you've done this`}
      </div>
      <div className='white f1'>
        {`${entries} times! Holy shit!`}
      </div>
    </div>
    );
}

export default Rank;