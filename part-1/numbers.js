let favNumber = 11
let numURL = "http://numbersapi.com";

$.getJSON(`$(numURL)/$(favNumber)?json`)
.then(data =>{
    console.log(data);
});

let favNumbers = [12, 22, 15];
$.getJSON(`${numURL}/${favNumbers}?json`).then(data => {
    console.log(data);
});

Promise.all(
    Array.from({length:4},()=>{
        return $.getJSON(`${numURL}/${favNumber}?json`)
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});

