import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { connect, useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../store/actions/orders'

export default function Orders() {
  const { orders } = useSelector(state => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(orders);
  if (orders.length > 0) {
    return(
      <OrderContainer>
        {orders.map((order, index) => (
          <OrderWrapper key={index}>
            <Text>
              Order # {order.id}
            </Text>
            <Text>
              ${order.total}
            </Text>
            <Text>
              {order.status}
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