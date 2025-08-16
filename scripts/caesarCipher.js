export default function caesarCipher(str,shift){
    if(!str) return null;
    if(!shift) return str;
    let newStr='';
    [...str].forEach(letter => {
        let code = letter.charCodeAt(0);

    // Uppercase A-Z
    if (code >= 65 && code <= 90) {
      let shifted = ((code - 65 + shift) % 26 + 26) % 26; 
      newStr += String.fromCharCode(65 + shifted);
    }
    // Lowercase a-z
    else if (code >= 97 && code <= 122) {
      let shifted = ((code - 97 + shift) % 26 + 26) % 26;
      newStr += String.fromCharCode(97 + shifted);
    }
    else{
            newStr+=letter
        }
        
    });
    return newStr;
}