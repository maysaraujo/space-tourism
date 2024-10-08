import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import '../src/styles/style.css';
import Destination from './pages/Destination/Destination';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
