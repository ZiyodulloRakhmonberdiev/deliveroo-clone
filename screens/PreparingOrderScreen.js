// ========================Import Libraries====================================== //

import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

// =============================================================================== //

const PreparingOrderScreen = () => {
  // ----hooks
  const navigation = useNavigation();

  // ----events
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 4000);
  }, []);

  // ----
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/loading.gif")}
        className="w-96 h-96"
        animation="slideInUp"
        iterationCount={1}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="my-10 text-md text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Bar indeterminate={true} color="white" size={60}></Progress.Bar>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
