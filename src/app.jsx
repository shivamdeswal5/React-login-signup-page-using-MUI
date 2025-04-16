import './app.css'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Home from './pages/home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Protected from './routes/protected'


function App() {

  return (
    <>  
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Signup />} />
           {/* Protected Routes */}
            <Route path='/home' element={<Protected><Home/></Protected>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
