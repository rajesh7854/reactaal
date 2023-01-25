import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MapChart from './MapChart';
import Canada from './Canada'
import usa from './images/107-1076696_us-usa-flag-round-png-removebg-preview.png'
import canadaFlag from './images/1200px-Flag_of_Canada__leaf_.svg-removebg-preview.png'


const mystyle = {
   width: "55px"};
const mystyleus = {
   width: "55px" };


const backgrnd = {
    background: "transparent"
}



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState('home')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='container-fluid maps_background py-5 mt-2 px-xxl-5 px-xl-5 px-md-3 px-md-1 form_section'>
      <div className='container '>
        <div className='row '>
          <div class="col-md-4">
            <div class="ps-3 pt-2">
              <h2>Search Our Communities</h2>
              <p>Click on our map to view our featured listings.</p>
            </div>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div className='col-4 justify-content-xl-end justify-content-md-end justify-content-sm-center justify-content-center justify-content-xl-end    d-flex'>
                <button style={backgrnd} onClick={() => { setActiveTab('home') }} className={activeTab == 'home' ? 'active usa_button' : 'usa_button'}><img style={mystyleus} className='  '  src={usa}></img> <br/> <h5 className='bold'>U.S.A</h5> </button>
              </div>
              <div className='col-8 justify-content-xl-start justify-content-md-start justify-content-sm-center justify-content-xl-start   d-flex'>
                <button style={backgrnd} onClick={() => { setActiveTab('profile') }} className={activeTab == 'profile' ? 'active Canada_button' : 'Canada_button'}><img style={mystyle} className=''  src={canadaFlag}></img><br/> <h5 className='bold'>CANADA</h5></button>
              </div>
            </div>
        </div>
      </div>
      <div className='content_box'>
        {activeTab == 'home' ?
        <div> <MapChart /></div>
          : <div className='d-flex justify-content-center canada_map'> <Canada /></div>}
        </div>
      </div>
    </div>
  );
}
