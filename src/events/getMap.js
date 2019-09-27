import makeFormTemplate from '../templates/makeFormTemplate.hbs';
import { getPoint }  from '../common/getPoint';
import { showForm } from '../common/showForm';
import { getPlacemarks } from '../common/getPlacemarks';
import { myStorage } from '../index.js';

export let clusterer;


export function getMap() {
    ymaps.ready(init);
        let myMap;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [52.41, 13.07],
                zoom: 14,
                controls: ['zoomControl'],
                behaviors: ['drag']
            });
        
            let customItemContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div class=balloon__content><h2 class=ballon__header>{{ properties.balloonContentHeader|raw }}</h2>' +
                '<a href="#" class=balloon__link data-coord="{{ properties.balloonContentCoords|raw }}">{{ properties.balloonContentLink|raw }}</a>' +
                '<div class=balloon__body>{{ properties.balloonContentBody|raw }}</div>' +
                '<div class=balloon__footer>{{ properties.balloonContentFooter|raw }}</div></div>'
            );

            clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedVioletClusterIcons',
            clusterDisableClickZoom: true,
            openBalloonOnClick: true,
            clusterBalloonContentLayout: 'cluster#balloonCarousel',
            clusterBalloonItemContentLayout: customItemContentLayout,
            clusterBalloonPanelMaxMapArea: 0,
            clusterBalloonContentLayoutWidth: 200,
            clusterBalloonContentLayoutHeight: 160,
            clusterBalloonPagerSize: 8
            });

            myMap.geoObjects.add(clusterer);

            if (myStorage.items.length) {
                getPlacemarks();
            }

            myMap.events.add('click', (e) => {
                (async () => {               
                        let point = await getPoint(e);
                        
                        point = await showForm(point);          
                })();      
            }) 
        }
} 