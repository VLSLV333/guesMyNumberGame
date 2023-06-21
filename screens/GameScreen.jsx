import { useState, useEffect } from "react";

import { View, StyleSheet, Alert, Text, FlatList } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import PrimaryButton from "../components/UI/PrimaryButton";

import InstructionText from "../components/UI/InstructionText";

import NumberContainer from "../components/game/NumberContainer";

import Title from "../components/UI/Title";

import GuessLogItem from "../components/game/GuessLogItem";

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

export default function GameScreen({ choosedNum, won, setGameRounds, rounds }) {
  const initialGuess = generateRandomBetween(1, 100, choosedNum);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGameRounds((prevState) => [currentGuess, ...prevState]);
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
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
      <FlatList
        data={rounds}
        keyExtractor={(item) => item}
        renderItem={(itemData) => (
            <GuessLogItem roundNumber={rounds.length - itemData.index} guess={itemData.item}/>
        )}
      />
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
