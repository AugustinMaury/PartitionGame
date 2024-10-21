import React, {useEffect} from 'react'
import Vex from 'vexflow'

const Pimpscripting2 = ({data}) => {
    function combinearray(string1, string2){
        let array1 = []
        if(string1!=null){
            array1 =string1.split(' ')
        }
        let array2 = []
        if(string2!=null){
            array2 = string2.split(' ')
        }

        for(let i=0; i < array1.length; i++){
            if(!array2.includes(array1[i])){
                array2.push(array1[i])
            }
        }
        const combinednotes = array2.join(' ')
        return combinednotes
    }

    useEffect(() => {
        if (data){
            document.getElementById('boo').innerHTML = ''
            const noteToPlay = `${data.NoteToPlay}`
            const notePlayed = data.NotePlayed ? `${data.NotePlayed}` : null
            const combinedNotes = combinearray(notePlayed, noteToPlay)
            console.log(combinedNotes)


            const vf = new Vex.Flow.Factory({renderer: {elementId: 'boo', width: 500, height: 200}});
            const score = vf.EasyScore();
            const system = vf.System();

            const voice = score.voice(score.notes(`(${combinedNotes})/q`, { stem: 'up' }), {time :  '1/4'});
            system.addStave({
                voices: [voice]
            }).addClef('treble').addTimeSignature('1/4');
            vf.draw();
        }
    }, [data]);

    return (
        <div id="boo"></div>
    )
}

export default Pimpscripting2;
