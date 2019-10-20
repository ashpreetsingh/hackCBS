
import ad1 from "./content/images/ad1.webp"
import ad2 from "./content/images/ad2.jpg"
import ad3 from "./content/images/ad3.jpg"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class AdCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true}  interval={2500} width="70vw" infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={false}>
               <div>
                   <img src={ad2}></img>
               </div>
               <div>
                   <img src={ad3}></img>
               </div>
                

            </Carousel>
        );
    }

}
export default AdCarousel