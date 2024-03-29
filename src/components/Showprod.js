import React from 'react'
import  product  from '../assets/data/products'


function Showprod() {
    console.log(product);
    
  return (
    <div id='Products' className="items-center justify-center max-h-full lg:max-h-full pt-28">
        {/* <h1 className="text-4xl font-bold my-10 mt-24 text-center"  >Products</h1> */}
    <div className='max-w-fit mx-auto ml-4 mr-4'>
    <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-20  gap-y-10 justify- mb-14'>

        {product.map((prod) => {
            
            return(
            // <div className='flex'>
            //     <div className='flex flex-col items-center w-72  bg-cyan-500 border rounded-xl hover:scale-110 hover:translate-y-1 duration-300'>
            //         <img src={prod.image} alt='' className='w-full h-full bg-white'/>
            //         <h1 className='text-2xl'>{prod.name}</h1>
            //         <h1 className='text-2xl'>{prod.nomlocal}</h1>
            //     </div>
                
            // </div>
            <div class="max-w-sm rounded overflow-hidden h-auto shadow-lg">
  <img class="w-full" src={prod.image} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{prod.name}</div>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{prod.nomlocal}</span>

  </div>
</div>
            )
        })}
      </div>
        </div>
    </div>
    


    
  )
}

export default Showprod