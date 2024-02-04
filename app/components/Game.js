import { useState, useEffect } from 'react';
import { MapScreen } from './Map';

export function GameScreen() {
    const [step, setStep] = useState(0);
    
    let content;

    switch (step) {
        default:
        case 0: // Map screen
            content = <MapScreen step={step} setStep={setStep} />;
            break;
        case 1: // Camera screen
            break;
        case 2: // PoGo scene
            break;
    }

    return content;
}
