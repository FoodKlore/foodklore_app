import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components/native"
import { View } from "react-native";

export default function LoginScreen({navigation}) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Wrapper>
            <Input placeholder="Enter your username" onChangeText={(text) => {
                setName(text)
            }} />
            <Input placeholder="Enter password" onChangeText={(text) => {
                setPassword(text)
            }} secureTextEntry />
            <LoginButton title="Login"/>

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