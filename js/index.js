let profesoresCategoría = (profesores, categoría) => {
    let prof = []
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].categoria == categoría) {
            prof.push(profesores[i]);
        }
    }
    return prof;
}

let profesores = [
    {categoria: 1, nombre: 'Javier', sexo: 'M'},
    {categoria: 2, nombre: 'Ana', sexo: 'F'},
    {categoria: 3, nombre: 'Pedro', sexo: 'M'},
    {categoria: 5, nombre: 'Luis', sexo: 'M'},
    {categoria: 4, nombre: 'Lucia', sexo: 'F'},
    {categoria: 2, nombre: 'Carlos', sexo: 'M'},
]

let salida = document.getElementById("salida");
salida.innerHTML = "Instructores: <br>" + JSON.stringify(profesoresCategoría(profesores, 1));
salida.innerHTML += "<br> <br> Asistentes: <br>" + JSON.stringify(profesoresCategoría(profesores, 2));
salida.innerHTML += "<br> <br> Agregados: <br>" + JSON.stringify(profesoresCategoría(profesores, 3));
salida.innerHTML += "<br> <br> Asociados: <br>" + JSON.stringify(profesoresCategoría(profesores, 4));
salida.innerHTML += "<br> <br> Titulares: <br>" + JSON.stringify(profesoresCategoría(profesores, 5));