let usuarios = [];
let usuario = {
    nome: '',
    email: '',
    idade: '',
}
let type;
let ent;
console.log("Digite 1 para arquivar,2 para buscar um usaurio pelo e-mail, ou 3 para sair ");
process.stdin.on("data", function (data) {
    ent = data.toString().trim();
    if(!type){
          type=ent;
          if(type=='1'){
              console.log("Digite o nome do usuario");
          }
          else if(type=='3'){
              process.exit();
          
    }     else if(type=='2'){
            console.log('Digite o email que deseja buscar');
    }}
      else {switch (type) {
      case '1':
          if(!usuario.nome) {
            usuario.nome = ent;
            console.log("Digite o email do usuario");
        } else if (!usuario.email) {
            usuario.email=ent
            console.log("Digite a idade do usuario");
          
        } else if (!usuario.idade) {       
          usuario.idade = ent;
          usuarios.push(usuario);
          console.log(
            "Digite 1 para arquivar,2 para buscar um usaurio pelo e-mail, ou 3 para sair ");
          usuario = {};
          type = "";
        } 
        break;
        case '2':
          for(let i=0;i<usuarios.length;i++){
            if(usuarios[i].email==ent){
              console.log('Usuario encontrado',usuarios[i]);
              type='';
              console.log(
                "Digite 1 para arquivar,2 para buscar um usuario pelo e-mail, ou 3 para sair "
              );
  
            }
            else{
              console.log('Usuario não localizado');
              type='';
            }
          }
      
          
          
          break;
    
    
    }
   
  }});
