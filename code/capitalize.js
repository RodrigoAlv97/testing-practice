function capitalize (str) {
    let string = str.toString();
    if (string === "") {
        return string
    } else {
        let res = string[0].toUpperCase() + string.slice(1);
        return res; 
    }
  
} 
 export {capitalize};