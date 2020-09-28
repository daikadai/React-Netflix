import React from 'react'
import { Container, SubTitle, Title } from './styles/feature'

const Feature = ({ children, ...restProps}) => {
  return (
   <Container {...restProps}>{children}</Container>
  )
}

Feature.Title = function FeatureTitle({children,...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubtitle({children,...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

export default Feature
