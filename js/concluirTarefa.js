const armazenarTarefas = JSON.parse(localStorage.getItem("Tarefas") || '[]')

console.log('Tarefas',armazenarTarefas)

const armazenarTarefaConcluida = JSON.parse(localStorage.getItem("Concluidos") || '[]')

console.log('Concluidos',armazenarTarefaConcluida)

const elementoPrincipal = document.querySelector("main")

if(elementoPrincipal && armazenarTarefaConcluida.length > 0){
    for(let indice = 0; indice < armazenarTarefaConcluida.length; indice++){

        const container = document.createElement('div')
        container.className = 'container'

        elementoPrincipal.appendChild(container)

        const elementoCard = document.createElement('div')
        elementoCard.className = 'card bg-success mx-auto'
        elementoCard.style.marginTop = '20px'
        elementoCard.style.width = '25%'

        container.appendChild(elementoCard)

        const cardBody = document.createElement('div')
        cardBody.className = 'card-body text-white'
        cardBody.textContent = `Tarefa ${armazenarTarefaConcluida[indice]} concluída`

        elementoCard.appendChild(cardBody)
    }
}