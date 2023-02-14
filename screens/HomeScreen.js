// ========================Import Libraries====================================== //

import { useLayoutEffect, useState, useEffect } from "react";
import { View, ScrollView, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// ========================Import components====================================== //

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

// =============================================================================== //

const HomeScreen = () => {
  // ----hooks
  const navigation = useNavigation();

  // ----states
  const [featuredCategories, setFeaturedCategories] = useState([]);

  // ----events
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  // ----events
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"]{
          ...,
          restaurant[]->{
            ...,
            dishes[]->,
            type-> {
              name
            }
          }
        }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      })
      .catch(function () {
        console.log("rejected");
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* ============Header============= */}

      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        ></Image>
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold space-x-2 text-xl">
            <Text>Current Location</Text>
            <FontAwesome
              name="chevron-down"
              size={20}
              className="text-[#00ccbb]"
            />
          </Text>
        </View>
        <FontAwesome name="user" size={30} className="text-[#00ccbb]" />
      </View>

      {/* ==============Header end================== */}

      {/* ==============Searchbar================== */}

      <View className="flex-row space-x-2 pb-2 mx-4 items-center">
        <View className="flex-row space-x-2 items-center flex-1 bg-gray-200 p-3">
          <FontAwesome
            name="search"
            className="items-center text-gray-400"
          ></FontAwesome>
          <TextInput
            placeholder="Restaraunts and cuisines"
            keyboardType="default"
          />
        </View>
        <FontAwesome
          name="sliders"
          size={35}
          className="items-center"
        ></FontAwesome>
      </View>
      {/* ==============Searchbar end================== */}

      {/* ==============Body================= */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />

        {/* ==============Featured================= */}

        {featuredCategories?.map((cat) => (
          <FeaturedRow
            key={cat?._id}
            id={cat?._id}
            title={cat?.name}
            description={cat?.short_description}
          />
        ))}

        {/* ==============Featured end================= */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
