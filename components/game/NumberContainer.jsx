// import { useEffect } from "react";

import { StyleSheet, View, Text } from "react-native";

import Colors from "../../constants/colors";

export default function NumberContainer({ txt }) {
  // let GuessedNum = txt;
  // useEffect(() => {
  //   GuessedNum = txt;
  // }, [txt]);
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{txt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellowAccent,
    padding: 24,
    margin: 24,
    borderRadius: 7,
    alignContent: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.yellowAccent,
    fontSize: 36,
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'open-sans-bold'
  },
});
