export function calcularPromedio(tasa1, tasa2, tasa3) {
    let promedio = (tasa1 + tasa2 + tasa3) / 3;
    return promedio;
}

export function inversionAnual(capInicial, tasaPromedio) {
    let montoFinal = capInicial * (1 + (tasaPromedio / 100));
    return montoFinal; 
}