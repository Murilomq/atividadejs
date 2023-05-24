

var botao = document.getElementById("botao")
botao.addEventListener("click", start)

// 1 quest

function maior_menor(vetor){

    var maior = vetor[0]
    var menor = vetor[0]
    

    for(i = 1; i <= vetor.length; i++){

        if(maior < vetor[i]){
            maior = vetor[i]
        }

        if(menor > vetor[i]){
            menor = vetor[i]
        }
    }

    confirm("maior: "+maior+" | menor: "+menor)
}


// 2 quest

function vogal(letra){
    letra  = letra.toUpperCase()
    if(letra != 'A' && letra != 'E' && letra != 'I' && letra != 'O' && letra != 'U'){
        confirm(0+" | A letra é uma consoante")
    } else{
        confirm(1+" | A letra é uma vogal")
    }
}


// 3 quest

function limites(li, ls){
    var li = parseInt(li)
    var ls = parseInt(ls)
    li = li + 1
    var somatorio = 0
    var numeros = ""

    for(li; li<ls; li++){
        numeros += (li+", ")
        somatorio += li
    }

    confirm("Intervalo: "+numeros+"\nSomatório: "+somatorio)
}

// 4 quest

function order(a, b, c){

    a = parseInt(a)
    b = parseInt(b)
    c = parseInt(c)

    if(c < b){
        [c, b] = [b, c] 
    }

    if(c < a){
        [c, a] = [a,c]
    }

    if(b < a){
        [b, a] = [a, b]
    }

    confirm("Ordem crescente: "+a+", "+b+", "+c)

}

// 5 quest 

function positivo_negativo(x){

    var x = parseInt(x)
    if(x<0){
        return false
    } else{
        return true
    }
}


// 6 quest

function impar_par(x){
    
    var x = parseInt(x)
    if(x % 2 == 0){
        return true
    } else{
        return false
    }
}


function start(){

    do{

        opcao = prompt('Informe o número da questão que deseja responder: ')
        
        vetor = []
        vetor_questao4 = []
        
        if(opcao == 1){
            for(var i = 1; i <= 6; i++){
                vetor.push(prompt("Informe o "+i+"° número: "))
            }
            
            maior_menor(vetor)
        }
        
        if(opcao == 2){
            var letra = prompt("Informe uma letra: ")
            vogal(letra)
        }
        
        if(opcao == 3){
            var li = prompt("Informe o limite inferior: ")
            var ls = prompt("Informe o limite superior: ")
            limites(li, ls)
        }
        
        if(opcao == 4){
            for(var i = 1; i <= 3; i++){
                vetor_questao4.push(prompt("Informe o "+i+"° número: "))
            }
            order(vetor_questao4[0], vetor_questao4[1], vetor_questao4[2])
        }
        
        
        if(opcao == 5){
            var numero = prompt("Informe um número: ")
            var resultado = positivo_negativo(numero)
            confirm("O número é positivo? "+resultado)
            
        }
        
        if(opcao == 6){
            
            var numero = prompt("Informe um número: ")
            var resultado = impar_par(numero)
            confirm("O número é par? "+resultado)
        }
        
        resposta = confirm("Deseja continuar?")
        
    }while(resposta == true)
        
}