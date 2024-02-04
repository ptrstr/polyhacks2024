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
  constructor(props) {
    super(props);
    this.state = {velocity: props.initialVelocity || [0, 0]};
  }

  render() {
    let radius = 200;
    const x = this.props.position[0] - radius / 2;
    const y = this.props.position[1] - radius / 2;
    return (
      <View style={[styles.monster, { left: x, top: y }]}>
        <Image source={images.bag} style={{ width: radius, height: radius }} />
      </View>
    );
  }
}

Bag.defaultProps = {
  velocity: [0, 0],
  doneMove: false
}

class Radius extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {radius: props.radius};
  }

  render() {
    const x = this.props.position[0] - this.props.radius;
    const y = this.props.position[1] - this.props.radius;

    return (
      <View
        style={
          [
            {
              borderColor: "#CCC",
              borderWidth: 4,
              borderRadius: this.props.radius * 2,
              width: this.props.radius * 2,
              height: this.props.radius * 2,
              backgroundColor: "pink",
              position: "absolute",
              left: x,
              top: y
            }
          ]
        } />
    );
  }
}

Radius.defaultProps = {
  radius: 20
}

export class BgEnt extends PureComponent {
  render() {
    return (
      <View style={[{ width: '100%', height: 'auto' }]}>
        <Image source={{uri: images.bg}} style={{ width: '100%', height: 1000 }} />
      </View>
    );
  }
}

export class Catcher extends PureComponent {
  render() {
    let radius = 300;
    const x = this.props.position[0] - radius / 2;
    const y = this.props.position[1] - radius / 2;
    return (
      <View style={[styles.monster, { left: x, top: y }]}>
        <Image source={images.pokeball} style={{ width: radius, height: radius }} />
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
  },
  bg: {
    width: '100%',
    height: '100%'
  }
});

export { TrashMonster, Bag, Radius };