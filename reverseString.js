// Reverse String Value

function reversedString(text ){
    let reversedd = '';

    for(let i = text.length -1; i >= 0; i--){
        let element = text[i];
        reversedd = reversedd + element;
        console.log(element, reversedd);
    }
   
    return reversedd;
}
let myText = " My Name is Mominul Houqe";
let reversed = reversedString(myText);
console.log("try to reversed = ",reversed);



// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  