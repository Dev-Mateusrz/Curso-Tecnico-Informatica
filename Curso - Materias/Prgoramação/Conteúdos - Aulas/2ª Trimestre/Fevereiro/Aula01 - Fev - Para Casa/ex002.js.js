function calculoHorasTrabalhadas(nome_funcionario, horas_trabalhadas, moeda) {
  valorDolarCanadense = 4.0; // DolarCanadense em Real | 19-02-2025 
  valorDolar = 5.7; // Dolar em Real | 19-02-2025
  valorLibra = 7.18; // Libra em Real | 19-02-2025
  valorEuro = 5.94; // Euro em Real | 19-02-2025
  valor = 0;

  switch (moeda) {
    case "dolarcanadense":
      valorReal = horas_trabalhadas * valorDolarCanadense
      console.log(`Olá, ${nome_funcionario}! Seja bem vindo(a) - Veja as informações abaixo:`)
      console.log(`Quantidade de horas trabalhadas: ${horas_trabalhadas} horas.`)
      console.log(`Total à receber em Dolar-Canadense: ${horas_trabalhadas.toLocaleString('pt-BR', { style: 'currency', currency: 'CAD' })}`)
      console.log(`Total à receber em Real: ${valorReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
      break;

    case "dolar":
      valorReal = horas_trabalhadas * valorDolar
      console.log(`Olá, ${nome_funcionario}! Seja bem vindo(a) - Veja as informações abaixo:`)
      console.log(`Quantidade de horas trabalhadas: ${horas_trabalhadas} horas.`)
      console.log(`Total à receber em Dolar: ${horas_trabalhadas.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })}`)
      console.log(`Total à receber em Real: ${valorReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
      break;

    case "libra":
      valorReal = horas_trabalhadas * valorLibra
      console.log(`Olá, ${nome_funcionario}! Seja bem vindo(a) - Veja as informações abaixo:`)
      console.log(`Quantidade de horas trabalhadas: ${horas_trabalhadas} horas.`)
      console.log(`Total à receber em Libra: ${horas_trabalhadas.toLocaleString('pt-BR', { style: 'currency', currency: 'GBP' })}`)
      console.log(`Total à receber em Real: ${valorReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
      break;

    case "euro":
      valorReal = horas_trabalhadas * valorEuro
      console.log(`Olá, ${nome_funcionario}! Seja bem vindo(a) - Veja as informações abaixo:`)
      console.log(`Quantidade de horas trabalhadas: ${horas_trabalhadas} horas.`)
      console.log(`Total à receber em Euro: ${horas_trabalhadas.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' })}`)
      console.log(`Total à receber em Real: ${valorReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
      break;

    default:
      console.log('[ERROR] Verifique os dados e tente novamente!')
      console.log('[ERROR] Ao escolher o nome da moeda, coloque tudo em MINÚSCULAS! Ex: euro, libra, dolar...')

  }
}

calculoHorasTrabalhadas('Mateus', 16, 'EURO')