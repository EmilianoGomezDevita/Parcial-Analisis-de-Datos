export function calcularPromedio(tasa1, tasa2, tasa3) {
    let promedio = (tasa1 + tasa2 + tasa3) / 3;
    return promedio;
}


export function calcularCapitalFinal(capital, tasaAnual, periodos) {
    const tasaPeriodo = tasaAnual / 100 / periodos;
    let monto = capital;

    for (let i = 0; i < periodos; i++) {
        monto = monto + monto * tasaPeriodo;
    }

    return monto;
}