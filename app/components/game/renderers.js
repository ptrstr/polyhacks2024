import React, { PureComponent } from "react";
import { StyleSheet, View, Image } from "react-native";
import images from "../../images";

class TrashMonster extends PureComponent {
  render() {
    let radius = 250;
    const x = this.props.position[0] - radius / 2;
    const y = this.props.position[1] - radius / 2;
    return (
      <View style={[styles.monster, { left: x, top: y }]}>
        <Image source={images['monster']} style={{ width: radius, height: radius }} />
      </View>
    );
  }
}

class Bag extends PureComponent {
  render() {
    let radius = 200;
    const x = this.props.position[0] - radius / 2;
    const y = this.props.position[1] - radius / 2;
    return (
      <View style={[styles.monster, { left: x, top: y }]}>
        <Image source={images['bag']} style={{ width: radius, height: radius }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monster: {
    position: "absolute"
  },
  bag: {
    position: "absolute"
  }
});

export { TrashMonster, Bag };