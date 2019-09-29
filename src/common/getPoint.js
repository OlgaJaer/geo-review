//import { placemarksCoords, myStorage } from '../index.js';
import { makePosition } from './makePosition.js';

export function getPoint(e) {
    const reviewBlock = document.querySelector('#review-block');
    let coords = e.get('coords'); 
    let myGeocoder = ymaps.geocode(coords);

    reviewBlock.setAttribute('data-coord', '');
    reviewBlock.setAttribute('data-address', '');
    reviewBlock.setAttribute('data-position', '');

    return (
        myGeocoder.then((res) => {
            let position = e.get('domEvent').get('position');
            let obj = res.geoObjects.get(0);

            let point = {
                address: `${obj.properties.get('text')}`,
                coords: coords,
                position: makePosition(position) 
            };
       
            return point;
        })
    )
}
