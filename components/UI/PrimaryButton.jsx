import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function PrimaryButton({btnText, onPress, children }) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.btninnerContainer, styles.pressed] : styles.btninnerContainer }
        onPress={onPress}
        android_ripple={{ color: Colors.pressedButton }}
      >
        <Text style={styles.btnText}>{children ? children : btnText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOuterContainer: {
    alignItems: 'center'
    // borderRadius: 50,
    // overflow: 'hidden',
  },
  btninnerContainer: {
    width: 140,
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    borderRadius: 50
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.pressedButton
  }
});
