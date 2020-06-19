import React, { Component } from 'react'
import styled from 'styled-components'

import Container from '../components/Container'
import Form from '../components/Form'
import Button from '../components/Button'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Alert = styled.h3`
  margin: 0;
  padding: 0;
  color: #b71c1c;
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
`

export default class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  submitForm(e){
    e.preventDefault()
    const {email, password} = this.state
    if(email === 'admin@server.com' && password === '123'){
      localStorage.setItem('token', JSON.stringify({email, password}))
      this.props.history.push('/')
    } else {
      this.setState({error: 'Wrong Username or Password'})
    }
  }

  handleChange(e, form){
    this.setState({[form]: e.target.value})
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.history.push('/')
    }
    if(this.props.location.state){
      const {error} = this.props.location.state
      this.setState({error})
    }
  }

  render() {
    const {error} = this.state
    return (
      <Container>
        <Form onSubmit={(e) => this.submitForm(e)} method='post'>
          <Title>Login System</Title>
          {error!=='' && <Alert>{error}</Alert>}
          <input className='email-input mt-5' onChange={(e) =>this.handleChange(e, 'email')} type='email' placeholder='Email' />
          <input className='password-input' onChange={(e) =>this.handleChange(e, 'password')} type='password' placeholder='Password' />
          <ButtonWrapper>
            <Button type='submit' onClick={this.submitForm}>Login</Button>
          </ButtonWrapper>
        </Form>
      </Container>
    )
  }
}
