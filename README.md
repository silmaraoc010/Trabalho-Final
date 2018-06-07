# Trabalho-Final
CIFRA DE CÉSAR Pseudocodigo Cifra Inicio

Escreva (‘Digite uma frase’);
	leia (text)
   se (text não estiver vazio) então
     cipher();
   Senão 

	Escreva ('Digite uma frase’);

	Escreva (‘Digite uma frase para criptografar’);
  FIMSE

 função cipher (text)

    leia textCipher = '';
       para (var i = 0; i<text.length; i++)
             var textChar = (text.charCodeAt(i) - 65 + 33)%26 + 65;
             textCipher += String.fromCharCode(textChar);

             Retorna textCipher;
fim-função
Fim algoritmo
