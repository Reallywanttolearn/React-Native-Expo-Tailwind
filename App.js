import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "./assets/logo.png";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`mt-10 items-center`}>
      <Image source={logo} style={tw`h-40 w-96`} />
      <View style={tw`bg-blue-400 py-20 px-5`}>
        <Text style={tw`text-white text-3xl`}>
          ini adalah aplikasi android menggunakan React Expo
        </Text>
      </View>
      <View style={tw`bg-blue-400 py-20 px-8`}>
        <Text style={tw`text-white text-3xl`}>
          belajar instalasi tailwind "twrnc" di React Native
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
