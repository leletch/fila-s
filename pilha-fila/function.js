//criarFila(size)
//
//removerItem()
//

export function createFila(size = 10){
    return [...new Array(size)]
}

export function addItem(fila, item){
    if(fila.includes(undefined)){
        const index = fila.findIndex(element => element === undefined)
        fila[index] = item
        console.log(`"[${item}]" Foi inserido na fila, na posição -> "[${index}]"`)
        console.log(fila)
        return
    }
    
    console.error("Não foi possível adicionar item, fila está cheia")
    return
}


export function removeItem(item){
    if(item[0] !== undefined){
        let primeiro = item[0]
       for(let i = 1; i < item.length; i++){
            item[i-1] = item[i]
        }
        item[item.length - 1] = undefined
        return
   }
    console.error("A fila está vazia")
}


//EXPLICADO COM COMENTARIOS:

// Define uma função para criar uma fila com um tamanho especificado (padrão é 10)
export function createFila(size = 10){
    // Retorna uma matriz com 'size' elementos, todos undefined
    return [...new Array(size)]
}

// Define uma função para adicionar um item a uma fila existente
export function addItemFila(fila, item){
    // Verifica se a fila ainda tem espaço vazio (undefined)
    if(fila.includes(undefined)){
        // Encontra o índice do primeiro elemento undefined na fila
        const index = fila.findIndex(element => element === undefined)
        // Insere o novo item na posição encontrada
        fila[index] = item
        // Exibe uma mensagem indicando que o item foi inserido e a posição
        console.log(`"[${item}]" Foi inserido na fila, na posição -> "[${index}]"`)
        // Exibe a fila atualizada no console
        console.log(fila)
        return // Retorna após a inserção do item
    }
    
    // Emite um erro se a fila estiver cheia
    console.error("Não foi possível adicionar item, fila está cheia")
    return // Retorna após o erro
}

// Define uma função para remover o primeiro item de uma fila
export function removeItem(item){
    // Verifica se a fila não está vazia (o primeiro elemento não é undefined)
    if(item[0] !== undefined){
        // Armazena o primeiro elemento da fila
        let primeiro = item[0]
        // Move todos os elementos uma posição para a esquerda na fila
        for(let i = 1; i < item.length; i++){
            item[i-1] = item[i]
        }
        // Define o último elemento como undefined (removendo o último elemento original)
        item[item.length - 1] = undefined
        return // Retorna após a remoção do item
   }
    // Emite um erro se a fila estiver vazia
    console.error("A fila está vazia")
}

//criarFila(size)

//

//removerItem()

//



export function createQueue(size = 10){

    return [...new Array(size)]

}



export function addItemQueue(queue, item){

    if(queue.includes(undefined)){

        const index = queue.findIndex(element => element === undefined)

        queue[index] = item

        console.log(`"[${item}]" Foi inserido na fila, na posição -> "[${index}]"`)

        console.log(queue)

        return

    }

    

    console.error("Não foi possível adicionar item, fila está cheia")

    return

}



// export function removeItemQueue(queue){

//      if(queue[0] !== undefined){

//         queue[0] = undefined

//         for(let i = 1; i < queue.length; i++){

//              queue[i-1] = queue[i]

//          }

//          queue[queue.length - 1] = undefined

//          return

//     }

//      console.error("A fila está vazia")

//  }



export function removeItemQueue(queue){

    if(queue[0] !== undefined){

        let primeiro = queue[0]

       for(let i = 1; i < queue.length; i++){

            queue[i-1] = queue[i]

        }

        queue[queue.length - 1] = undefined

        return

   }

    console.error("A fila está vazia")

           }

                  1-//verificar se a fila está vazia

export function estaVazia(fila){
If (fila[0]===undefined){
console.log(“está vazia”)
return 
}


2-//aumentar o tamanho da fila 
Não sei

3-//diminuir o tamanho da fila 
Não sei

4-//verificar o tamanho da fila 
 export function verificarTamanho(fila){
return fila.lenght 
}


5-// limpar a fila
export function limparFila(fila){
Fila.forEach (item =>(item=undefined))
}

6-// verificar o primeiro elemento da fila 
export function primeiroElemento (fila){
         filaVazia(fila);
    return fila[0]
}


7-// verificar o último elemento da fila

export function verificarUltimo(fila) {
    filaVazia(fila);
    return
 fila[fila.indexOf(undefined) - 1];
}

8- //verificar se um elemento está na fila

export function elementoFila(elemento,fila){
return fila.includes(elementos)
}

9-//verificar a posição de um elemento na fila
export function posicaoElemento (fila,elemento ){
If (fila.indexOf (elemento )=== -1){
console.log(“fila não possui esse elemento ”)
return 
}
return fila.indexOf(elemento )
}

10-//verificar se a fila está cheia

export function filaCheia(fila){
If (fila[fila.lenght-1]!=undefined){
console.log(“fila cheia”)
return 
}
}


    TAMANHO

const fila = ["musical", "musica2", undefined, undefined];
const resultado = verTamanhoFila(fila);
console.log(resultado);
