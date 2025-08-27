import React from 'react'
import Duplicate from './Duplicate'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home1 from './Home1'
import Log from './Log'
import About from './About'
import Uploadnews from './Uploadnews'
import Upgallery from './Upgallery'
import Upcontact from './Upcontact'
import Contact from './Contact'
import Gallery from './Gallery'
import Registration from './Registration'



const App = () => {
  return (
   <>
   <BrowserRouter>
   
   <Routes>
   
   <Route path='/' element={<Home1></Home1>}></Route>

<Route path='/log' element={<Log></Log>}></Route>
 
  <Route path='/about' element={<About></About>}></Route>

 <Route path='/upload' element={<Uploadnews></Uploadnews>}></Route>
 <Route path='upgallery' element={<Upgallery></Upgallery>}></Route>
  <Route path='upcontact' element={<Upcontact></Upcontact>}></Route>
  <Route path='/contact' element={<Contact></Contact>}></Route>
  <Route path='/gallery' element={<Gallery></Gallery>}></Route>
   <Route path='/regis' element={<Registration></Registration>}></Route>

   </Routes>
   
   </BrowserRouter>
   
   
   
   
   </>
  )
}

export default App
