export function makePosition(position) {
    let x = position[0];
    let y = position[1];
    let displayWidth = document.documentElement.clientWidth;
    
    if (y < 530) {
        y = 530;
    } 

    if (x < 200) {
        x = 200;
    } else if ((displayWidth - x) < 200) {
        x = displayWidth - 200;
    } else {
        x;
    }
   
    return [x, y];
}