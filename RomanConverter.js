/*
1: 'I'
4: 'IV'
5: 'V'
9: 'IX'
10: 'X'
40: 'XL'
50: 'L',
90: 'XC'
100: 'C'
400: 'CD'
500: 'D'
900: 'CM'
1000: 'M'
*/


function convertToRoman(number){
    let $ROMAN = ''
    while(number != 0){
        
        if(number >= 1000){
            $ROMAN += 'M'
            number -= 1000
        }
        else if(number >= 900){
            $ROMAN += 'CM'
            number -= 900
        }
        else if(number >= 500){
            $ROMAN += 'D'
            number -= 500
        }
        else if(number >= 400){
            $ROMAN += 'CD'
            number -= 400
        }
        else if(number >= 100){
            $ROMAN += 'C'
            number -= 100
        }
        else if(number >= 90){
            $ROMAN += 'XC'
            number -= 90
        }
        else if(number >= 50){
            $ROMAN += 'L'
            number -= 50
        }
        else if(number >= 40){
            $ROMAN += 'XL'
            number -= 40
        }
        else if(number >= 10){
            $ROMAN += 'X'
            number -= 10
        }
        else if(number >= 9){
            $ROMAN += 'IX'
            number -= 9        
        }
        else if(number >= 5){
            $ROMAN += 'V'
            number -= 5
        }
        else if(number >= 4){
            $ROMAN += 'IV'
            number -= 4
        }
        else{
            $ROMAN += 'I'
            number -= 1
        }
    
    }

    return $ROMAN
}

var result = convertToRoman(29)
console.log(result)