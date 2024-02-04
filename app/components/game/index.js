import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, Dimensions, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { TrashMonster, Bag, Radius, BgEnt, Catcher } from "./renderers";
import { MoveBag, RadiusAdjust, BagCheck, CatcherFn } from "./systems"
import {ImageBackground} from 'react-native';
import { IDS } from "./ent";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class BestGameEver extends PureComponent {
  constructor({setStep}) {
    super();
    this.setStep = setStep;
  }

  render() {
    return (
      <View>
        <ImageBackground source={require('../../assets/bag.png')} resizeMode="cover">
          <GameEngine
            style={styles.container}
            systems={[MoveBag, RadiusAdjust, BagCheck, CatcherFn(this.setStep)]}
            entities={{
              'bg' : { position: [0, 0], renderer: <BgEnt />},
              'rad' : { position: [windowWidth / 2, windowHeight * 0.8], renderer: <Radius radius={20} />},
              'bag' : { position: [windowWidth / 2, windowHeight * 0.8], renderer: <Bag />},
              'trash' : { position: [windowWidth / 2,  windowHeight / 3], renderer: <TrashMonster />},
              'ball': { position: [windowWidth / 2,  windowHeight / 3], renderer: <Catcher visible={false} /> }
            }}>
          </GameEngine>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);