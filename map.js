let midPoint = {
    lat: (Number(data[0].lat) + Number(data[data.length - 1].lat)) /2,
    lng: (Number(data[0].lng) + Number(data[data.length - 1].lng)) /2 
}

const zoom = 15

const position = [midPoint.lat, midPoint.lng]
const map = L.map('map').setView(position, zoom);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let pointList = data.map( dataPoint =>  new L.LatLng(dataPoint.lat, dataPoint.lng))

let markers = pointList.map( point => new L.marker(point) )

let route = new L.Polyline(pointList, {
    color: 'red',
    weight: 8,
    opacity: 0.7,
    smoothFactor: 1
})

let visible

window.addEventListener('load', toggleRoute)

document.querySelector('#toggle').addEventListener('click', toggleRoute)

function toggleRoute(e){
    if (e) e.preventDefault()
    if(visible) {
        console.log('visible')
        map.removeLayer(route)
        markers.forEach( marker => map.removeLayer(marker))
        visible = false
    }
    else {
        console.log('not visible')
        route = new L.Polyline(pointList, {
            color: 'red',
            weight: 8,
            opacity: 0.7,
            smoothFactor: 1
        })
        route.addTo(map).snakeIn()
        markers.forEach( marker => map.addLayer(marker))
        visible = true;
    }
}



/*
let midPoint = {
    lat: (Number(data[0].lat) + Number(data[data.length - 1].lat)) /2,
    lng: (Number(data[0].lng) + Number(data[data.length - 1].lng)) /2 
}

*/

let SecondPointList = SecondData.map( SecondDataPoint => console.log(SecondDataPoint))  /*new L.LatLng(SecondDataPoint.lat, SecondDataPoint.lng))*/

let SecondMarkers = SecondPointList.map( point => new L.marker(point) )

let SecondRoute = new L.Polyline(pointList, {
    color: 'red',
    weight: 8,
    opacity: 0.7,
    smoothFactor: 1
})

let SecondVisible

window.addEventListener('load', SecondToggleRoute)

document.querySelector('#SecondToggle').addEventListener('click', SecondToggleRoute)

function SecondToggleRoute(e){
    if (e) e.preventDefault()
    if(visible) {
        console.log('visible')
        map.removeLayer(SecondRoute)
        markers.forEach( marker => map.removeLayer(marker))
        SecondVisible = false
    }
    else {
        console.log('not visible')
        SecondRoute = new L.Polyline(SecondPointList, {
            color: 'red',
            weight: 8,
            opacity: 0.7,
            smoothFactor: 1
        })
        SecondRoute.addTo(map).snakeIn()
        SecondMarkers.forEach( marker => map.addLayer(marker))
        SecondVisible = true;
    }
}
