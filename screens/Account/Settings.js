import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import { logout } from '../../store/actions/auth'

export default function Settings() {
    const dispatch = useDispatch()
    return (
        <SettingsWrapper>
            <LogOutButton
                title="Log Out"
                accessibilityLabel="Sign out button"
                onPress={() => {
                    dispatch(logout())
                }}
            />
        </SettingsWrapper>
    )
}

const SettingsWrapper = styled.SafeAreaView`
    display: flex;
    flex: 1;
`

const LogOutButton = styled.Button`
`