const hiddenElements = document.querySelectorAll('.hidden');

const observerCallback = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            console.log('Element is visible:', entry.target);
        } else {
            entry.target.classList.remove('show')
            console.log('Element is not visible:', entry.target);
        }
    })
}

const OBSERVER = new IntersectionObserver(observerCallback);

hiddenElements.forEach(el => OBSERVER.observe(el));

console.log('Intersection Observer initialized for hidden elements.');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed. Intersection Observer is ready.');
});
document.addEventListener('load', () => {
    console.log('All resources finished loading. Intersection Observer is ready.');
}, false);
window.addEventListener('load', () => {
    console.log('Window loaded. Intersection Observer is ready.');
}, false);
window.addEventListener('resize', () => {
    console.log('Window resized. Intersection Observer is ready.');
}, false);
window.addEventListener('scroll', () => {
    console.log('Window scrolled. Intersection Observer is ready.');
}, false);