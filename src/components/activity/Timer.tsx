import { StyleSheet } from "react-native";
import { FlowHighlightView, FlowRow, FlowText } from "../overrides";


export const ActivityTimer = () => {
  return (
    <FlowHighlightView style={styles.timeContainer}>
      <FlowRow style={styles.row}>
        <FlowText>
          No Activity
        </FlowText>
      </FlowRow>
      <FlowRow style={styles.row}>
        <FlowText>
          00:00:00
        </FlowText>
      </FlowRow>
    </FlowHighlightView>
  );
}

const styles = StyleSheet.create({
  timeContainer: {
    marginVertical: 10,
  },
  row: {
    justifyContent: "center",
  }
})
