import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components/native"
import { View, Text } from "react-native";
import { authenticate } from "../store/actions/auth";

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Input value={email} placeholder="Email" onChangeText={(text) => {
                setEmail(text)
            }} />
            <Input value={password} placeholder="Enter your password" onChangeText={(text) => {
                setPassword(text)
            }} secureTextEntry />

            <LoginButton title="Login" onPress={() => {
                dispatch(authenticate({
                    authenticable: email,
                    password
                }));
            }}/>

            <ContinueAsGuest title="Continue as a Guest" onPress={() => {
                navigation.navigate('Create Guest Account')
            }} />
        </Wrapper>
    );
}

const Wrapper = styled.View`
    display: flex;
    flex: 1;
    padding: 5%;
`

const Input = styled.TextInput`
    display: flex;
    width: 100%;
    font-size: 16px;
`

const LoginButton = styled.Button`

`

const ContinueAsGuest = styled.Button`

`