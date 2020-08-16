import React, { useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Restaurant from './Restaurant';
import { useSelector, useDispatch } from 'react-redux';
import { getBussinesses } from '../store/actions/businesses';
// business_name: "Restaurante Indú", // TODO: Fix search to handle this characters

export default function Restaurants({searchFor, navigation}) {
  const { businesses } = useSelector(state => state.businesses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBussinesses());
  }, []);

  if(searchFor.length > 0) {
    let filteredRestaurants = businesses.filter( restaurant => restaurant.business_name.toLowerCase().includes(searchFor.toLowerCase()) );
    return(
      <RestaurantContainer>
        {filteredRestaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} navigation={navigation} />
        ))}
      </RestaurantContainer>
    )
  }
  return(
    <RestaurantContainer>
      {businesses.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} navigation={navigation} />
      ))}
    </RestaurantContainer>
  );
}

const RestaurantContainer = styled(View)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: red; */
`