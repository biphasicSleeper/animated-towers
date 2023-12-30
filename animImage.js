var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var tower1 = document.getElementsByClassName('tower')[0];
var tower2 = document.getElementsByClassName('tower')[1];
var tower3 = document.getElementsByClassName('tower')[2];
var tower4 = document.getElementsByClassName('tower')[3];

var light1 = document.getElementsByClassName('light')[0];
var light2 = document.getElementsByClassName('light')[1];


// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop / scrollArea || 0;
  


  tower1.style.top = scrollPercent*window.innerHeight/2 + 'px';
  tower2.style.top = scrollPercent*window.innerHeight/4 + 'px';
  tower3.style.top = scrollPercent*window.innerHeight/6 + 'px';
  tower4.style.top = scrollPercent*window.innerHeight/8 + 'px';
});