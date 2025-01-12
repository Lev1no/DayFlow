import ActivityHomeScreen from "@/src/screens/Home";
import { COLORS } from "@/src/variables/styles";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ActivityHomeScreen></ActivityHomeScreen>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
