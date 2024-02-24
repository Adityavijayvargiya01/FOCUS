import React from 'react'

export default function todo() {
  return (
    <main className='p-5'>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-muted-foreground">
      Taskbar
    </h3>
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>  
    </ul>
    </main>
  )
}
