import { StyleSheet, View, Text } from "react-native";

import Colors from "../../constants/colors";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>Guess number #{roundNumber}</Text>
      <Text style={styles.itemText}>Opponents guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginTop: 12,
    backgroundColor: Colors.yellowAccent,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 2 },
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
