let user = {}

user["name"] = "Ivan";
user.surname = "Smit";

user.name = "Petro";
console.log(user);

delete user.name;
console.log(user)

function isEmpty(obj) {
    for (const objKey in obj) {
        return false;
    }
    return true;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "Вставай";

console.log( isEmpty(schedule) ); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (const salariesKey in salaries) {
    sum = sum + salaries[salariesKey];
}

console.log(sum);

let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
};

function multiplyNumeric(obj) {
    for (const objKey in obj) {
        if (Number.isInteger(obj[objKey])) {
            obj[objKey] = obj[objKey] * 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);
