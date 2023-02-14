// ========================Import Libraries====================================== //

import { View, Text, TouchableOpacity, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

// ========================Import Components====================================== //

import { urlFor } from "../sanity";

// =============================================================================== //

const RestaurantCard = ({
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
}) => {
  // ----hooks
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
      className="bg-white mr-3 shadow"
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-sm object-cover"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row gap-1 items-center">
          <FontAwesome
            name="star"
            className="text-yellow-500 opacity-50"
            size={22}
          />
          <Text className="text-xs text-gray-500 my-1">
            <Text className="text-xs text-yellow-500">{rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex-row items-start space-x-1">
          <FontAwesome
            name="location-arrow"
            className="text-gray-400 opacity-50"
            size={22}
          />
          <Text className="text-xs text-gray-500 w-36">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
