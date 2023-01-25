import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
// import Howitworks from './components/Howitworks';
import Categories from './components/Categories';
import FeaturedCommunities from './components/FeaturedCommunities';
import BlogPost from './components/BlogPosts';
import WhatsNext from './components/WhatsNext';
import Footer from './components/Footer';
import Maptabs from './components/Maptabs';
import ImageSection from './components/ImageSection';

// import { BrowserRouter, Routes, Route } from "react-router-dom";







 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
    <Slider/>
   {/* <div width="500px" style={{position: "relative"}}></div>  */}
    {/* <Howitworks mode={mode} toggleMode={toggleMode}/> */}
   <Maptabs mode={mode} toggleMode={toggleMode} /> 
    <ImageSection/>
    <FeaturedCommunities mode={mode} toggleMode={toggleMode}/>
    <Categories mode={mode} toggleMode={toggleMode} />
    <BlogPost mode={mode} toggleMode={toggleMode} />
    <WhatsNext mode={mode} toggleMode={toggleMode}/>
    <Footer /> 
    <div className="container my-3">
   
    {/* <Switch> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route> */}
          {/* <Route exact path="/">
              <About />
          </Route> */}
    {/* </Switch> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      {/* </Routes> */}
    {/* </BrowserRouter> */} 



    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;