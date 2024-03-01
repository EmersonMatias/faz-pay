export function formatPriceBR(value: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const valueFormated = formatter.format(value)

    return valueFormated
}