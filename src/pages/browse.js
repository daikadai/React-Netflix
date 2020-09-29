import React from 'react'
import { useContent } from '../hooks'

const Browse = () => {
  // we need the series and the films
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log(series);
  console.log(films);
  // we need slides
  // pass it to the browser container

  return (
    <p>Hello from Browse</p>
  )
}

export default Browse
