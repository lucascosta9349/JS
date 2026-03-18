//exercício da aula 03 - relatório de chamados
function relatorio(chamados) {
    let chamadosAbertos = 0;
    let contagemPrioridade = {
        alta: 0,
        media: 0,
        baixa: 0
    };
    let prioridadeAltaAberto = false;

    //listar chamados abertos
    for(let i=0; i<chamados.length; i++){
        if(chamados[i].status == "aberto"){
            chamadosAbertos++;
        }
        //contar por prioridade
        if(chamados[i].prioridade == "alta"){
            contagemPrioridade.alta++;
        }
        else if(chamados[i].prioridade == "media"){
            contagemPrioridade.media++;
        }
        else{
            contagemPrioridade.baixa++;
        }

        if(chamados[i].prioridade == "alta" && chamados[i].status == "aberto"){
            prioridadeAltaAberto = true;
        }
    }

    return{
        chamadosAbertos, 
        contagemPrioridade, 
        prioridadeAltaAberto
    };
}


function main(){
    const chamados = [
        { id: 1, status: "fechado", prioridade: "alta" },
        { id: 2, status: "fechado", prioridade: "baixa" },
        { id: 3, status: "aberto", prioridade: "media" },
        { id: 4, status: "aberto", prioridade: "media" }
    ];

    let resultado = relatorio(chamados);
    console.log(resultado);

}

main();