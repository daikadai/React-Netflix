import React from 'react'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter';

const Browse = () => {
  // we need the series and the films
  const { series } = useContent('series');
  const { films } = useContent('films');
  // we need slides
  const slides = selectionFilter({ series, films });
  // pass it to the browser container
  console.log(slides);
  return (
    <p>Hello from Browse</p>
  )
}

export default Browse
