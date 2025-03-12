import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Pointer, SearchIcon } from 'lucide-react'

const Searchbox = () => {
  return <Dialog>
    <DialogTrigger>
      <SearchIcon size={26} cursor={"Pointer"}/>
    </DialogTrigger>
    <DialogContent>
      <form action="">
        <input type="text" 
        placeholder='search product'
        className='black w-full bg-gray-300 rouded-lg px-6 mt-4 outline -none'/>
      </form>
    </DialogContent>
  </Dialog>
}

export default Searchbox
