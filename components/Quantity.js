import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

export default function QuantityComponent({ dispatch, quantity }){
  async function handleLess() {
    if (quantity == 1) {
      return;
    }
    await dispatch({ type: 'decrement' });
    await dispatch({ type: 'changeTotalPrice' });
  }

  async function handleMore() {
    await dispatch({ type: 'increment' });
    await dispatch({ type: 'changeTotalPrice' });
  }

  return(
    <QuantityContainer>
      <Text onPress={() => handleLess()}>
        -
      </Text>
      <Text>
        {quantity}
      </Text>
      <Text onPress={() => handleMore()}>
        +
      </Text>
    </QuantityContainer>
  );
}

const QuantityContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 60px;
`