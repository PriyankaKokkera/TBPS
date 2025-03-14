import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import hero from "../../../public/Image/hero.svg"


const Hero = () => {
  return (
    <div>
      <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">
    
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
       
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            mega sale <span className="text-rose-600">Special</span>Offer up to{" "}
            <span className="text-orange-500">60%</span>off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            blanditiis, aspernatur quaerat magni dicta, minima laborum iste
            deserunt nesciunt voluptatum ex delectus corporis accusamus dolor
            cumque aliquid, iusto ipsum at.
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Button size={"lg"} className="bg-blue-700">
              Shop Now
            </Button>
            <Button size={"lg"}>Explor More</Button>
          </div>
        </div>
        
        <div className="hidden lg:block">
        
          <Image
            src={hero}
            alt="hero"
            width={600}
            height={600}
            className="lg:h-[50%] lg:w-[50%] xl:w-[80%] xl:h-[80%]"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
