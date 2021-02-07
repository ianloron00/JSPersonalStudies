// help:
// https://www.techiedelight.com/dynamically-create-drop-down-list-javascript/

var arrayPeople = new Array()

class setPerson {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

document.getElementById("button").onclick = function addPerson() {
    var i = arrayPeople.length
    var name = document.getElementById("namePerson").value
    var age = document.getElementById("agePerson").value
    if (name == "" || name == undefined) name = "name_" + i
    if (age == "" || age == undefined) age = "age_" + i
    arrayPeople[i] = new setPerson(name, age)
    
    var select = document.getElementById("selection")
    var option = document.createElement("option")
    option.text = name 
    option.id = i
    select.appendChild(option)
    document.getElementById("personSelected").innerHTML = "Person "+name+" ("+age+" years) was added.\n"
}

document.getElementById("selection").onchange = function showData() {
    var elem = document.getElementById("selection") 
    var id = elem.options[elem.selectedIndex].id
    document.getElementById("personSelected").innerHTML = "id " + id + ".\n"
    var name = arrayPeople[parseInt(id)].name 
    var age = arrayPeople[parseInt(id)].age
    document.getElementById("personSelected").innerHTML = name+" is "+age+" years old.\n"
}