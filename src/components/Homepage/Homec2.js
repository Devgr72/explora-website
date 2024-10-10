import React from 'react'
import './Homec2.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import bali from '../Assets/bali.jpeg'
import top_exp from '../Assets/top-exp.jpg'
import top_attract from '../Assets/top-attract.jpg'
import bucket from '../Assets/bucket-list.jpg'
import cult from '../Assets/cultural.jpg'
import food from '../Assets/food.jpg'
function Homec2() {
    const responsive = {
        superLargeDesktop: {
       
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <div className='container-homec2'>
     <h1> More Adventereous Places</h1>
     <h4>To visit....</h4>
      <Carousel responsive={responsive}>
        <div className='place-img'>
            <img src={bali} height={'150px'} width={'300px'} alt='bali'/>
            <h2 className='place-name'>Beauty</h2>
        </div>
        <div className='place-img'>
            <img src={top_exp} height={'150px'} width={'300px'} alt='bali'/>
            <h2 className='place-name'>Top experiences</h2>
        </div>
        <div className='place-img'>
            <img src={top_attract} height={'150px'} width={'300px'} alt='bali'/>
            <h2 className='place-name'>Top attractions</h2>
        </div>
        <div className='place-img'>
            <img src={bucket} height={'150px'} width={'300px'} alt='bali'/>
            <h2 className='place-name'>Bucket List</h2>
        </div>
        <div className='place-img'>
            <img src={cult} height={'150px'} width={'300px'} alt='bali'/>
            <h2 className='place-name'>cultural & Historic</h2>
        </div>
        <div className='place-img'>
            <img src={food} height={'150px'} width={'300px'} alt='bali'/>
            <h2 className='place-name'>Foods and Drinks</h2>
        </div>
      
      </Carousel>
    </div>
  )
}

export default Homec2
