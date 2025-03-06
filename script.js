let urlBase = 'https://api.openweathermap.org/data/2.5/forecast'
let api_key = '1f35980efc1628b558f851d509225646';
let difKelvin = 273.15;


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fetchDatosClima(ciudad);
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.city.name;
    const paisNombre = data.city.country;
    const temperatura = data.list[0].main.temp;
    const temperaturaMaxima = data.list[0].main.temp_max;
    const temperaturaMinima = data.list[0].main.temp_min;
    const humedad = data.list[0].main.humidity;
    const description = data.list[0].weather[0].description;
    const icono = data.list[0].weather[0].icon;
    
    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`;
    
    const temperaturaMaximaInfo = document.createElement('p');
    temperaturaMaximaInfo.textContent = `La temperatura maxima es: ${Math.floor(temperaturaMaxima-difKelvin)}°C`;

    const temperaturaMinimaInfo = document.createElement('p');
    temperaturaMinimaInfo.textContent = `La temperatura Minima es: ${Math.floor(temperaturaMinima-difKelvin)}°C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedad}%`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}.png`;

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `La descripcion meteorologica es: ${description}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(temperaturaMaximaInfo);
    divDatosClima.appendChild(temperaturaMinimaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descriptionInfo);
}
