import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Pokemon() {
  const params = useLocalSearchParams();
  const { id } = params;
  // ^? id: string | undefined

  return (
    <View>
      <Text>Pokemon {id}</Text>
    </View>
  );
}
