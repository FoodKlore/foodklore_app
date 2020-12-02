import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import Restaurants from '../components/Restaurants'
import { useDispatch } from 'react-redux'
import { getShoppingCart } from '../store/actions/shoppingCart'

export default function HomeScreen({ navigation }) {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getShoppingCart())
    }, [])

    return (
        <MainContainer>
            <SearchBar placeholder={'Enter restaurant name'}
                onChangeText={(text) => {
                    setSearch(text)
                }}
            />
            <ScrollContainer contentContainerStyle={styles.contentContainer}>
                <Restaurants navigation={navigation} searchFor={search} />
            </ScrollContainer>
        </MainContainer>
    )
}

const SearchBar = styled(TextInput)`
  display: flex;
  width: 100%;
  margin-bottom: 2%;
  font-size: 16px;
`

const MainContainer = styled(View)`
  display: flex;
  flex: 1;
  background-color: white;
  align-items: center;
  padding: 5%;
`

const ScrollContainer = styled(ScrollView)`
  width: 100%;
  display: flex;
`

HomeScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 30,
    }
})
