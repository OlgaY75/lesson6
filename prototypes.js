let students = {
    study: true
};
let ivan = {
    read: true,
    __proto__: students
};

console.log(ivan);
console.log(ivan.study);




let pencils = {
    draw: true,
};
let redPencil = Object.create(pencils);

console.log(redPencil.draw)






let person = {
    age: 27,
    sex: "male",
}

let engineer = {
    __proto__: person,
    work: true,
    experience: 5,
    name: "Vitaliy",
}

let qaEngineer = {
    speciality: "manual",
    __proto__: engineer,
}

for (const qaEngineerKey in qaEngineer) {
    console.log(qaEngineerKey + ": " + qaEngineer[qaEngineerKey]);
}

