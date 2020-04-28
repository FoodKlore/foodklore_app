import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Button } from 'react-native'
import MenuItem from '../components/MenuItem'
import { addToShoppingCart } from '../store/actions/shoppingCart'
import { connect } from 'react-redux'

export default function BusinessPage({route, addToShoppingCart}) {
  const { restaurant }= route.params;
  const [ search, setSearch] = useState("");

  let menu;
  menu = search.length > 0 ? restaurant.menu.filter(item => item.description.toLowerCase().includes(search.toLowerCase())) : restaurant.menu ;
  return (
    <MenuWrapper>
      <SearchBar placeholder={"Enter food name"}
        onChangeText={(text) => {
          setSearch(text);
        }}
      />
      <MenuItemContainer>
        {menu.map(menu_item => (
          <ItemContainer  key={`container-${menu_item.id}`}>
            <MenuItem key={`item-${menu_item.id}`} item={menu_item} />
          </ItemContainer>
        ))}
      </MenuItemContainer>
    </MenuWrapper>
  )
};

const SearchBar = styled.TextInput`
  display: flex;
  width: 100%;
  margin-bottom: 2%;
  font-size: 16px;
`;

const MenuWrapper = styled.ScrollView`
  width: 100%;
  display: flex;
  padding: 5%;
`

const MenuItemContainer = styled.View`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
`

const ItemContainer = styled.View`
  display: flex;
  width: 45%;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`