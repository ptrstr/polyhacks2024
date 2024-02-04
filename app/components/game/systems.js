import { Dimensions } from "react-native";
import { IDS } from ".";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const randomPositions = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


let VELOCITY_LIMIT = 40;
let DELTA_MUL = 0.3;

export const MoveBag = (entities, { touches }) => {
    let bag = entities[IDS.BAG];

    if (!bag)
        return entities;

    touches.filter(t => t.type === "start").forEach(t => {
        bag.velocity = [0, 0];
        bag.doneMove = false;
    });

    touches.filter(t => t.type === "move").forEach(t => {
        bag.velocity = [
            Math.min(VELOCITY_LIMIT, Math.max(-VELOCITY_LIMIT, bag.velocity[0] + t.delta.pageX * DELTA_MUL)),
            Math.min(VELOCITY_LIMIT, Math.max(-VELOCITY_LIMIT, bag.velocity[1] + t.delta.pageY * DELTA_MUL))
        ];
    });

    touches.filter(t => t.type === "end").forEach(t => {
        bag.doneMove = true;
    });

    if (bag.velocity === undefined) {
        bag.velocity = [0, 0];
    }

    if (Math.sqrt(bag.velocity[0] ** 2 + bag.velocity[1] ** 2) < 0.01) {
        bag.velocity = [0, 0];
    } else {
        bag.position = bag.position.map((t, i) => t + bag.velocity[i]);
        bag.velocity = bag.velocity.map(t => t * 0.9);
    }

    return entities;
};

export const RadiusAdjust = (entities) => {
    entities[IDS.RADIUS].radius = Math.sqrt(entities[IDS.BAG].velocity[0] ** 2 + entities[IDS.BAG].velocity[1] ** 2);

    return entities;
};

export const BagCheck = (entities) => {
    let bag = entities[IDS.BAG];
    let monster = entities[IDS.TRASH];

    const distance = Math.sqrt((bag.position[0] - monster.position[0]) ** 2 + (bag.position[1] - monster.position[1]) ** 2);

    if (distance <= (250 + 200) / 2) {
        delete entities[IDS.BAG];
    }

    return entities;
}