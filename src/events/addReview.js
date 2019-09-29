import { makeReview } from '../common/makeReview.js';

export function addReview() {
    document.addEventListener('click', (e) => {
        let target = e.target;
        
        if (target.classList.contains('form__btn')) {
            e.preventDefault();

            const reviewBlock = document.querySelector('#review-block');

            let point = {
                address: reviewBlock.dataset.address,
                coords: reviewBlock.dataset.coord.split(','),
                position: reviewBlock.dataset.position.split(',')
            }; 

            makeReview(point);
        }
    })
}