import React from 'react';

const BannerItems = ({slider}) => {
  const {image,id,prev,next}=slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carusel-img'>
        <img src={image} alt='' className="w-full rounded-xl" />
        </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h2 className="text-6xl text-white font-bold">Affordable <br/>
          Price for car <br/>
          Servecing</h2>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
         <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         </div>
         <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
         <button className="btn btn-warning mr-5 ">Warning</button>
         <button className="btn btn-outline btn-warning">Warning</button>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
           <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
           <a href={`#slide${next}`}  className="btn btn-circle">❯</a>
         </div>
       </div> 
    );
};

export default BannerItems;