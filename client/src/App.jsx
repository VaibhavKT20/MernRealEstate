import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'
import Footer from './pages/Footer'
import Services from './pages/Services'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/search' element={<Search/>}/>
      
      <Route path='/about' element={<About/>}/>
      <Route path='/listing/:listingId' element={<Listing/>}/>
    
    <Route element={<PrivateRoute/>} > 
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/create-listing' element={<CreateListing/>}/>
    <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
    </Route>
    <Route path='/services' element={<Services/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}