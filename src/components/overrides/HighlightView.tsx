import { COLORS } from "@/src/variables/styles"
import { StyleSheet, View } from "react-native"

import { ViewStyle } from "react-native";

interface FlowTextProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const FlowHighlightView = ({children, style}: FlowTextProps) => {

  return(
    <View style={{...styles.view, ...style}}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLORS.darkGray,
    borderRadius: 10,
    padding: 15,
  }
})