import React, { useState, useReducer } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import QuantityComponent from '../components/Quantity'
import { useDispatch } from 'react-redux';
import { addToShoppingCart } from '../store/actions/shoppingCart'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        quantity: state.quantity + 1
      }
    case 'decrement':
      return {
        ...state,
        quantity: state.quantity - 1
      }
    case 'changeTotalPrice':
      return {
        ...state,
        totalPrice: state.quantity * state.itemPrice
      }
    default:
      return state
  }
}

export default function ItemDescription({ route }) {
  const { item } = route.params;
  const initialState = {
    quantity: 1,
    totalPrice: item.total,
    itemPrice: item.total
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const shoppingCartDispatch = useDispatch();

  return(
    <Container>
      <ItemHeader>
        <ItemImage source={{
          uri: item.img
        }}/>
        <Text style={{
          marginTop: 20,
          paddingLeft: 15,
        }}>
          { item.description }
        </Text>
      </ItemHeader>
      <ItemBody>
        <Text style={{
          marginTop: 20,
          paddingLeft: 15,
        }}>
          Ingredients
        </Text>
        {item.ingredients.map((ingredient, index) => <Text key={index} style={{
          marginTop: 20,
          paddingLeft: 15,
        }}> {ingredient.name} </Text>)}
      </ItemBody>
      <ItemFooter>
        <QuantityComponent quantity={state.quantity} dispatch={dispatch} />
        <CartButtonText onPress={() => shoppingCartDispatch(addToShoppingCart(item, state.quantity))}>
          <Text style={{
            color: "white"
          }}>
            Add to cart ${state.totalPrice.toFixed(2)}
          </Text>
        </CartButtonText>
      </ItemFooter>
    </Container>
  );
}

const CartButtonText = styled.TouchableHighlight`
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

const ItemHeader = styled.View`
  display: flex;
`

const ItemBody = styled.View`
  display: flex;
  flex: 1;
`
const ItemFooter = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`

const ItemImage = styled.Image`
  width: 100%;
  height: 65%;
`