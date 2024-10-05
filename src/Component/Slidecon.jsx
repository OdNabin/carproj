import React from 'react'
import icon from '../assets/icon.png';
const Slidecon = () => {
  return (
    <div>
        <div className='d-grid justify-content-center my-3' >
  <h5 style={{fontWeight:600}}>T & M Fixed</h5>
  <h5 className='text-center' style={{fontWeight:600}}>Bid Mode</h5>
</div>

<div className='d-flex justify-content-center align-items-center gap-5'>
  <div className='line'>

  </div>

  <div>
<img src={icon} alt="" />
  </div>
  <div className="line">

  </div>
</div>
    </div>
  )
}

export default Slidecon