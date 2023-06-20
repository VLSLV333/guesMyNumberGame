import { useState, useEffect } from "react";

import { View, StyleSheet, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import PrimaryButton from "../components/UI/PrimaryButton";

import InstructionText from "../components/UI/InstructionText";

import NumberContainer from "../components/game/NumberContainer";

import Title from "../components/UI/Title";

function generateRandomBetween(min, max, exclude) {
  const rdnNum = Math.floor(Math.random() * (max - min)) + min;

  if (rdnNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rdnNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

// let answer = null

export default function GameScreen({ choosedNum, won }) {
  const initialGuess = generateRandomBetween(1, 100, choosedNum);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === choosedNum) {
      won(true);
    }
  }, [currentGuess]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < choosedNum) ||
      (direction === "higher" && currentGuess > choosedNum)
    ) {
      Alert.alert(
        "Please, don't lie:(",
        `Your initial number was ${choosedNum}`,
        [{ text: "Okay", style: "default" }]
      );
      return;
    }
    if (direction === "higher") {
      minBoundary = currentGuess + 1;
    } else if (direction === "lower") {
      maxBoundary = currentGuess;
    }

    console.log(minBoundary);
    console.log(maxBoundary);
    console.log(currentGuess);

    const newRandonNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandonNum);
  }

  return (
    <View style={styles.screen}>
      <Title txt={"Oponents Guess"} />
      <NumberContainer txt={initialGuess} />
      <View style={styles.directionContainer}>
        <InstructionText style={styles.chooseText} txt="Higher or lower?" />
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} color='white'/>
          </PrimaryButton>
          <PrimaryButton
            onPress={() => nextGuessHandler("higher")}
          >
            <Ionicons name='md-add' size={24} color='white'/>
            </PrimaryButton>
        </View>
      </View>
      {/* <View>Logs of guesses</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  directionContainer: {
    alignItems: "center",
    gap: 20,
  },
  chooseText: {
    color: "white",
    fontSize: 24,
  },
});
