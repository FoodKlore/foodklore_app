import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { confirmGuestAccount } from '../store/actions/guest';
import { authenticate } from '../store/actions/auth';

export default function ConfirmAccount({ navigation, route }) {

  const { account_confirmed } = useSelector( state => state.guest);
  const { entity, token } = route.params;
  useEffect(() => {
    if (entity == "guest") {
      console.log("Dispatching confirm guest account");
      let resolved_confirmation = dispatch(confirmGuestAccount(encodeURIComponent(token)));

      resolved_confirmation.then((data) => {
        if (data) {
          console.log(data);
          dispatch(authenticate(data));
        }
      });
    } else if (entity == "user") {
      dispatch(ConfirmAccount(encodeURIComponent(token)));
    } else {
      console.log("Entity not supported, bad request.");
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    if(account_confirmed) {

    }
  }, [account_confirmed])

  if(account_confirmed) {
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