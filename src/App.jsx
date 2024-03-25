import './App.css'
import {Landing} from './views/Landing'
import Login from './views/Login'
import Register_std from './views/Register_std'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Estudiante from './views/Estudiante'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>}/>
          <Route path='/home' element={<Landing/>}/>

          <Route path='/std/'>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register_std/>}/>
            <Route path='profile' element={<Estudiante/>}/>

          </Route>  

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
