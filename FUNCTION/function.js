let number = Number(prompt('Digite um número'))

 alert (formatNumber(number))


function formatNumber(number){
    return Intl.NumberFormat('en', {
        notation: 'compact',
        minimumFractionDigits: '0',
    }).format(number);
}

