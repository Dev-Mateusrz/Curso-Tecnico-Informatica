function calcularSalario(nome, sexo, salario, escolaridade) {

    switch (escolaridade) {
        case "pos-graduacao":
            salario *= 1.06;
            console.log("Seu nome é:", nome)
            console.log("Seu sexo é:", sexo)
            console.log("Sua escolaridade é:", escolaridade)
            console.log("Seu salário será:", salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            break;

        case "mestrado":
            salario *= 1.11;
            console.log("Seu nome é:", nome)
            console.log("Seu sexo é:", sexo)
            console.log("Sua escolaridade é:", escolaridade)
            console.log("Seu salario será:", salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            break;

        case "doutorado":
            salario *= 1.20;
            console.log("Seu nome é:", nome)
            console.log("Seu sexo é:", sexo)
            console.log("Sua escolaridade é:", escolaridade)
            console.log("Seu salario será:", salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            break;

        case "phd":
            salario *= 1.30;
            console.log("Seu nome é:", nome)
            console.log("Seu sexo é:", sexo)
            console.log("Sua escolaridade é:", escolaridade)
            console.log("Seu salario será:", salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            break;
            default:
                console.log("Seu nível de escolaridade não está de acordo com a vaga! [ERROR]")
    }
    
}
calcularSalario("Camila", "Feminino", 3300, "mestrado")