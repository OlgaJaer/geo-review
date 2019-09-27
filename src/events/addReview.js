import { makeReview } from '../common/makeReview.js';
import { myStorage } from '../index.js';

export function addReview() {
    document.addEventListener('click', (e) => {
        let target = e.target;
        
        if (target.classList.contains('form__btn')) {
            e.preventDefault();

            let point = JSON.parse(myStorage.data ||'{}');

            makeReview(point);
        }
    })
}