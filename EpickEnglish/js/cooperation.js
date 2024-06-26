const publishers = document.querySelector('.publishers');
const pub_tooltip = document.querySelector('.publishers-tooltip');

const education = document.querySelector('.education');
const ed_tooltip = document.querySelector('.education-tooltip');

publishers.onmouseenter = () => {
    pub_tooltip.classList.add('active');
}
publishers.onmouseleave = () => {
    pub_tooltip.classList.remove('active');
}

education.onmouseenter = () => {
    ed_tooltip.classList.add('active');
}
education.onmouseleave = () => {
    ed_tooltip.classList.remove('active');
}