import { showForm } from '../common/showForm.js';
import { makePosition } from '../common/makePosition.js';

export function clickBalloonLink() {
    document.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('balloon__link')) {
            e.preventDefault();
            
            let coords = target.dataset.coord.split(',');
            let myGeocoder = ymaps.geocode(coords);
            
            myGeocoder.then(
                function (res) {
                    let position = [(e.clientX - 100), (e.clientY + 100)];
                    let obj = res.geoObjects.get(0);                       
                    let point = {
                        address: `${obj.properties.get('text')}`,
                        coords: coords,
                        position: makePosition(position)
                    }
                    return point;
                }
            )
                .then(point => {
                    showForm(point);
                })
        }
    })
}