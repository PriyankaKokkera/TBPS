
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../public/Image/logo.png"
import SearchIcon from '../Helper/Searchbox'
import { HeartIcon, User} from 'lucide-react'
import ShoppingCart from '../Helper/ShoppingCart'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton} from '@clerk/nextjs'

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
        <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
        <Link href="/">
        <Image src={logo} alt=''  width={140} height={140}/>
      </Link>
      
      <div className='flex items-center space-x-6'>
    <SearchIcon/>
    <HeartIcon/>
    <ShoppingCart/>
    <SignedIn>
        <UserButton/>
    </SignedIn>
    <SignedOut>
        <SignInButton>
        <User cursor={"pointer"} size={26}/>
        </SignInButton>
    
    </SignedOut>
    
    
    
   
      </div>

        </div>
    


      
    </div>
  )
}

export default Nav
