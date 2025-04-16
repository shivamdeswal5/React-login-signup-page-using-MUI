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
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
           {/* Protected Routes */}
           <Route element ={<Protected/>}>
            <Route path='/' element={<Home/>} />
           </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
