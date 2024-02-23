import React from 'react'
import { Circle } from "@phosphor-icons/react/dist/ssr";
import { Toggle } from './ui/toggle';



export default function navbar() {
  return (
    <main>
      <div className='flex flex-row items-center justify-between h-24 w-full p-5'>


      <div className='flex items-center'>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-light lg:text-5xl px-3 text-muted-foreground">
      Focus
      </h1>
      <Circle size={42} color='#5ec26a' className='mt-2' />
      </div>

      <div>
        <Toggle>
          FOCUS MODE
        </Toggle>
      </div>

      </div>




    </main> 
  )
}
