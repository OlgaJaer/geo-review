import makeFormTemplate from '../templates/makeFormTemplate.hbs';
import { myStorage, placemarksCoords } from '../index.js';
import { clusterer } from '../events/getMap.js';
import { addPlacemark } from '../events/addPlacemark.js';

export function makeReview(point) {
    const name = document.querySelector('#name');
    const place = document.querySelector('#place');
    const textReview = document.querySelector('#textReview');
    const reviewBlock = document.querySelector('#review-block');

  
    let newReview = {
        name: name.value,
        place: place.value,
        date: new Date().toLocaleString(),
        textReview: textReview.value
    }

    if (name.value && place.value && textReview.value) {                     
        let flag = false;
        if (myStorage.items.length) {
            for (const item of myStorage.items) {                       
                if (item.address === point.address) {
                    item.reviews.push(newReview);
                    point.reviews = item.reviews;
                    flag = true;
                    break;
                }            
            }
        }
            
        if (flag === false) {
            point.reviews = [];
            point.reviews.push(newReview);
            myStorage.items.push(point);
        }                            
    } else {
        alert('Заполните все поля, чтобы добавить отзыв')
    } 

    const htmlReview = makeFormTemplate(point);
    
    reviewBlock.innerHTML = htmlReview;  
    placemarksCoords.items.push(point.coords);

    let placemark = addPlacemark(point, newReview);

    if (placemark) {
        clusterer.add(placemark); 
    }

    localStorage.data = JSON.stringify({
        items: myStorage.items
    });

}