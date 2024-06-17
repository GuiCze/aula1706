let ent;
let todos = [];
process.stdin.on('data', function(data){
    ent=+data.toString().trim()
    if(!isNaN(ent))
        {
        todos.push(ent)
        }
    for(i=0;i<todos.length;i++){
        for(y=0;y<todos.length;y++){
            if(todos[i]==todos[y]&&i!=y){
            todos.splice(y,1)
            }
            if(todos[i]<todos[y]){
            todos.push(todos[y])
            todos.splice(y,1)
            }
    }
}
console.log(todos);
})
