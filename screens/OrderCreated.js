import React from 'react'
import styled from 'styled-components/native'
import { Text, Button, Linking } from 'react-native'

export default function OrderCreated({navigation, route}) {
  return(
    <Wrapper>
      <Text>
        Order has been confirmed
      </Text>
      <Button title="Back to orders" onPress={() => {
        navigation.navigate("Home", { screen: "Orders" });
      }}/>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex: 1;
`