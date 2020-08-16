import React from 'react'
import styled from 'styled-components/native'
import { Text, Button, Linking } from 'react-native'

export default function AccountSuccessfullyCreated({navigation, route}) {
  const { email, name } = route.params;

  return(
    <Wrapper>
      <Text>
        Hey {name}, thanks for creating an account with us. Please check your email inbox on {email} and confirm the authenticity of your request.
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex: 1;
`