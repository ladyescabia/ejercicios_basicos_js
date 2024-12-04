const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1
console.log(aldeanos[3]);

//4.2
aldeanos.push("Cervasio");

//4.3
aldeanos[0] = "Bambina";

//4.4
aldeanos.reverse();

//4.5 - 
for (let i = 0; i < aldeanos.length; i++) {
    if (aldeanos[i] === "Narciso") {
        aldeanos[i] = "Canela";
        break;
    }
}

//4.6
console.log(aldeanos[aldeanos.length -1]);

console.log(aldeanos);