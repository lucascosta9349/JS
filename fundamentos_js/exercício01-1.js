function monitoramentoDeServidor(servidor){
    
    let lentos = 0
    let criticos = 0

    for(let i = 0; i < servidor.length; i++){

        if(servidor[i]>1000){
            criticos++
        }
        else if(servidor[i]>500){
            lentos++
        }
    }
    console.log(`Lentos: ${lentos} \nCríticos: ${criticos}`)
}

function main(){
    const servidor = [120, 200, 450, 90, 800, 1100, 499, 700, 800, 1500, 500];
    monitoramentoDeServidor(servidor)
}

main()