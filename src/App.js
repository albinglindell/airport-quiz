import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ingame from './Components/Ingame';
import Landingpage from './Components/Landingpage'
import Result from './Components/Result';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landingpage />}/>
        <Route path='/ingame' element={<Ingame/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>


    </div>
  );
}

export default App;
