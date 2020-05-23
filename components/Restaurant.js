import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Image, Text as T, TouchableOpacity } from 'react-native';

export default function Restaurant({navigation, restaurant}) {
  return(
    <RestaurantContainer activeOpacity={0.8} onPress={() => navigation.navigate('Business Page', {
      restaurant_id: restaurant.id
    })}>
      <RestaurantImage source={
        {
          uri: restaurant.img
        }}
      />
      <DetailsContainer>
        <Text>
          {restaurant.business_name}
        </Text>
        <Text>
          {restaurant.phone_number}
        </Text>
      </DetailsContainer>
    </RestaurantContainer>
  );
}

const Text = styled(T)`
  font-size: 16px;
  width: 100%;
  text-align: center;
`

const RestaurantImage = styled(Image)`
  height: 90px;
`

const RestaurantContainer = styled(TouchableOpacity)`
  display: flex;
  width: 45%;
  margin-bottom: 25px;
`

const DetailsContainer = styled(View)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`