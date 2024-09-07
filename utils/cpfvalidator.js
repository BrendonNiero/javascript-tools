const p1 = "170.785.846-27"

function validaCPF(cpf){
    let cpfClean = cpf.replace(/\D+/g, "");
    let initialNums = Array.from(cpfClean);
    initialNums.splice(9, 2);

    function getSum(cpfParcial){
        const cpfArr = cpfParcial;
        let regressivo = cpfArr.length + 1;
        const total = cpfArr.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    let primeiroDigito = getSum(initialNums);
    initialNums.push(primeiroDigito);
    let segundoDigito = getSum(initialNums);
    let checkCpf = `${initialNums.join("")}${segundoDigito}`; 
    
    if(cpfClean == checkCpf){
        return console.log("Seu CPF é válido: ", checkCpf);
    } else {
        return console.log("CPF incorreto!")
    }
}

validaCPF(p1);
