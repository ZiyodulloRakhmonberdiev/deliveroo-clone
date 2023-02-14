// ========================Import Libraries====================================== //

// import { useEffect  useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MapView, { Marker } from "react-native-maps";

// ========================Import components====================================== //

import { selectRestaurant } from "../features/restaurantSlice";
// import {
//   selectBasketItems,
//   removeFromBasket,
//   selectBasketTotal,
// } from "../features/basketSlice";
// import { urlFor } from "../sanity";

// =============================================================================== //

const DeliveryScreen = () => {
  // ----hooks
  const navigation = useNavigation();

  // ----states
  const restaurant = useSelector(selectRestaurant);

  // ----events

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome
              name="plus-circle"
              color="white"
              className="w-12 text-5xl transform rotate-45"
            />
          </TouchableOpacity>
          <Text className="text-lg font-light text-white">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-2xl font-bold">10-25 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant?.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant?.lat,
          longitude: restaurant?.long,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant?.lat,
            longitude: restaurant?.long,
          }}
          title={restaurant?.title}
          description={restaurant?.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>
      <SafeAreaView className="flex-row bg-white items-center space-x-5 pb-6 h-28">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-12 h-12 bg-gray-300 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Ali Jordan</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-lg border border-[#00ccbb] rounded-full px-4 py-1 mr-5 text-[#00ccbb] font-bold">
          Call
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
