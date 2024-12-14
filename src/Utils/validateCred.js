const validateEmail = (emailValue) => {
    if (emailValue == null) return null;
    const indexOfATR = emailValue.indexOf('@');
    const indexOfDot = emailValue.indexOf('.');
    emailValue = emailValue.trim();

    if (emailValue == "") return "Email can not be empty!";
    if (indexOfATR == 0 || indexOfATR == -1) return "@ is missing";
    if (indexOfDot == 0 || indexOfDot == -1) return "Dot (.) is missing";
    if (indexOfDot - indexOfATR <= 1) return "Invalid mail client"
    if (emailValue[indexOfDot + 1] == undefined || emailValue[indexOfDot + 2] == undefined) return "Invalid domain";

    return null;
}
const validatePass = (passValue) => {
    if (passValue == null) return null;
    passValue = passValue.trim();
    const spChar = '@#$%*&^`~_';
    let i, j, k;
    for (i = 0; i < spChar.length; i++) {
        if (passValue.includes(spChar[i])) break;
    }
    for (j = 0; j < passValue.length; j++) {

        if ((passValue.charCodeAt(j) >= 65 && passValue.charCodeAt(j) <= 90) || (passValue.charCodeAt(j) >= 97 && passValue.charCodeAt(j) <= 122)) {
            if (passValue[j] == passValue[j].toUpperCase()) break;
        }
    }
    for (k = 0; k < 9; k++) {
        if (passValue.includes(k)) break;
    }
    if (!passValue.length) return "Password can't be empty.";
    if (passValue.length < 8 || passValue.length > 60) return "Your password must contain between 8 and 60 characters."
    if (i >= passValue.length) return "Password must have at least one special character."
    if (j >= passValue.length) return "Password must have at least one Capital letter."
    if (k >= passValue.length) return "Password must have at least one number."
    return null;
}
const validateName = (nameValue) => {
    if (nameValue == null) return null;
    return (nameValue.length) ? null : "Name can't be empty";
}
export const validateCred = (emailValue = null, passValue = null, nameValue = null) => {
    const mail = validateEmail(emailValue);
    const pass = validatePass(passValue);
    const name = validateName(nameValue);

    return [mail, pass, name]
}
