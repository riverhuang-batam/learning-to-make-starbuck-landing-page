function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(anything){
    document.querySelector('.circle').style.background = anything;
}
function toggleMenu(){
    document.querySelector('.toggle').classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
}