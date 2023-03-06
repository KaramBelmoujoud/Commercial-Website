import React from 'react'
import { useTranslation } from 'react-i18next';
import Carousel from 'react-material-ui-carousel'


function Prodslide() {
  const { t } = useTranslation();
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
          description: "Samta | Sif | Sable",
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
          title: "Congre",
          description: "Sennour | lfarkh | Sighar | congrio",
          clickEvent: "sliderClick"
        },
        {
          image: require("../assets/image8.jpeg"),
          title: "Sole",
          description: "Hout-moussa",
          clickEvent: "sliderClick"
        },
        {
          image: require("../assets/image7.png"),
          title: "Faux saint pierre | Saint pierre argenté",
          description: "Faux saint pierre | saint pierre argenté",
          clickEvent: "sliderClick"
        },
      {
        image: require("../assets/more.png"),
        title: <a href='/Products'>More</a>,
        Description: <a href='/Products' className=' text-center mb-5 lg:mr-3 mr-12 underline'>Show all products</a>,
        clickEvent:""
        }
      ]
    
  return (
    <div>
      <h1 className="text-4xl font-serif text-center" >{t('product')}</h1>
    <div className='left-96 right-96 my-14'>
    <Carousel navButtonsAlwaysVisible='true'>
    {
    slides.map((prod) => 
    
  
       
        <div class="max-w-sm rounded overflow-hidden h-auto shadow-xl m-auto  ">
        <img class="w-full" src={prod.image} alt="prods" style={{height:"250px"}}/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{prod.title}</div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{prod.description}</span>
        </div>
        {
          prod === slides[6] ? <p className=' text-end mb-5 lg:mr-3 mr-12 underline'><a href='/#/products'>{t('mr')}</a></p> : null           
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