var ASCII = {
     "65": "A", "66": "B", "67": "C", "68": "D", "69": "E", "70": "F",
    "71": "G", "72": "H", "73": "I", "74": "J", "75": "K",
    "76": "L", "77": "M", "78": "N", "79": "O", "80": "P",
    "81": "Q", "82": "R", "83": "S", "84": "T", "85": "U",
    "86": "V", "87": "W", "88": "X", "89": "Y", "90": "Z",
}
// charCodeAt()

// fromCharCode() // id char to char

var $STRING = 'SERR YBIR?'

function stringToNumber(string){
    var strEmAscii = []
    for(let i = 0; i < string.length; i++){
           strEmAscii[i] = string.charCodeAt(i)
    }
    console.log(strEmAscii)
    return strEmAscii

}

function mais13(string){
    var strCifrada = []
    for(let i = 0; i < string.length; i++){
        if(string[i] == 32 || string[i] == 33 || string[i] == 46 || string[i] == 63)
            strCifrada[i] = string[i]
        else{
            if(string[i] + 13 > 90){
                strCifrada[i] = 64 + ( 13- (90 - string[i]))
            }
            else
                strCifrada[i] = string[i] + 13
        
        }
        
            
    }
    console.log(strCifrada)
    return strCifrada
}

function rot13(string){
    string = mais13(stringToNumber(string))
    let result = []
    for(let i = 0; i < string.length; i++){
        result += String.fromCharCode(string[i])
    }
    console.log(result)
    return result
}

var main = mais13(stringToNumber($STRING))

ROT13(main)