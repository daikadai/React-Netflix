import React from 'react'
import { Link } from 'react-router-dom'
import { Base, Container, Error, Input, Submit, Text, TextSmall, Title } from './styles/form'

const Form = ({ children,...restProps}) => {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Form.Base = function FormBase({children, ...restProps}) {
  return <Base {...restProps}>{children}</Base>
}

Form.Error = function FormError({children, ...restProps}) {
  return <Error {...restProps}>{children}</Error>
}

 
Form.Title = function FormTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}


Form.Text = function FormText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}


Form.TextSmall = function FormTextSmall({children, ...restProps}) {
  return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FormLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Form.Input = function FormInput({...restProps}) {
  return <Input {...restProps} />
}

Form.Submit = function FormSubmit({children, ...restProps}) {
  return <Submit {...restProps}>{children}</Submit>
}

export default Form
