import React, { useEffect } from "react";
import Vex from 'vexflow';

const Testers3 = () => {
    useEffect(() => {
        // Ensure that the element exists before manipulating it
        const element = document.getElementById('boo');
        if (element) {
            element.innerHTML = '';

            const noteToPlay = "(c4 e4 c5)/q";
            const vf = new Vex.Flow.Factory({
                renderer: { elementId: 'boo', width: 500, height: 200 }
            });
            const score = vf.EasyScore();
            const system = vf.System();
            console.log(noteToPlay);
            const voice = score.voice(score.notes(noteToPlay, { stem: 'up' }), { time: '1/4' });
            system.addStave({
                voices: [voice]
            }).addClef('treble').addTimeSignature('1/4');
            vf.draw();
        }
    }, []); // Empty dependency array ensures this runs once after the component mounts

    return <div id="boo"></div>;
};

export default Testers3;
