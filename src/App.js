import './App.css';
import About from './components/About';
import Visualizer from './components/Visualizer';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <>
     <div>
        <h3 className='heading'>Dijkstra's Visualizer</h3>
      </div>

      <Router>
           <div className="App">
             <Navbar/>
           <Routes>
                 <Route exact path='/algovisualizer' element={< About />}></Route>
                 <Route exact path='/visualize' element={< Visualizer />}></Route>
           </Routes>
           </div>
       </Router>
    </>
  );
}

export default App;
