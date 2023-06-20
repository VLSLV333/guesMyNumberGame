import { useState } from "react";

import { TextInput, View, StyleSheet, Alert } from "react-native";

import Title from "../components/UI/Title";

import InstructionText from "../components/UI/InstructionText";

import Card from "../components/UI/Card";

import Colors from "../constants/colors";

import PrimaryButton from "../components/UI/PrimaryButton";

export default function StartGameScreen({ stat, showGameOver }) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  const confirmHandler = () => {
    const providedNumber = parseInt(inputValue);
    if (isNaN(providedNumber)) {
      Alert.alert("Invalid number!", "Please, provide number", [
        { text: "Okay", style: "cancel", onPress: resetHandler },
      ]);
      return;
    }
    if (providedNumber <= 0 || providedNumber > 99) {
      Alert.alert("Invalid number!", "Number needs to be 0-99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    showGameOver(false);
    stat(providedNumber);
  };

  const resetHandler = () => {
    setInputValue("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title txt={"Guess number"} />
      <Card>
        <InstructionText txt={'Enter a number'}/>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={inputValue}
          onChangeText={inputHandler}
        />
        <View style={styles.btnContainer}>
          <PrimaryButton btnText={"Reset"} onPress={resetHandler} />
          <PrimaryButton btnText={"Confirm"} onPress={confirmHandler} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 150,
    flex: 1,
    marginHorizontal: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellowAccent,
    borderBottomWidth: 2,
    color: Colors.yellowAccent,
    marginVertical: 7,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 15,
  },
});
