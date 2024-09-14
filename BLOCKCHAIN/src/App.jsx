import { useState } from 'react'
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import Layout from './app/Layout/Layout.jsx'
import HomePage from '../src/Components/HomePage/HomePage.jsx'
function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout><HomePage/></Layout>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
