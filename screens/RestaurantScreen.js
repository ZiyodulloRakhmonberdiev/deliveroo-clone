// ============= Import Libraries ====================

import { useLayoutEffect, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";

// ========================Import Components====================================== //

import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { urlFor } from "../sanity";
import { setRestaurant } from "../features/restaurantSlice";

// ===================================================

const RestaurantScreen = () => {
  // ----hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // ----states
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  // ----events
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, []);

  return (
    <>
      <BasketIcon></BasketIcon>
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <FontAwesome name="arrow-left" size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row space-x-1 items-center">
                <FontAwesome
                  name="star"
                  size={22}
                  className="opacity-50 text-green-700"
                />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
              </View>

              <View className="flex-row space-x-1 items-center">
                <FontAwesome
                  name="location-arrow"
                  size={22}
                  className="opacity-50 text-gray-700"
                />
                <Text className="text-xs text-gray-500">{address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <FontAwesome
              name="question"
              className="text-gray-500 opacity-50"
              size={20}
            />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy
            </Text>
            <FontAwesome name="chevron-right" color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-3 mb-3 font-bold text-xl">Menu</Text>
          {dishes?.map((dish) => (
            <DishRow
              key={dish?._id}
              id={dish?._id}
              name={dish?.name}
              description={dish?.short_description}
              price={dish?.price}
              image={dish?.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
