import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const randomPositions = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const MoveBag = (entities, { touches }) => {
    if (touches.length > 1) return entities;

    let bag = entities[0];

    if (!bag.velocity) {
        bag.velocity = [1, 0];
        bag.doneMove = false;
    }
    
    if (!bag.doneMove) {
        touches.filter(t => t.type === "move").forEach(t => {
            bag.velocity = [
                Math.min(100, Math.max(-100, bag.velocity[0] + t.delta.pageX * 0.1)),
                Math.min(100, Math.max(-100, bag.velocity[1] + t.delta.pageY * 0.1))
            ];
        });

        touches.filter(t => t.type === "end").forEach(t => {
            bag.doneMove = true;
        });
    } else {
        bag.position = bag.position.map((t, i) => t + bag.velocity[i]);

        bag.velocity = bag.velocity.map(t => t * 0.9);

        if (bag.velocity[0] < 0.01)
            bag.doneMove = false;
    }

    return entities;
  };