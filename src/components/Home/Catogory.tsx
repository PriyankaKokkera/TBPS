import React from 'react'
import { getLAllCatogory } from '../../../Request/request'

const Catogory = async () => {
    const catogories:string[]=await getLAllCatogory();
    

  return (
    <div className="pt-16 pb-12">
     <h1 className="text-center font-bold text-2xl capitalize">
        shop by category
      </h1>
      <div className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-4 xl:grid-col-4 gap-8">
      {catogories.map((category) => {
        return <div
              key={category}
              className="p-4 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md"
            >
                <h1 className="text-sm sm:text-base md:text-lg capitalize font-bold">{category}</h1>
                </div>
        
      })
        
    }
      </div>
    </div>
  )
}

export default Catogory

