function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=-{}[]\:;"\'<>,.?/~`';

    let allowedchars = '';
    let password = ''; 
    allowedchars += includeLowercase? lowercaseLetters : '';
    allowedchars += includeUppercase? uppercaseLetters : '';
    allowedchars += includeNumbers? numbers : '';
    allowedchars += includeSymbols? symbols : '';

    if (length<=0 ){
        return '(passwrod length must be at least 1 character or more )';
    }
    if(allowedchars.length === 0){
        return '(at least one type of character must be included)';
    }
    for (let i = 0; i < length; i++) {
        password += allowedchars[Math.floor(Math.random() * allowedchars.length)];
    }
    return password; 

}



const passwordlength = 12 ; 
const includeLowercase = true ; 
const includeUppercase = true ;
const includeNumbers = true ;
const includeSymbols = true ;

 const password = generatePassword( passwordlength,
                                    includeLowercase,
                                    includeUppercase,
                                     includeNumbers,
                                     includeSymbols);

console.log(`Generated password : ${password} `);
