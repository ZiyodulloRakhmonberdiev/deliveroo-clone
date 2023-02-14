// ========================Import libaries====================================== //

import { useDispatch, useSelector } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// ========================Import Components====================================== //

import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
// =============================================================================== //

const BasketIcon = () => {
  // ----hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // ----states
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  // ----events
  if (items?.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-l"
      >
        <Text className="text-white text-md font-extrabold bg-[#01a296] py-1 px-2">
          {items?.length}
        </Text>
        <Text className="text-white font-extrabold flex-1 text-md text-center">
          View Basket
        </Text>
        <Text className="text-white font-extrabold text-md">
          {basketTotal}.000 so'm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
