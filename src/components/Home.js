import React from 'react'
import  Itemcard from "./Itemcard"
import data from "../data/data"
import Cart from "./Cart"
import {CartProvider} from "react-use-cart"



 
function Home() {

  return (
      <>
       <CartProvider>
       <h1 className='text-center mt-3'>All Items</h1>
       <section className='py-4 container'>
        <div className='row justify-content-center'>
           {data.productData.map((item,index)=>{
            return(
              <Itemcard 
              img={item.img}  
               title={item.title} 
               desc={item.desc}
                precio={item.precio} 
                item={item}
                 key={index}
                />
            )

           })}
         
 
        </div>
        
       </section>
       <Cart/>
       </CartProvider>
      </>
      
    
  );
}

export default Home;
