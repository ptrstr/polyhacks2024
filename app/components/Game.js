import { useState, useEffect } from 'react';
import { MapScreen } from './Map';
import { CameraBackground } from './CameraBackground.js';
import BestGameEver from './game/index.js';

export function GameScreen() {
    const [step, setStep] = useState(1);
    
    let content;

    switch (step) {
        default:
        case 0: // Map screen
            content = <MapScreen step={step} setStep={setStep} />;
            break;
        case 1: // Camera screen
            content = <CameraBackground />
            break;
        case 2: // PoGo scene
            content = <BestGameEver />;
            break;
    }

    return content;
}
