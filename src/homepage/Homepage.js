import React, { Component } from 'react'

import ImageSlider from './ImageSlider';
import OurCollection from './OurCollection';
import Footer from './Footer';
import Navbar from './Navbar';
export default class HomePage extends Component {
  
  
  
  

    render() {
      
        return (
        <div>
      <Navbar />
      <ImageSlider />
      <OurCollection />
      <Footer />
      </div>
         
        )
    }
}


// "start": "react-scripts start",