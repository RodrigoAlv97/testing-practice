function reverseString (str) {
    let string = str.toString();
    if (string === "") {
        return string
    } else {
        let res = string.split("").reverse().join("");
        return res; 
    }
  
} 

export {reverseString}