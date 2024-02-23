"use client"
import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


export default function navbar() {
  return (
    <main className='my-12'> 
      <CountdownCircleTimer
    isPlaying
    duration={7}
    colors={'#5ec26a'}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
    </main> 
  )
}
