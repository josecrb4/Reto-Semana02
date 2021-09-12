let { name, email } = { name: "Jose", email: "sv42483473@idat.edu.pe" }

console.log(name) 
console.log(email)

let { name2, email2, ...rest} = { name2: "Jose", email2: "sv42483473@idat.edu.pe", city: "MILUCHACA", state: "HUANCAYO",
country: "PERU"};

console.log(name2) 
console.log(email2)
console.log(rest);