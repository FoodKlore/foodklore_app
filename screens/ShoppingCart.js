import React from 'react'
import styled from 'styled-components/native'
import { Text, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addQuantityToItem, clearShoppingCart } from '../store/actions/shoppingCart'
import { addToOrders } from '../store/actions/orders'

export default function ShoppingCart() {
  const { items, current_shoppingcart_id } = useSelector(state => state.shoppingCart);
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
                <DescriptionWrapper>
                  <Text key={`item-name-${index}`}>
                    {item.description}
                  </Text>
                  <Text key={`item-description-${index}`}>
                    {item.description}
                  </Text>
                </DescriptionWrapper>
                <ItemImage key={`item-image-${index}`} source={
                  {
                    uri: item.img
                  }}
                />
                <Text key={`item-quantity-${index}`}>
                  {item.quantity}
                </Text>
                <QuantityWrapper>
                  <Plus onPress={ () => dispatch(addQuantityToItem(item, 1))}>
                    <Text>
                      ^
                    </Text>
                  </Plus>
                  <Less>
                  <Text onPress={ () => dispatch(addQuantityToItem(item, -1))}>
                      ^
                    </Text>
                  </Less>
                </QuantityWrapper>
                <Text key={`item-total-${index}`} styled={{
                  display: "flex",
                  flex: 1
                }}>
                  ${(item.total * item.quantity).toFixed(2)}
                </Text>
              </ItemWrapper>
            );
          })}
        </ItemContainer>
        <Footer>
          <TotalButtonComponent onPress={() => {
            dispatch(addToOrders({
              order: {
                order_number: Math.round(Math.random() * 100),
                total,
                status: "Pending"
              },
              shoppingcart_id: current_shoppingcart_id
            }));
            Alert.alert(
              "Thanks!! Your order has been processed"
            );
            dispatch(clearShoppingCart());
          }}>
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

const ItemImage = styled.Image`
  width: 50px;
  height: 50px;
`

const DescriptionWrapper = styled.View`
  display: flex;
`

const Less = styled.TouchableOpacity`
  display: flex;
`

const Plus = styled.TouchableOpacity`
  display: flex;
`

const QuantityWrapper = styled.View`
  display: flex;
`

const TotalButtonComponent = styled.TouchableHighlight`
  padding: 5px;
  border-radius: 5px;
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
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
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`

const ShoppingCartContainer = styled.View`
  display: flex;
  flex: 1;
`