
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './pages/Intro';
import Desc from './pages/Desc';
import Music from './pages/Music';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Intro />} />
          <Route path='/Intro' element={<Intro />} />
          <Route path='/Desc' element={<Desc />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
