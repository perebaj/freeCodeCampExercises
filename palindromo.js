/*
name:   Jonathan Silva
data: 18/08/2019
link: https://learn.freecodecamp.org/

Javascript Algorithms And Data Structures Certification (300 hours)/JavaScript Algorithms and Data Structures Projects/Palindrome Checker
*/
var ASCII = {
    "31": "", "32": " ", "33": "!", "34": "\"", "35": "#",
    "36": "$", "37": "%", "38": "&", "39": "'", "40": "(",
    "41": ")", "42": "*", "43": "+", "44": ",", "45": "-",
    "46": ".", "47": "/", "48": "0", "49": "1", "50": "2",
    "51": "3", "52": "4", "53": "5", "54": "6", "55": "7",
    "56": "8", "57": "9", "58": ":", "59": ";", "60": "<",
    "61": "=", "62": ">", "63": "?", "64": "@", "65": "A",
    "66": "B", "67": "C", "68": "D", "69": "E", "70": "F",
    "71": "G", "72": "H", "73": "I", "74": "J", "75": "K",
    "76": "L", "77": "M", "78": "N", "79": "O", "80": "P",
    "81": "Q", "82": "R", "83": "S", "84": "T", "85": "U",
    "86": "V", "87": "W", "88": "X", "89": "Y", "90": "Z",
    "91": "[", "92": "\\", "93": "]", "94": "^", "95": "_",
    "96": "`", "97": "a", "98": "b", "99": "c", "100": "d",
    "101": "e", "102": "f", "103": "g", "104": "h", "105": "i",
    "106": "j", "107": "k", "108": "l", "109": "m", "110": "n",
    "111": "o", "112": "p", "113": "q", "114": "r", "115": "s",
    "116": "t", "117": "u", "118": "v", "119": "w", "120": "x",
    "121": "y", "122": "z", "123": "{", "124": "|", "125": "}",
    "126": "~", "127": ""
}

var $NOALPHANUM = ['#', '@', '-', '.', '$', '*', '(', ')', '+', ';', '~', ':', "'", '/', '%', '_', '?', ',', '=', '&', '!', ' '] //Array com caracteres não alpha numéricos 
var STRING = 'asdasd *( akdslj'

/*
@BRIEF:     verifica que é ou não alpha numérico
@param:     {char}  char que vai ser verificado
@param:     {noAlphaNum} lista com chars não alpha numéricos
@return:    True - se o char for alpha num
False - se o char não for alpha num
*/
function charIsAlphaNum(char, noAlphaNum){
    let flag = false
    for(let index = 0; index < noAlphaNum.length; index++){
        if(char != noAlphaNum[index]){
            flag = true
        }else
        return false
    }
    
    return flag
}

/*
@BRIEF: elimina os caracteres não alpha numéricos de uma string e padroniza para caixa baixa
@param: {string}    string que vai ser modificada
@param: {noAlphaNum}    Lista de caracteres não alpha numéricos
@return:    {array}    retorna um string arrumada
*/
function arrangeString(string, noAlphaNum){
    string = string.toLowerCase() // string p/ caixa baixa
    let array = [] // array com a string modificada

    for(let i = 0; i < string.length; i++){
       if(charIsAlphaNum(string[i],noAlphaNum)){
        array += string[i]
       }
    }

    return array
}

/*
@BRIEF:     Inverte uma string
@param:     {string}    string que será invertida
@return     {stringInvert}  Retorna a {string} passada por parâmetro invertida
*/
function invertString(string) {
    let stringInvert = []
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvert += string[i]
    }
    return stringInvert
}


/*
@BRIEF:     Verifica se a string passada é um palindromo
@param:     {string}    string que vai ser verificada
@return     {true} - true se a string é um palindromo
            {false} false se a string não é um palindromo
*/
function palindromo(string) {
    let str = arrangeString(string, $NOALPHANUM)
    let str2 = invertString(str)
    if (str === str2)
        return true
    else
        return false

}


var result = palindromo('almostomla', $NOALPHANUM)

console.log(result)
