import 'normalize.css';
import './styles/index.css';

//events
import { getMap } from './events/getMap.js';
import { closeForm } from './events/closeForm.js';
import { addReview } from './events/addReview.js';
import { clickBalloonLink } from './events/clickBalloonLink.js'

export let myStorage = {
    items: []
};

if (localStorage.data) {
    myStorage = JSON.parse(localStorage.data);
}

export let placemarksCoords = {
    items: []
};
     
getMap();
closeForm();
addReview();
clickBalloonLink();