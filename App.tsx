import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./src/landing/Landing";

export default function App() {
  return (
    <View style={styles.container}>
      <Landing />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
