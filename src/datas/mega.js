function gerarMega(qtde) {
    let ns = []
    
    for (let i = 0; i <= qtde; i++) {
      let n = parseInt(Math.random() * 60) + 1
        if(!ns.includes(n)){
            ns.push(n);
        } else {
            
        }
       
    }

    return ns

}

console.log(gerarMega(50))