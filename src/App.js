import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import './App.css';
import Heading from "./components/Heading";
import HotAcceroiesProducts from "./components/HotAcceroiesProducts";
import HotAccesories from "./components/HotAccesories";
import Navbar from './components/Navbar';
import Offers from "./components/Offers";
import PreNavbar from './components/PreNavbar';
import Slider from "./components/Slider";
import StarProducts from "./components/StarProducts";
import ProductReviews from './components/ProductReviews'
import  data from './data/data.json'
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";

function App() {
  return (
    <Router >
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones}  tv={data.tv} laptop={data.laptop} fitNessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accesories={data.accessories} />


      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text={'start Products'} />
      <StarProducts starProduct={data.starProduct} />
      <Heading text={'Hot Accesories'} />
      <HotAccesories />
       

       <Route exact path='/music'>
        <HotAcceroiesProducts music ={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
       </Route>

       <Route exact path='/smartdevice'>
        <HotAcceroiesProducts  smartDevice ={data.hotAccessories.smartDevice}  smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
       </Route>

       <Route exact path='/home'>
        <HotAcceroiesProducts  home={data.hotAccessories.home}  homeCover={data.hotAccessoriesCover.home} />
       </Route>

       <Route exact path='/lifeStyle'>
        <HotAcceroiesProducts   lifeStyle={data.hotAccessories.lifeStyle}  lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
       </Route>
       <Route exact path='/mobileAccessories'>
        <HotAcceroiesProducts   mobileAccessories={data.hotAccessories.mobileAccessories}   mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
       </Route>

       <Heading text={'Products Reviews'} />
       <ProductReviews productReviews={data.productReviews} />
       <Heading text={' Videos '} />

       <Videos videos={data.videos} />

       <Heading text={' In the Press '} />
      <Banner end={data.banner.end} />

      <Footer footer={data.footer} />

    </Router>
  );
}

export default App;
 