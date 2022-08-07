// Code your solutions in this file

function writeCards(names) {
    const thankyous = [];
    for (let i = 0; i < names.length; i++) {
        const string = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        thankyous.push(string)
       
    }
    return thankyous;
}

function countDown(num){
    for(let i = num;i >= 0; i--){
        console.log(i)
    }
}