import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { confirmGuestAccount } from '../store/actions/guest'
import { confirmUserAccount } from '../store/actions/user'
import { authenticate } from '../store/actions/auth'

export default function ConfirmAccount({ navigation, route }) {

    const guest_account_confirmed = useSelector(state => state.guest.account_confirmed)
    const user_account_confirmed = useSelector(state => state.user.authenticated)
    const { entity, token } = route.params
    useEffect(() => {
        if (entity == 'guest') {
            console.log('Dispatching confirm guest account')
            let resolved_confirmation = dispatch(confirmGuestAccount(token))

            resolved_confirmation.then((data) => {
                if (data) {
                    console.log(data)
                    dispatch(authenticate(data))
                }
            })
        } else if (entity == 'user') {
            dispatch(confirmUserAccount(token))
        } else {
            console.log('Entity not supported, bad request.')
        }
    }, [])

    const dispatch = useDispatch()

    if (guest_account_confirmed || user_account_confirmed) {
        return (
            <Wrapper>
                <Text> Your account has been confirmed, please hold while we process your order. </Text>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Text> Please hold while we authorize your account... </Text>
        </Wrapper>
    )
}

const Wrapper = styled.SafeAreaView`
  display: flex;

`