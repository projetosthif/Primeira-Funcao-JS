function soma(a,b){
    return a+b
}

function subtr(a,b){
    return a-b
}

function div(a,b){
    return a/b
}

function multi(a,b){
    return a*b
}

function decisao(pri,seg,resp){
    if(resp == 1){
        resultado = soma(pri,seg)
        document.write("<p>A soma é: " + resultado)
    }

    if(resp == 2){
        resultado = subtr(pri,seg)
        document.write("<p>A subtração é: " + resultado)
    }

    if(resp == 3){ 
        resultado = div(pri,seg)
        document.write("<p>A divisão é: " + resultado)
    }

    if(resp == 4){
        resultado = multi(pri,seg)
        document.write("<p>O produto é: " + resultado)
    }

}