import React from 'react';
import BannerItems from './BannerItems'
import './Banner.css'
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
  const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    }
]
    return (
        <div className="carousel w-full">
          {
            bannerData.map(slider=><BannerItems key={slider.id}
            slider={slider}></BannerItems>)
          }
    
      </div>
    );
};

export default Banner;