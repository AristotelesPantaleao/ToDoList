const armazenarTarefas = JSON.parse(localStorage.getItem("Tarefas") || '[]')

console.log('Tarefas',armazenarTarefas)

const armazenarTarefaConcluida = JSON.parse(localStorage.getItem("Concluidos") || '[]')

console.log('Concluidos',armazenarTarefaConcluida)

const elementoPrincipal = document.querySelector("main")

if(elementoPrincipal && armazenarTarefas.length > 0){
    
    for(let indice = 0; indice < armazenarTarefas.length; indice++){
        const container = document.createElement('div')
        container.className = 'container'

        elementoPrincipal.appendChild(container)

        const elementoCard = document.createElement('div')
        elementoCard.className = 'card'
        elementoCard.id = 'Tarefa'
        elementoCard.style.width = '18rem'
        elementoCard.setAttribute('data-card-id', `${indice}`)
        elementoCard.style.marginTop = '20px'

        container.appendChild(elementoCard)

        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'

        elementoCard.appendChild(cardBody)

        const h5 = document.createElement('h5')
        h5.className = ('card-title')
        h5.textContent = `${armazenarTarefas[indice]}`

        cardBody.appendChild(h5)

        const button = document.createElement('button')
        button.className = 'btn btn-success'
        button.onclick = 'concluir()'
        button.textContent = 'Concluir Tarefa'
        button.style.marginRight = '5px'
        button.id = `BotaoConcluir${indice}`
        button.name = `BotaoConcluir${indice}`

        cardBody.append(button)

        const button2 = document.createElement('button')
        button2.className = 'btn btn-danger'
        button2.onclick = 'excluir()'
        button2.textContent = 'Excluir Tarefa'
        button2.id = `BotaoExcluir${indice}`
        button2.name = `BotaoExcluir${indice}`

        cardBody.append(button2)

        function excluir(){

            const botaoExcluir = document.getElementById(`BotaoExcluir${indice}`)

            const tarefaRemovida = armazenarTarefas.splice(indice,1)

            localStorage.setItem("Tarefas",JSON.stringify(armazenarTarefas))
            
            location.reload()
        }

        const botaoExcluir = document.getElementById(`BotaoExcluir${indice}`)

        botaoExcluir.addEventListener('click',excluir)

        function concluir(){

            const botaoConcluir = document.getElementById(`BotaoConcluir${indice}`)

            const tarefaConcluida = armazenarTarefas.splice(indice,1)[0]

            armazenarTarefaConcluida.push(tarefaConcluida)

            localStorage.setItem("Tarefas",JSON.stringify(armazenarTarefas))

            localStorage.setItem("Concluidos",JSON.stringify(armazenarTarefaConcluida))

            location.reload()

        }

        const botaoConcluir = document.getElementById(`BotaoConcluir${indice}`)

        botaoConcluir.addEventListener('click',concluir)

    }
}
