function square(num) {
    return num * num;
}

function changeDataPerson(person) {
    person['name'] = 'Marya';
    person.age = square(person.age);
}

let dataPerson = {
    name: 'Roberto',
    age: 5
};
changeDataPerson(dataPerson);
console.log(dataPerson);