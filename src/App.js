import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Store from './pages/Store';
import { Men } from './pages/Men';
import { Women } from './pages/Women';
import { Offers } from './pages/Offers';
import { Trending } from './pages/Trending';
import { Banner } from './pages/Banner';
import {Faq} from "./pages/Faq"
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import { Login } from './pages/Login';
// import { RequireAuth } from './HOC/RequireAuth';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>

      <Routes>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
        <Route path="" element={<Home></Home>} ></Route>
        <Route path="/store" element={ <Store></Store>}></Route>

        <Route path="/men/*" element={<Men></Men>}>

         

        </Route>

        
        <Route path="/men/:id" element={<ProductDetail></ProductDetail>}></Route>
        
         
        
        

        <Route path="/women" element={<Women></Women>}></Route>
        <Route path="/offers" element={<Offers></Offers>}>
            

        </Route>
        <Route path="/trending" element={<Trending></Trending>}></Route>

        <Route path="/faq" element={<Faq></Faq>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

      </Routes>
        
      <Footer></Footer>
     
    </div>
  );
}

export default App;

