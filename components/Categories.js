// ========================Import libaries====================================== //

import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";

// ========================Import Components====================================== //

import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";
import { urlFor } from "../sanity";

// =============================================================================== //

const Categories = () => {
  // ----states
  const [categories, setCategories] = useState([]);

  // ----events
  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category?._id}
          imgUrl={urlFor(category?.image).width(200).url()}
          title={category?.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
