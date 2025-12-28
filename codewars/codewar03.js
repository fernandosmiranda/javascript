function smash (words) {
    if(words.length === 0){
    return ""
    }

    let resultado = ""

    for(let c = 0; c < words.length; c++){
        if (resultado === ""){
            resultado = words[c]
        } else {
            resultado = resultado + " " + words[c]
        }      
    }
    return resultado
}

let words = ["this", "is", "a", "really", "long", "sentence"]
let frase = smash(words)
console.log(frase)