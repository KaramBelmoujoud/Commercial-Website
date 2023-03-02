import React from 'react'
import Carousel from 'react-material-ui-carousel'

function Prodslide() {
    const slides = [
        {
          image: require("../assets/image4.jpeg"),
          title: "Denté",
          description: "Denton",
          clickEvent: "sliderClick"
        },
        {
          image: require("../assets/image5.jpeg"),
          title: "Sabre",
          description: "Samta | Sif",
          clickEvent: "sliderClick"
        },
        {
          image: require("../assets/image6.jpeg"),
          title: "Saint pierre",
          description: "Moussa",
          clickEvent: "sliderClick"
        },
        {
          image: require("../assets/image9.jpeg"),
          title: "Denté",
          description: "Denton",
          clickEvent: "sliderClick"
        },
        {
          image: require("../assets/image8.jpeg"),
          title: "Sabre",
          description: "Samta | Sif",
          clickEvent: "sliderClick"
        },
        {
          image: require("../assets/image7.png"),
          title: "Saint pierre",
          description: "Moussa",
          clickEvent: "sliderClick"
        }
      ]
    
  return (
    <div>
          <h1 className="text-4xl font-bold  text-center" >Products</h1>
    <div className='left-96 right-96 my-14'>
    <Carousel navButtonsAlwaysVisible='true'>
    {
    slides.map((prod) => 
    
  
       
        <div class="max-w-sm rounded overflow-hidden h-auto shadow-xl m-auto  ">
        <img class="w-full" src={prod.image} alt="prods"/>
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">{prod.title}</div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{prod.description}</span>
        </div>
        {
            prod == slides[5]  ?   <p className=' text-end mb-5 mr-3 underline'><a href='/Products'>more ...</a></p> : null           
        }
      </div>
      

      
    
   )
  }         
    </Carousel>

    </div>
    </div>
  )
}

export default Prodslide