import React from 'react'
import styled from 'styled-components/native'
import { Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function MenuItem({ item }) {
  const navigation = useNavigation();
  console.log(item);
  return(
    <MenuItemWrapper activeOpacity={0.8} onPress={() => navigation.navigate('Item Description', {
      item
    })}>
      <MenuItemImg id="item_image" source={
        {
          uri: item.img
        }} />
      <Text>
        { item.description }
      </Text>
    </MenuItemWrapper>
  )
}

const MenuItemWrapper = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`

const MenuItemImg = styled(Image)`
  width: 100%;
  height: 90px;
`