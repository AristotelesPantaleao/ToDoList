const armazenarTarefas = JSON.parse(localStorage.getItem("Tarefas") || '[]')

console.log('Tarefas', armazenarTarefas)

function enviar() {

    const nomeTarefa = document.getElementById('nomeTarefa')

    const tarefaDigitada = nomeTarefa.value

    console.log(tarefaDigitada)

    if (tarefaDigitada === '') {
        alert('Tarefa inválida!')
        return
    } else {
        armazenarTarefas.push(tarefaDigitada)

        localStorage.setItem("Tarefas", JSON.stringify(armazenarTarefas))

        nomeTarefa.value = ''

        alert(`Tarefa ${tarefaDigitada} adicionada!`)
    }

}

const botao = document.getElementById('botaoEnviar')

botao.addEventListener('click', enviar)