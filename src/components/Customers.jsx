import React from 'react'
import emirates from '../assets/Images/emirates.webp'
import wildleaf from '../assets/Images/wildleaf.webp'
import suja from '../assets/Images/suja.webp'
import damac from '../assets/Images/damac.webp'
import azelit from '../assets/Images/azelit.webp'
import burgerKing from '../assets/Images/burger-king.webp'
import dubaiFestivalCity from '../assets/Images/dubai-festival-city.webp'
import planetFitness from '../assets/Images/planet-fitness.webp'
import bestWestern from '../assets/Images/best-western.webp'

function Customers() {
   const images = [ emirates,wildleaf,suja,damac,azelit,burgerKing,dubaiFestivalCity,planetFitness,bestWestern ]
  return (
    <>
     <div class="mt-15 w-full inline-flex flex-nowrap overflow-hidden">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {images.map((img, index) => (
                <li key={index} className="inline-block">
                <img src={img} alt={`Brand ${index + 1}`} className="h-10 w-10 sm:h-40 sm:w-40" />
                </li>
            ))}
            {images.map((img, index) => (
                <li key={index} className="inline-block">
                <img src={img} alt={`Brand ${index + 1}`} className="h-10 w-10 sm:h-40 sm:w-40" />
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Customers

