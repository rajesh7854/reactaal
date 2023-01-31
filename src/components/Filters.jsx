import React from 'react'

function Filters() {
  return (
    <>
    <h4>Filters</h4>
<div className='col how_itworks  rounded shadow  px-4 py-3'>
        <h6 className='text-light  mb-3 '>Home Type</h6>
    <div className="input-group mb-3">
  <div className="input-group-text border-0 how_itworks">
    <input className="form-check-input mt-0 " type="checkbox" value="" aria-label="Checkbox for following text input"/>
  </div>
  <label className='text-light ms-3'>New Homes</label>
  
</div>
<div className="input-group mb-3">
  <div className="input-group-text border-0 how_itworks">
    <input className="form-check-input mt-0 " type="checkbox" value="" aria-label="Checkbox for following text input"/>
  </div>
  <label className='text-light ms-3'>Resale Homes</label>
  
</div>
<div className="input-group mb-3">
  <div className="input-group-text border-0 how_itworks">
    <input className="form-check-input mt-0 " type="checkbox" value="" aria-label="Checkbox for following text input"/>
  </div>
  <label className='text-light ms-3'>Grand Opening</label>
  
</div>
<div className="input-group mb-3">
  <div className="input-group-text border-0 how_itworks">
    <input className="form-check-input mt-0 " type="checkbox" value="" aria-label="Checkbox for following text input"/>
  </div>
  <label className='text-light ms-3'>New and Resals Homes</label>
  
</div>
<div className="input-group mb-3">
  <div className="input-group-text border-0 how_itworks">
    <input className="form-check-input mt-0 " type="checkbox" value="" aria-label="Checkbox for following text input"/>
  </div>
  <label className='text-light ms-3'>Rental</label>
  
</div>
<div className="input-group mb-3">
  <div className="input-group-text border-0 how_itworks">
    <input className="form-check-input mt-0 " type="checkbox" value="" aria-label="Checkbox for following text input"/>
  </div>
  <label className='text-light ms-3'>Coming Soon </label>
  
</div>

</div>



<div className='col how_itworks  rounded shadow  p-4'>
        <h6 className='text-light  mb-3 '>Home Type</h6>

        <div className="row  mb-3">
  <div className='col'>        
    <label  className="text-light   ">Low
  <div className="input-group  bg-light w-50 p-1 rounded mb-3">
<input list="browsers" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"/>
  <option value="Firefox"/>
  <option value="Internet Explorer"/>
  <option value="Opera"/>
  <option value="Safari"/>
  <option value="Microsoft Edge"/>
</datalist>
</div>
</label>
  </div>
  <div className='col'>
  <label  className="text-light  ">High
  <div className="input-group  bg-light w-50 p-1 rounded mb-3">
<input list="browsers" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"/>
  <option value="Firefox"/>
  <option value="Internet Explorer"/>
  <option value="Opera"/>
  <option value="Safari"/>
  <option value="Microsoft Edge"/>
</datalist>
</div>
</label>
  </div>
</div>

</div>
    </>
    
  )
}



export default Filters