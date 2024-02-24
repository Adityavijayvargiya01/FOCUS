"use client"
import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const children = ({ remainingTime }) => {
  const hours = Math.floor(remainingTime / 3600)
  const minutes = Math.floor((remainingTime % 3600) / 60)
  const seconds = remainingTime % 60

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;

}


export default function navbar() {
  return (
    <main>
      <CountdownCircleTimer
        isPlaying
        duration={200}
        colors={"#5ec26a"}
        size={400}
        trailColor="#0F1A1A"
        rotation="counterclockwise"
      >
        {({ remainingTime }) => (
          <div className="text-3xl text-muted-foreground">
            {children({ remainingTime })}
          </div>
        )}
      </CountdownCircleTimer>
    </main>
  );
}
