import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

export default function ConfirmAccount({ navigation, route }) {

  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    console.log('navigation', navigation);

    console.log('route', route);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    if(confirmed) {
      setTimeout(() => {
        // dispatch(confirmAccount());
      }, 3000);
    }
  }, [confirmed])

  if(confirmed) {
    return(
      <Wrapper>
        <Text> Your account has been confirmed, please hold while we process your order. </Text>
      </Wrapper>
    )
  }

  return(
    <Wrapper>
      <Text> Please hold while we authorize your account... </Text>
    </Wrapper>
  )
}

const Wrapper = styled.SafeAreaView`
  display: flex;

`