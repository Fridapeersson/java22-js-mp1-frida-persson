//Start storleken för texten
let increaseText = 10;
//loopar fram 5 p element
for (let i = 1; i < 6; i++) {
    const p = document.createElement("p");
    //Skriver rad (1-5)
    p.innerText = `rad ${[i]}`;
    p.style.fontSize = increaseText + "px";
    console.log(p);
    p.style.textAlign = "center";
    p.style.background = `hsl(${160 + i**2}, 100%, 80%)`;
    document.body.append(p);
    //Ökar storleken på texten med 10px per iteration
    increaseText += 10;
}

//nummer array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const textNumbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

//flex-container med border
const container = document.createElement("div");
container.style.border = "solid black 2px";
container.style.padding = "30px";
//lägger till containern på sidan
document.body.append(container);
container.style.display = "flex";
container.style.justifyContent = "space-around";

//1a div boxen 0-9
const box1 = document.createElement("div");
container.append(box1);
box1.style.border = "solid #ccb3ff 10px";
box1.style.margin = "10px";

//2a div boxen 9 - 0
const box2 = document.createElement("div");
container.append(box2);
box2.style.border = "solid #ccb3ff 10px";
box2.style.margin = "10px";


//3e div boxen ett - tio
const box3 = document.createElement("div");
//lägger till box3 till containern
container.append(box3);
box3.style.border = "solid #ccb3ff 10px";
box3.style.margin = "10px";


//p element 1
//loopar fram p element baserat på hur många element som finns i arrayen
for(let i = 0; i < numbers.length; i++) {
    const p1 = document.createElement("p");
    p1.innerText = numbers[i];

    p1.style.paddingRight = "25px";
    p1.style.margin = 0;
    //lägger till p elementen till box1
    box1.append(p1);

    if(i%2 === 0) {
        p1.style.background = "black";
        p1.style.color = "white";
    }
    if(i === 4) {
        p1.style.background = "#ccb3ff";
        p1.style.color = "white";
    }
}

//p element 2
for(let i = 9; i >= 0; i--) {
    const p2 = document.createElement("p");
    p2.innerText = numbers[i];
    
    p2.style.textAlign = "center";
    p2.style.paddingRight = "12.5px";
    p2.style.paddingLeft = "12.5px";
    p2.style.margin = 0;
    
    console.log(p2);
    box2.append(p2);

    if(i%2 === 0) {
        p2.style.background = "black";
        p2.style.color = "white";
    }
    if(i === 8){
        p2.style.background = "#ccb3ff";
    }
}

//p element 3
for (let i = 0; i < textNumbers.length; i++) {
    const p3 = document.createElement("p");
    p3.innerText = textNumbers[i];
    //style
    p3.style.textAlign = "right";
    p3.style.margin = 0;
    p3.style.paddingLeft = "8px";
    box3.append(p3);

    if(i%2 === 0) {
        p3.style.background = "black";
        p3.style.color = "white";
    }
    if(i === 5) {
        p3.style.background = "#ccb3ff";

    }
}
