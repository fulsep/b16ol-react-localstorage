import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  width: 350px;
  height: 400px;
  background: #a5d6a7;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  & .email-input, .password-input {
    display: block;
    width: 100%;
    height: 45px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  & .mt-5{
    margin-top: 50px;
  }
  & .email-input::placeholder, .password-input::placeholder{
    text-transform: uppercase;
    color: #1b5e20;
    font-weight: bold;
  }
`

export default Form
