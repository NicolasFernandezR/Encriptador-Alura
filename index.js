
//La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function ecriptar (text){
    let newText = text.replace(/e/g, "enter");
    newText = newText.replace(/i/g, "imes");
    newText = newText.replace(/a/g, "ai");
    newText = newText.replace(/o/g, "ober");
    newText = newText.replace(/u/g, "ufat");
    return newText;
}

function desencriptar (text){
    let newText = text.replace(/enter/g, "e");
    newText = newText.replace(/imes/g, "i");
    newText = newText.replace(/ai/g, "a");
    newText = newText.replace(/ober/g, "o");
    newText = newText.replace(/ufat/g, "u");
    return newText;
}

function encriptarBoxText(){
    const textArea = document.getElementById("text-encript");
    const textResult = document.getElementById("text-result");
    textResult.value = ecriptar(textArea.value);
    setTimeout(() => {
        document.getElementById("decrypt").disabled =false;
    }, 1000);
    const sectionCopy = document.getElementById("section-copy");
    const sectionImg = document.getElementById("section-img");
    sectionCopy.style.display = "flex";
    sectionImg.style.display = "none";
}

function desencriptarBoxText(){
    const textArea = document.getElementById("text-encript");
    const textResult = document.getElementById("text-result");
    textResult.value = desencriptar(textArea.value);
}

function copyText(){
    const textResult = document.getElementById("text-result");
    textResult.select();
    document.execCommand("copy");
}
