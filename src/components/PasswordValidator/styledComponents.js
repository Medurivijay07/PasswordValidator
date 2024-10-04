import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BoxContainer = styled.div`
  background-color: #383a4e;
  padding: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 4px #434451;
  border-radius: 12px;
`
export const AppTitle = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #f8fafc;
`
export const InputElement = styled.input`
  padding: 10px;
  background-color: #edeeff;
  outline: none;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
`
