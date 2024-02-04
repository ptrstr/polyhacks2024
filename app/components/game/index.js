import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, Dimensions, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { TrashMonster, Bag, Radius } from "./renderers";
import { MoveBag, RadiusAdjust, BagCheck } from "./systems"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const IDS = {
  BAG: 2,
  TRASH: 1,
  RADIUS: 0
}

export default class BestGameEver extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <GameEngine
          style={styles.container}
          systems={[MoveBag, RadiusAdjust, BagCheck]}
          entities={{
            0 : { position: [windowWidth / 2, windowHeight * 2 / 3], renderer: <Radius radius={20} />},
            2 : { position: [windowWidth / 2, windowHeight * 2 / 3], renderer: <Bag />},
            1 : { position: [windowWidth / 2,  windowHeight / 3], renderer: <TrashMonster />},
          }}>
        </GameEngine>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);