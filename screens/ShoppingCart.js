import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addToOrders } from '../store/actions/orders'

export default function ShoppingCart() {
  const { items } = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();

  if (items.length > 0) {

    const total = items.reduce( (prev, item) => item.total * item.quantity + prev ,0).toFixed(2);
    return(
      <ShoppingCartContainer>
        <Text>
          Shopping Cart
        </Text>
        <ItemContainer>
          {items.map((item, index) => {
            return (
              <ItemWrapper key={`item-wrapper-${index}`}>
                <Text key={`item-description-${index}`}>
                  {item.description}
                </Text>
                <Text key={`item-quantity-${index}`}>
                  {item.quantity}
                </Text>
                <Text key={`item-total-${index}`}>
                  ${(item.total * item.quantity).toFixed(2)}
                </Text>
              </ItemWrapper>
            );
          })}
        </ItemContainer>
        <Footer>
          <TotalButtonComponent onPress={() => dispatch(addToOrders({
            order_number: Math.round(Math.random() * 100),
            total,
            status: "Pending"
          }))}>
            <Text style={{
              color: "white"
            }}>
              Checkout ${total}
            </Text>
          </TotalButtonComponent>
        </Footer>
      </ShoppingCartContainer>
    )
  } else {
    return(
      <ShoppingCartContainer>
        <Text>
          Empty shopping cart
        </Text>
      </ShoppingCartContainer>
    );
  }
};

const TotalButtonComponent = styled.TouchableHighlight`
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  bottom: 0;
`

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;

`

const ShoppingCartContainer = styled.View`
  display: flex;
  flex: 1;
`