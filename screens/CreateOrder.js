import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { Text, Button, Linking } from 'react-native'
import { useDispatch } from 'react-redux';
import { addToOrders } from '../store/actions/orders';

export default function CreateOrder({navigation, route}) {

  const dispatch = useDispatch();

  useEffect(() => {
    const { payload } = route.params;
    dispatch(addToOrders(payload));
  }, []);

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