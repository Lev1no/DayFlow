import { COLORS } from "@/src/variables/styles"
import { Text, StyleSheet } from "react-native"

import { TextStyle } from "react-native";

interface FlowTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export const FlowText = ({children, style}: FlowTextProps) => {

  return(
    <Text style={{...styles.text, ...style}}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.white
  }
})