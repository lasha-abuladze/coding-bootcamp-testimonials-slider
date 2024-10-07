`use strict`;




const heroImg = document.querySelectorAll(`.hero-img`);
const feedback = document.querySelectorAll(`.feedback`);

const nextBtn = document.querySelector(`.next-btn`);
const prevBtn = document.querySelector(`.prev-btn`);




heroImg.forEach((el, i) => {
    el.style.transform = `translateX(${i * 100}%)`;
})


feedback.forEach((el, i) => {
    el.style.transform = `translateX(${i * 100}%)`;
})



nextBtn.addEventListener(`click`, () => {
    heroImg.forEach((el, i) => {
        el.style.transform = `translateX(${(i * 100) - 100}%)`;
    });

    feedback.forEach((el, i) => {
        el.style.transform = `translateX(${(i * 100) - 100}%)`;
    })
})



prevBtn.addEventListener(`click`, () => {
    heroImg.forEach((el, i) => {
        el.style.transform = `translateX(${(i * 100)}%)`;
    });
    feedback.forEach((el, i) => {
        el.style.transform = `translateX(${i * 100}%)`;
    })
})

