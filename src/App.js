// import { Place } from '@material-ui/icons';
import './App.css';
import Place from './components/Place';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/activeadultliving' element={<Home />}></Route>
        <Route index path="/activeadultliving" element={<Home />} />
        <Route  path="/activeadultliving/Place" element={<Place />} />
      </Routes>
    </BrowserRouter>
    </>





  );
};

export default App;App;



