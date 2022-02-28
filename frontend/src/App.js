import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.component';
import { Dashboard, Login, Register } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
