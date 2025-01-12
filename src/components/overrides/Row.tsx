import { View, StyleSheet } from "react-native"

import { ViewStyle } from "react-native";

interface FlowTextProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const FlowRow = ({children, style}: FlowTextProps) => {

  return(
    <View style={{...styles.row, ...style}}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
})