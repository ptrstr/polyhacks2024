import React, { PureComponent } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import {images, monsters} from "../../images";

class TrashMonster extends PureComponent {
  render() {
    let radius = 250;
    const x = this.props.position[0] - radius / 2;
    const y = this.props.position[1] - radius / 2;

    let img = monsters[Math.floor(Math.random()*monsters.length)];

    return (
      <View style={[styles.monster, { left: x, top: y }]}>
        <ImageBackground source={img} style={{ width: radius, height: radius, flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Image source={images.trash} style={{ marginLeft: 40, width: radius * 1, height: radius / 2, objectFit: "fill" }} />
        </ImageBackground>
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
  constructor(props) {
    super(props);
    this.state = {visible: props.visible};
  }

  render() {
    let radius = 300;
    const x = this.props.position[0] - radius / 2;
    const y = this.props.position[1] - radius / 2;
    return (
      <View style={[styles.monster, { left: x, top: y }]}>
        <Image source={images.pokeball} style={{ width: radius, height: radius, opacity: this.props.visible ? 1.0 : 0.0 }} />
      </View>
    );
  }
}

Catcher.defaultProps = {
  visible: false
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