function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")


let campoPesquisa = document.getElementById("campo-pesquisa").value

if(!campoPesquisa){
    section.innerHTML = "<p> Error 404 </p>"
    return;
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = ""
let nome = ""
let descricao = ""
let tags = ""

for (let dado of Magias){
    nome = dado.nome.toLowerCase()
    descricao = dado.nome.toLowerCase()
    tags = dado.tags.toLowerCase()
    if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
     resultados +=
    `
        <div class="item-resultado"> 
            <h2>
                <a href="#">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">
                Descrição: ${dado.descricao}
            </p>
            <p class="descricao-meta">
                Custo: ${dado.custo}
            </p>
            <p class="descricao-meta">
                Execução: ${dado.execucaco}
            </p>
            <p class="descricao-meta">
                Alcance: ${dado.alcance}
            </p>
            <p class="descricao-meta">
                Alvo: ${dado.alvo}
            </p>
            <p class="descricao-meta">
                Área: ${dado.area}
            </p>
            <p class="descricao-meta">
                Duracao: ${dado.duracao}
            </p>
            <p class="descricao-meta">
                Truque: ${dado.Truque}
            </p>
            <p class="descricao-meta">
                Aprimoramento 1: ${dado.mana1}
            </p>
            <p class="descricao-meta">
                Aprimoramento 2: ${dado.mana2}
            </p>
            <p class="descricao-meta">
                Aprimoramento 3: ${dado.mana3}
            </p>
            <p class="descricao-meta">
                Aprimoramento 4: ${dado.mana4}
            </p>
            <p class="descricao-meta">
                Aprimoramento 5: ${dado.mana5}
            </p>

        </div>
    `
    }
}
 if(!resultados){
    resultados = "<p>Nada foi Encontrado</p>"
 }
section.innerHTML = resultados
return;
}


