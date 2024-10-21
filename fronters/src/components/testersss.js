const string1 = "c1 c2"
const string2 = ""

function combinearray(string1, string2){
    const array1 = string1.split(' ')
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
notes = combinearray(string1, string2)
console.log(notes)