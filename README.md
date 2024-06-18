<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid 100x100</title>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(100, 10px);
            grid-template-rows: repeat(100, 10px);
            gap: 0px;
        }
        .grid {
            width: 10px;
            height: 10px;
            background-color: lightgrey;
            
            
        }
        .centro {
            background-color: grey;
        }
        .lateral {
            background-color: grey;
        }
        .bola {
            background-color:black;
            border-radius: 5px;
        }
        .tijolo{
            background-color: red;
            border-radius: 5px;
            
        }
    </style>
</head>
<body>
    <div class="grid-container">
    </div>
    <script>
        const container = document.querySelector('.grid-container');
        let brick=[]
        for(i=0;i<97;i++){
            brick.push(i+101,i+401)
            i+=5
        }
        // Configuração do grid
        for (let i = 0; i < 5000; i++) {
            const item = document.createElement('div');
            item.classList.add('grid');
            container.appendChild(item);
        }
        for(let i=0;i<brick.length;i++){
               container.children[brick[i]-101].classList.add('tijolo');
               container.children[brick[i]-100].classList.add('tijolo');
               container.children[brick[i]-99].classList.add('tijolo');    
               container.children[brick[i]-1].classList.add('tijolo');
               container.children[brick[i]].classList.add('tijolo');
               container.children[brick[i]+1].classList.add('tijolo');
        }
        let dir=-100
        let lat = 1
        let ang = 0;
        // Posição inicial da bola
        let position = 4961;
        container.children[position].classList.add('centro');
        container.children[position-1].classList.add('lateral');
        container.children[position+1].classList.add('lateral');
        let pong = 890;
        let P;
        let del=false
        function move() {
            if (pong < 4899) {
                container.children[pong].classList.remove('bola');
                pong += dir+lat;
                if(lat==0)
                {   
                    for(i=99;i<102;i++)
                    if(brick.includes(pong-i))
                    {
                        dir=-dir;
                        P=brick.indexOf(pong-i)
                        del=true
                    }
                }
                if(lat>0)//indo para direita
                {   
                    for(i=98;i<101;i++)
                    {
                        if(brick.includes(pong-i))//colisão na parte de baixo
                        {
                            dir=-dir
                            del=true
                            P=brick.indexOf(pong-i)
                        }
                    }

                    if(brick.includes(pong+2))//colisão lateral infeiror
                    {
                        lat=-lat
                        P=brick.indexOf(pong+2)
                        del=true;
                    }
                    if(brick.includes(pong+102))//colisão lateral superior
                    {
                        lat=-lat
                        P=brick.indexOf(pong+102)
                        del=true;
                    }
                    for(i=199;i<202;i++)//colisão superior
                    {
                        if(brick.includes(pong+i))
                        {
                            dir=-dir;
                            P=brick.indexOf(pong+i)
                            del=true
                        }
                    }
                }
                if(lat<0)
                {
                    if(brick.includes(pong-2))
                    {
                        lat=-lat
                        P=brick.indexOf(pong-2)
                        del=true;
                    }
                    if(brick.includes(pong+98))
                    {
                        dir=-dir;
                        P=brick.indexOf(pong+98)
                        del=true
                    }
                    for(i=198;i<202;i++)//colisão superior
                    {
                        if(brick.includes(pong+i)&&dir<)
                        {
                            dir=-dir;
                            P=brick.indexOf(pong+i)
                            del=true
                        }
                    }
                    for(i=98;i<103;i++)//colisão superior
                    {
                        if(brick.includes(pong-i))
                        {
                            dir=-dir;
                            P=brick.indexOf(pong-i)
                            del=true
                        }
                    }
                    
                }
               
                
                if(del){
                    container.children[brick[P]].classList.remove('tijolo');
                    container.children[brick[P]+1].classList.remove('tijolo');
                    container.children[brick[P]-1].classList.remove('tijolo');
                   
                    
                    container.children[brick[P]-100].classList.remove('tijolo');
                    container.children[brick[P]-101].classList.remove('tijolo');
                    container.children[brick[P]-99].classList.remove('tijolo');
                    brick.splice(P,1)        
                    del=false;
                } 
            
                container.children[pong].classList.add('bola');
            }
            
            if(pong+100==position||pong+101==position||pong+99==position){
                dir=-dir
            }
            if(pong+99==position&&lat<2){
                lat++;
            }
            if(pong+101==position&&lat>-2){
                lat--;
            }
            if(pong+98==position&&lat==-2){
                lat++;
            }
            if(pong+102==position&&lat==2){
                lat--;
            }
            if((pong+1)%100==0||lat==2&&(pong+2)%100==0){
                lat=-lat;
            }
            if(pong%100==0){
                lat=Math.abs(lat);
            }
            if(pong<100)
            {
                dir=Math.abs(dir);
            }
    
            
        }

        
        // Velocidade da bola
        setInterval(move, 500);;

        // Evento que le a tecla apertada pelo usuario
        document.addEventListener('keydown', (event) => {
            const key = event.key;
            
        container.children[pong].classList.add('bola');

        // Movimento da raquete
        

            if (key === 'd') {
                if (position < 4998) { 
                    container.children[position-1].classList.remove('centro','lateral');
                    
                    position++;
                    container.children[position+1].classList.add('lateral');
                    
                }
            } else if (key === 'a') {
                if (position > 4901) { //Testa o limite lateral esquerdo
                    container.children[position+1].classList.remove('centro','lateral');
                    position--;
                    container.children[position-1].classList.add('lateral');
                }
            }
        });
        
    </script>
</body>
</html>
