export function closeForm() {
    document.addEventListener('click', (e) => {
        const reviewBlock = document.querySelector('#review-block');
        let target = e.target;

        if (target.classList.contains('header__close')) {
            reviewBlock.style.display = 'none';           
        }
    })
}