import React from 'react'
import PropTypes from 'prop-types'
 

 export default function  Searchbox(props)  {
  return (
   

  <div className=' d-flex   justify-content-center'>
    <form action='' className='search_bar'>
      {/* <input type='' placeholder='Search Community , State , City , etc ' name='q'  > 
      <ul>
        <li> Place     
        </li>
       
      </ul>
      </input> */}
      <div className="input-group ">
  <button className="btn  dropdown-toggle mt-1 text-white home_searchbar"  type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/activeadultliving/place">Place Page</a></li>
    
  </ul>
  <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
</div>
      <button type="submit" className='rounded-pill'><i className={`fa fa-search   text-${props.mode==='light'?'dark':'light'}`}>
       
      </i> </button>
    </form>
  </div>
)
}

Searchbox.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Searchbox.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };



// export default Searchbox
