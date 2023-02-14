// ========================Import Libraries====================================== //

import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// ========================Import components====================================== //

import { selectRestaurant } from "../features/restaurantSlice";
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketTotal,
} from "../features/basketSlice";
import { urlFor } from "../sanity";

// =============================================================================== //

const BasketScreen = () => {
  // ----hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // ----states
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

  // ----events
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* ============Header============= */}
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant?.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full absolute top-5 right-5"
          >
            <FontAwesome
              name="plus-circle"
              color="#00ccbb"
              className="w-full text-5xl transform rotate-45"
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 10-25 minutes</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="divide-y divide-gray-200">
        {Object.entries(groupItemsInBasket).map(([key, items]) => (
          <View
            key={key}
            className="flex-row items-center space-x-3 bg-white py-2 px-5"
          >
            <Text className="text-[#00ccbb]">{items?.length} x</Text>
            <Image
              source={{ uri: urlFor(items[0]?.image).url() }}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">{items[0]?.name}</Text>
            <Text className="text-gray-600">{items[0]?.price}.000 so'm</Text>
            <TouchableOpacity>
              <Text
                className="text-[#00ccbb] text-xs"
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View className="p-5 bg-white mt-5 space-y-4  ">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Subtotal</Text>
          <Text className="text-gray-400">{basketTotal}.000 so'm</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Delivery free</Text>
          <Text className="text-gray-400">10.000 so'm</Text>
        </View>
        <View className="flex-row justify-between">
          <Text>Order Total</Text>
          <Text className="font-extrabold">{basketTotal + 10}.000 so'm</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PreparingOrderScreen");
          }}
          className="rounded-lg bg-[#00ccbb] p-4"
        >
          <Text className="text-center text-lg text-white font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
