import { Text, StyleSheet, View } from "react-native";

export function Noticias() {
  return (
    <View style={styles.container}>
      <Text>Noticias</Text>
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