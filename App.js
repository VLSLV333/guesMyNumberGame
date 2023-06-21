import { useState, useEffect, useCallback } from "react";

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as Font from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import Colors from "./constants/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [num, setNum] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameRounds, setGameRounds] = useState([]);

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const newGameHandler = () => {
    setNum(null);
    setGameOver(false);
    setGameRounds([]);
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const screen = gameOver ? (
    <GameOverScreen
      reload={newGameHandler}
      userNumber={num}
      rounds={gameRounds}
    />
  ) : num ? (
    <GameScreen
      choosedNum={num}
      won={setGameOver}
      setGameRounds={setGameRounds}
      rounds={gameRounds}
    />
  ) : (
    <StartGameScreen stat={setNum} showGameOver={setGameOver} />
  );

  return (
    <LinearGradient
      colors={[Colors.allAppBG, Colors.yellowAccent]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
