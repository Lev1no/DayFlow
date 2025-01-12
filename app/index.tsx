import ActivityHomeScreen from "@/src/screens/Home";
import { COLORS } from "@/src/variables/styles";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ActivityHomeScreen></ActivityHomeScreen>
        <StatusBar style="light"></StatusBar>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
