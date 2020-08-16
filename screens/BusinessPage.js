import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import MenuItem from '../components/MenuItem'
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../store/actions/menus'

export default function BusinessPage({route}) {
  const { restaurant_id }= route.params;
  const [ search, setSearch] = useState("");
  const { menu } = useSelector( state => state.menus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu(restaurant_id))
  }, []);

  let menus_found;
  menus_found = search.length > 0 ? menu.filter(item => item.description.toLowerCase().includes(search.toLowerCase())) : menu ;
  return (
    <MenuWrapper>
      <SearchBar placeholder={"Enter food name"}
        onChangeText={(text) => {
          setSearch(text);
        }}
      />
      <MenuItemContainer>
        {menus_found.map(menu_item => (
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