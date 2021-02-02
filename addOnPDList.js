var arrayPeople = new Array()

class setPerson {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

function addPerson(name, age) {
    var i = arrayPeople.length
    if (name == "") name = "name_" + i
    arrayPeople[i] = new setPerson(name, age)
    document.getElementById("selection").setAttribute(name, i)
    document.getElementById("personSelected").innerHTML = "Person "+name+" and "+age+" was added.\n"
}
function showData(name, age) {
    var n = document.getElementById("selection").nodeName
    var a = document.getElementById("selection").nodeValue.age
    document.getElementById("personSelected").innerHTML = n+" is "+a+" years old.\n"
    document.getElementById("personSelected").innerHTML = name+" iss "+age+" yearss old.\n"
}


/*
function showData(form) {
    var len = form.arrayPeople.length
    for (var p = 0; p < len; p++) {
        var res = arrayPeople[p].name + " has " + 
                  arrayPeople[p].age + " years old.\n"
    }
    form.output.value = res
}

function selectData() {
    var page = ""
    page += "<select name='people' onchange='showData(this.form)'> " 
    for(var j = 0; j < arrayPeople.length; j++) {
        page += "<option"
        if (j==0) {
            page += " selected"
        }
        page += ">" + arrayPeople[j].name
    }

    page += "</select><p>"
    document.write(page)
}
*/