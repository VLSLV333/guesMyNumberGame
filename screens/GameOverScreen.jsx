import { View, StyleSheet, Image, Text } from "react-native";

import Title from "../components/UI/Title";

import PrimaryButton from "../components/UI/PrimaryButton";

import Colors from "../constants/colors";

export default function GameOverScreen({ reload, rounds, userNumber }) {
  return (
    <View>
      <Title txt={"Game Over!"} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.roundsNumber}>{rounds.length}</Text> rounds to guess the number
        <Text style={styles.winNumber}> {userNumber}</Text>.
      </Text>
      <PrimaryButton btnText={"Start New Game"} onPress={() => reload()} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.startGameBG,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highLightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  roundsNumber:{
    color: Colors.primary500,
  },
  winNumber: {
    color: Colors.yellowAccent,
  }
});
