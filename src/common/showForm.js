import makeFormTemplate from '../templates/makeFormTemplate.hbs';
import { myStorage } from '../index.js';

export function showForm(point) {
    
    const reviewBlock = document.querySelector('#review-block');
    reviewBlock.setAttribute('data-coord', 'point.coords');

    let reviewsArr = [];

    for (const item of myStorage.items) {                       
        if (item.address === point.address) {
            reviewsArr.push(...item.reviews);
        }
    }

    point.reviews = reviewsArr;

    reviewBlock.style.left = point.position[0] + 'px';
    reviewBlock.style.top = point.position[1] + 'px';             
    reviewBlock.style.display = 'block';
    
    const htmlReview = makeFormTemplate(point);
    
    reviewBlock.innerHTML = htmlReview;
    
    return point;   
}