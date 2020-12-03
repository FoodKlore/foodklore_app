import React, { useState } from 'react'
import styled from 'styled-components/native'
import { useDispatch, useStore, useSelector } from 'react-redux'
import { createUser } from '../store/actions/user'
import { Text } from 'react-native'


export default function CreateUser({ navigation }) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [username, setUserName] = useState('')
    const [nickname, setNickName] = useState('')

    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const dispatch = useDispatch()

    const user_store = useSelector(store => store.user)
    //   Object.keys(user_store.error).forEach((value, index) => {
    //     user_store.error[value].map((val) => {
    //       console.log(val);
    //     });
    //   });

    // console.log(user_store);

    function UserErrors() {
        return(<>
            {Object.keys(user_store.error).forEach((value, index) => {
                user_store.error[value].map((val) => {
                    <Text> val </Text>
                })
            })}
        </>)
    }


    return(
        <Container>

            <Input placeholder="Enter username" onChangeText={(text) => {
                setUserName(text)
            }} />

            <Input placeholder="Enter your email" onChangeText={(text) => {
                setEmail(text)
            }} />

            <Input placeholder="Enter your password" onChangeText={(text) => {
                setPassword(text)
            }} secureTextEntry />

            <Input placeholder="Confirm your password" onChangeText={(text) => {
                setPasswordConfirmation(text)
            }} secureTextEntry />

            <Input placeholder="Enter your name" onChangeText={(text) => {
                setName(text)
            }} />

            <Input placeholder="Enter a nickname" onChangeText={(text) => {
                setNickName(text)
            }} />

            <LoginButton onPress={() => {
                if( email == '' && name == '') {
                    console.log('Bad request')
                    return
                }

                if ( password == '' || passwordConfirmation == '') {
                    console.log('Password and password confirmation are empty')
                    return
                }

                if ( password != passwordConfirmation ) {
                    console.log('Password and password confirmation needs to match')
                    return
                }

                dispatch(createUser(email, name, username, nickname, password)).then(res => {
                    if(res) {
                        navigation.navigate('Account Created Successfully', {
                            email,
                            name,
                            username,
                            nickname,
                        })
                    }
                })
            }} title="Create user account"/>

            {/* { user_store.error &&  <Text> {Object.keys(user_store.error).lenght} </Text>} DOES NOT WORK BUT user_store.error IS REACTIVE */}
        </Container>
    )
}

const Container = styled.View`
  display: flex;
  flex: 1;
`


const Input = styled.TextInput`
    display: flex;
    width: 100%;
    font-size: 16px;
`

const LoginButton = styled.Button`

`