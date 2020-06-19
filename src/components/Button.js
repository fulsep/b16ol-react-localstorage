import styled from 'styled-components'


const Button = styled.button`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: #004d40;
  background-color: #e0f2f1;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 10px;
  &:focus {
    outline: none;
    background-color: #b2dfdb;
  }
`


export default Button
