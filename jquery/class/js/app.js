$('document').ready(function(){
  console.log("Hola")
})

function Persona(firstName, lastName, age, type ){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.type = type
  $('document').ready(function(){
    $('body').append("<h1>Hola Mundo</h1>")
  })
}

function Family(familyName){
  this.familyName = familyName
  this.parents = []
}

persona = new Persona("Angie", "Vanegas", 32, "prima")

Family.prototype.addParent = function(firstName, lastName, age, type ){
    this.parents.push(new Person(firstName, lastName, age, type))
}

family = new Family("Vanegas")
family.addParent("Rafael", "Vanegas", 65, "Papá")
family.addParent()

console.log(persona)
