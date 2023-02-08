import { Text, StyleSheet, View } from "react-native";

export function Mapa() {
  return (
    <View style={styles.container}>
      <Text>Mapa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});