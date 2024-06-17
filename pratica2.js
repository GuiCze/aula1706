let pares = [2,4];
let impares = [3,5]
let todos = [...pares,...impares];
for(i=0;i<todos.length;i++){
    for(y=0;y<todos.length;y++){
        if(todos[i]<todos[y]){
            todos.push(todos[y])
            todos.splice(y,1)
        }
    }
}
console.log(todos);