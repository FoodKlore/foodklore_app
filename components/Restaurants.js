import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Restaurant from './Restaurant';

const restaurants = [
  {
    id: 1,
    business_name: "Restaurante Centroamericano",
    phone_number: "239-628-3020",
    direction: "Something stretname #1929, Temple terrace, FL 239949",
    business_description: "Authentic central america food.",
    img: "https://i.pinimg.com/564x/6b/1e/ab/6b1eab2cac0291e5eb54584b0208235a.jpg",
    menu: [
      {
        id: 1,
        description: "Pupusas",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 2,
        description: "Enchiladas",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 3,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 4,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      }
    ]
  },
  {
    id: 2,
    business_name: "Restaurante Coreano",
    phone_number: "239-628-3020",
    direction: "Something stretname #1929, Temple terrace, FL 239949",
    business_description: "Authentic central america food.",
    img: "https://i.pinimg.com/564x/6b/1e/ab/6b1eab2cac0291e5eb54584b0208235a.jpg",
    menu: [
      {
        id: 5,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 6,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 7,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 8,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      }
    ]
  },
  {
    id: 3,
    business_name: "Restaurante Indú", // TODO: Fix search to handle this characters
    phone_number: "239-628-3020",
    direction: "Something stretname #1929, Temple terrace, FL 239949",
    business_description: "Authentic central america food.",
    img: "https://i.pinimg.com/564x/6b/1e/ab/6b1eab2cac0291e5eb54584b0208235a.jpg",
    menu: [
      {
        id: 9,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 10,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 11,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 12,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      }
    ]
  },
  {
    id: 4,
    business_name: "Restaurante Africano",
    phone_number: "239-628-3020",
    direction: "Something stretname #1929, Temple terrace, FL 239949",
    business_description: "Authentic central america food.",
    img: "https://i.pinimg.com/564x/6b/1e/ab/6b1eab2cac0291e5eb54584b0208235a.jpg",
    menu: [
      {
        id: 13,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 14,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 15,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 16,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      }
    ]
  },
  {
    id: 5,
    business_name: "Restaurante Estadounidense",
    phone_number: "239-628-3020",
    direction: "Something stretname #1929, Temple terrace, FL 239949",
    business_description: "Authentic central america food.",
    img: "https://i.pinimg.com/564x/6b/1e/ab/6b1eab2cac0291e5eb54584b0208235a.jpg",
    menu: [
      {
        id: 17,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 18,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 19,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 20,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      }
    ]
  },
  {
    id: 6,
    business_name: "Restaurante Centroamericano",
    phone_number: "239-628-3020",
    direction: "Something stretname #1929, Temple terrace, FL 239949",
    business_description: "Authentic central america food.",
    img: "https://i.pinimg.com/564x/6b/1e/ab/6b1eab2cac0291e5eb54584b0208235a.jpg",
    menu: [
      {
        id: 21,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 22,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 23,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      },
      {
        id: 24,
        description: "Food Description",
        img: "https://assets.bonappetit.com/photos/58e29a4f8f4c125ce35a1301/16:9/w_940,c_limit/0417-web-pupusa-beauty.jpg",
        ingredients: ["Pork, Rice, Beans"],
        total: 2.99
      }
    ]
  },
];

export default function Restaurants({searchFor, navigation}) {
  if(searchFor.length > 0) {
    let filteredRestaurants = restaurants.filter( restaurant => restaurant.business_name.toLowerCase().includes(searchFor.toLowerCase()) );
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
      {restaurants.map((restaurant) => (
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