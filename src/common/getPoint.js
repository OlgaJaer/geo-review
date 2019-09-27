import { placemarksCoords, myStorage } from '../index.js';
import { makePosition } from './makePosition.js';

export function getPoint(e) {
    let coords = e.get('coords');
    
    let myGeocoder = ymaps.geocode(coords);
    
    return (
        myGeocoder.then((res) => {
            let position = e.get('domEvent').get('position');
            
            let obj = res.geoObjects.get(0);
        
            let point = {
                address: `${obj.properties.get('text')}`,
                coords: coords,
                position: makePosition(position)      
            };

            myStorage.data = JSON.stringify(point);
            placemarksCoords.items.push(point.address);
       
            return point;
        })

    )
}
