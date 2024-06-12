import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Error404 from './components/Error404'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App