// ========================Import Libraries====================================== //

import { useState, useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { View, ScrollView, Text } from "react-native";

// ========================Import Components====================================== //

import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

// =============================================================================== //

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  // ----states
  const [restaurants, setRestaurants] = useState([]);

  // ----events
  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type == "featured" && _id == $id]{
      ...,
      restaurant[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      }
    }[0]
  `,
        { id: id }
      )
      .then((data) => {
        setRestaurants(data?.restaurant);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <FontAwesome
          name="chevron-right"
          className="items-center text-[#00ccbb]"
        />
      </View>
      <Text className="text-xs text-gray-500 px-4 pb-2">{description}</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant?._id}
            id={restaurant?._id}
            imgUrl={restaurant?.image}
            title={restaurant?.title}
            rating={restaurant?.rating}
            genre={restaurant?.genre}
            address={restaurant?.address}
            short_description={restaurant?.short_description}
            dishes={restaurant?.dishes}
            long={restaurant?.long}
            lat={restaurant?.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
