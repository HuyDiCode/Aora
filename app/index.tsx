import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-red-50">
      <Text className="text-3xl font-pblack ">App</Text>
      <StatusBar style="auto" />
    </View>
  );
}
