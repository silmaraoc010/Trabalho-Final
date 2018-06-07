var phrase = prompt('Digite uma frase para criptografar')
if(phrase !== '' && phrase.replace(/[^0-9]/g, ' ') !== phrase){
// se o texto for diferente de 0, ou se você inserir qualquer valor numérico, ele o substituirá por vazio e chama o prompt novamente
cipher(phrase); // chama a função para executar

}
else{
alert('Digite uma frase'); 
// Se não for digitado nenhuma frase  o prompt será chamado novamente
var phrase = prompt('Digite uma frase para criptografar');
 cipher(phrase);
}  

//function Cipher
function cipher(phrase){
//Guarda as letras de um novo texto
var textCipher = "";
//percorre o texto digitado
for(var i = 0; i<phrase.length; i++){

// descobrindo o código ASCII das letras e aplicar a fórmula
 var textChar = (phrase.charCodeAt(i) - 65 + 33)%26 + 65;

// convertendo o texto cifrado
 textCipher += String.fromCharCode(textChar);
}
//retorna o valor

alert (textCipher);

//decipher to ficando louca.
var phrase = prompt('Digite uma frase para criptografar')
if(phrase !== '' && phrase.replace(/[^0-9]/g, ' ') !== phrase){
// se o texto for diferente de 0, ou se você inserir qualquer valor numérico, ele o substituirá por vazio e chama o prompt novamente
cipher(phrase); // chama a função para executar

}
else{
alert('Digite uma frase'); 
// Se não for digitado nenhuma frase  o prompt será chamado novamente
var phrase = prompt('Digite uma frase para criptografar');
 cipher(phrase);
}  

decipher(textCipher);
var textDecipher = "";

function decipher(textCipher){
  var encrypted = "";
  for(var x = 0; x < textCipher.length; x++){
    encrypted += String.fromCharCode((textCipher.charCodeAt(x) + 7) % 26 + 97);
  }
  return encrypted;
}}


// var phrase = prompt('Digite uma frase para criptografar')
// if(phrase !== '' && phrase.replace(/[^0-9]/g, ' ') !== phrase){
// // se o texto for diferente de 0, ou se você inserir qualquer valor numérico, ele o substituirá por vazio e chama o prompt novamente
//   cipher(phrase); // chamamos a função para executar

// }
// else{
//   alert('Digite uma frase'); 
// // Se não for digitado nenhuma frase  o prompt será chamado novamente
//   var phrase = prompt('Digite uma frase para criptografar');
// }  

// //function Cipher
// function cipher(phrase){
//   //Guarda as letras de um novo texto
//   var textCipher = "";
//  // passando pelo texto digitado
//   for(var i = 0; i<phrase.length; i++){
 
// // descobrindo o código ASCII das letras e aplicar a fórmula
//    var textChar = (phrase.charCodeAt(i) - 65 + 33)%26 + 65;

// // convertendo o texto cifrado 
//    textCipher += String.fromCharCode(textChar);
//  }
//  //retorna o valor

 // return textCipher;
 document.getElementById("CipherPhrase").innerHTML += textCipher;
// }

  

  
// //funcion Decipher

// //   //tratando de invertir la function cipher
// // function DecipherPhrase(phrase){
// //   //para guardar las letras de la letra a descifrar
// //   var textDecipher = "";
// //   //
// //     for(var i = 0; i<phrase.length; i++){
// //       var textChar = (String.fromCharCode(phrase(i)) + 33)%26;
// //       textDecipher = textDecipher + textChar;
// //       var newText = newText.charCodeAt(textDecipher);
// //     }
// //     return newText;
// // }