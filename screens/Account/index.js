import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoginScreen from './LoginScreen'
import Settings from './Settings'

export default function Account() {
    const is_logged_in = useSelector(state => state.auth.isLoggedIn)

    if (is_logged_in) {
        return <Settings/>
    }

    return <LoginScreen/>
}