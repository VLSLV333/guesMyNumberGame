import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    borderRadius: 7,
    backgroundColor: Colors.startGameBG,
    elevation: 4, //    shadow for android
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.55,
    shadowRadius: 7,
    alignItems: "center",
  },
});
