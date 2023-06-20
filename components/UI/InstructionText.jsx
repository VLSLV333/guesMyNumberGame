import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function InstructionText({ txt, style }) {
  return <Text style={[styles.helpText, style]}>{txt}</Text>;
}

const styles = StyleSheet.create({
  helpText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.yellowAccent,
  },
});
