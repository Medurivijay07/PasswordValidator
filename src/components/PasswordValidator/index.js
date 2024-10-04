import {useState} from 'react'

import {
  MainContainer,
  BoxContainer,
  AppTitle,
  Description,
  InputElement,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [showErr, setErrStatus] = useState(true)

  const onChangePassword = event => {
    const updatedPassword = event.target.value
    setPassword(updatedPassword)
    if (updatedPassword.length >= 8) {
      setErrStatus(false)
    }
  }

  return (
    <MainContainer>
      <BoxContainer>
        <AppTitle>Password Validator</AppTitle>
        <Description>Check how strong and secure is your password</Description>
        <InputElement
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showErr && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </BoxContainer>
    </MainContainer>
  )
}

export default PasswordValidator
