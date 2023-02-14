import { TouchableOpacity, View, Text, Image } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-20 rounded object-cover"
      />
      <Text className="absolute bottom-1 left-1 text-gray-700 bg-yellow-200 bg-opacity-90 px-1 rounded-md font-bold text-xs">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
