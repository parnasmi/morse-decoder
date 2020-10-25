const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let output = '';
    for (let i = 0; i<= (expr.length-1)/10; i++) {
        letter = expr.substr(i*10, 10);
        if (letter.indexOf('*') == 0) {
          output = output + ' ';
        }
        else {
          output = output + MORSE_TABLE[getTableKey(letter)];  
        }
      }
    return output;
}
function getTableKey(letter) {
    let newLetter = letter.substr(letter.indexOf('1'));
    let tableKey = '';
    for (let i = 1; i <= (newLetter.length)/2; i++) {
        if (newLetter[2*i-1] == 0 ) {
          tableKey = tableKey + '.';
        }
        else {
          tableKey = tableKey + '-';
        }
    }
    return tableKey
  }

module.exports = {
    decode
}