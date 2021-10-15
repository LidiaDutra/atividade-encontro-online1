console.log("lista de peças")

let listapecas = ["amortecedor","carburador"]

if(listapecas.lenght<10){
    console.log("É possível adicionar mais peças, numero maximo ainda não atingido")
}else{
    console.log("Numero de peças maximo atingido! Para continuar o cadastro reveja a lista!")
}

console.log("Cadastro individual de peças")

let nomepeca = "Amortecedor"

if(nomepeca.length >3){
    console.log("nome válido, prossiga com o cadastro!")
}else{
    console.log("Nome de peça invalido, não possui numero minimo de caracteres.")
}

let pesopeca = 150

if(pesopeca >100){
    console.log("Peça cadastrada com sucesso!")
}else{
    console.log("Peça não pode ser cadastrada, peso invalido")
}

