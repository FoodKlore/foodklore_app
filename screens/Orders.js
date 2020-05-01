import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { connect, useSelector } from 'react-redux'

export default function Orders() {
  const items = useSelector(state => state.orders.orders);

  if (items.length > 0) {
    return(
      <OrderContainer>
        {items.map((item, index) => (
          <OrderWrapper key={index}>
            <Text>
              Order # {item.order_number}
            </Text>
            <Text>
              ${item.total}
            </Text>
            <Text>
              {item.status}
            </Text>
          </OrderWrapper>
        ))}
      </OrderContainer>
    );
  } else {
    return(
      <OrderContainer>
        <OrderWrapper>
          <Text>
            No orders
          </Text>
        </OrderWrapper>
      </OrderContainer>
    );
  }
};

const OrderWrapper = styled.View`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  width: 100%;
`

const OrderContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;