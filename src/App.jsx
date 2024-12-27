import Home from './components/Home'
import Jobs from './components/Jobs'
import Login from './components/Login'
import NotFound from './components/NotFound'

import { Route,Routes } from 'react-router-dom'

import './App.css'

const App=()=> {

  return (
    <div className='main-cont'>

      <Routes>

        <Route path = '/' element = {<Home/>}></Route>

        <Route path = '/login' element = {<Login/>}></Route>

        <Route path = '/jobs' element = {<Jobs/>}></Route>

        <Route path = '/*' element = {<NotFound/>}></Route>

      </Routes>


    </div>
  )
}

export default App
