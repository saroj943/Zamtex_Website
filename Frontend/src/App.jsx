import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutHome from './pages/Home'
import Aboutus from './pages/Aboutus'
import AboutServices from './pages/aboutServices'
import AboutPricing from "./pages/aboutPricing"
import AboutBlog from "./pages/Blog/AboutBlog.jsx"
import AboutWebDesign from './pages/Blog/AboutWebDesign.jsx'
import AboutDevelopment from './pages/Blog/AboutDevelopment.jsx'
import AboutSEO from './pages/Blog/AboutSEO.jsx'
import AboutBusiness from './pages/Blog/AboutBusiness.jsx'
import AboutAI from './pages/Blog/AboutAI.jsx'
import AboutWebDesign2 from './pages/Blog/AboutWebDesign2.jsx'
import AboutWebDevelopment from './pages/Blog/AboutWebDevelopment.jsx'
import AboutContact from './pages/aboutContact.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<AboutHome />}/>
        <Route path='/about' element= {<Aboutus />} />
        <Route path='/services' element= {<AboutServices />} />
        <Route path='/pricing' element= {<AboutPricing />} />
        <Route path='/blog' element= {<AboutBlog />} />
        <Route path='/blog/web-design' element={<AboutWebDesign />} />
        <Route path='/blog/development' element={<AboutDevelopment />} />
        <Route path='/blog/seo' element={<AboutSEO />} />
        <Route path='/blog/business' element={<AboutBusiness />} />
        <Route path='/blog/ai' element={<AboutAI />} />
        <Route path='/blog/website-design' element={<AboutWebDesign2 />} />
        <Route path='/blog/website-development' element={<AboutWebDevelopment />} />
        <Route path='/contact' element={<AboutContact />} />
      </Routes>
    </div>
  )
}

export default App
