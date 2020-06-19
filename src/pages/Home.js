import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import OriginalContainer from '../components/Container'

const Container = styled(OriginalContainer)`
  flex-direction: column;
`

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.logout = this.logout.bind(this)
  }

  logout(){
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  componentWillMount(){
    if(!localStorage.getItem('token')){
      this.props.history.push('/login', {error: 'You must be loggin first!'})
    }
  }
  componentDidMount(){
    if(localStorage.getItem('token')){
      this.setState(JSON.parse(localStorage.getItem('token')))
    }
  }
  render() {
    let {email} = this.state
    return (
      <Container>
        <h1>Hello {email}!</h1>
        <Button onClick={this.logout}>Logout</Button>
      </Container>
    )
  }
}
