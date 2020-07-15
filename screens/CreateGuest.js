import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components/native"
import { View, Button } from "react-native";
import { createGuest } from "../store/actions/guest"
import { Linking } from "expo";

export default function CreateGuest({navigation}) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Input placeholder="Enter your email" onChangeText={(text) => {
                setEmail(text)
            }} />

            <Input placeholder="Enter your name" onChangeText={(text) => {
                setName(text)
            }} />

            <LoginButton onPress={() => {
                if( email == '' && name == '') {
                    console.log("Bad request");
                    return
                }

                dispatch(createGuest(name, email)).then(res => {
                    if(res) {
                        navigation.navigate('Account Created Successfully', {
                            email,
                            name
                        });
                    }
                });
            }} title="Create guest account"/>
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