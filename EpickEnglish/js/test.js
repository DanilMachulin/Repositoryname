mask_test = document.querySelector(".mask_test");
mask_test_1 = document.querySelector(".mask_test-1");
mask_test_2 = document.querySelector(".mask_test-2");
mask_test_3 = document.querySelector(".mask_test-3");
mask_test_4 = document.querySelector(".mask_test-4");
mask_test_5 = document.querySelector(".mask_test-5");
mask_test_6 = document.querySelector(".mask_test-6");
mask_test_7 = document.querySelector(".mask_test-7");
mask_test_8 = document.querySelector(".mask_test-8");

more_test = document.querySelector(".more_test");
back_starters = document.querySelector(".back_starters");
route = document.querySelector(".route");
card_starters = document.querySelector('#starters_class');
course = document.querySelector(".courses-english");

front_starters = document.querySelector(".front_starters");
exit = document.querySelector(".back-exit");

function test(){
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  console.log(screenWidth)
  console.log(screenHeight)

  blockWidth = back_starters.offsetWidth;
  blockHeight = back_starters.offsetHeight;

  coord = back_starters.getBoundingClientRect();

  initialX = coord.left;
  initialY = coord.top;

  xCenter = (screenWidth / 2) - (blockWidth / 2);
  yCenter = (screenHeight / 2) - (blockHeight / 2);

  xFinal = xCenter - coord.left;
  yFinal = yCenter - coord.top;
  
  card_starters.style.transform = 'translate(' + xFinal + 'px' + ',' + yFinal + 'px' + ')';
}
front_starters.addEventListener("click", function () {
  test();
  front_starters.classList.add("active");
  back_starters.classList.add("active");
  route.classList.add("active");
  course.classList.add('active');
  body.classList.add('disable-scroll');
  back_starters.classList.add("scale");
  function mask(){
    mask_test.classList.add('active');
  }
  setTimeout(mask, 800)
});
exit.addEventListener("click", function () {
  route.classList.remove("active");
  course.classList.remove('active');
  body.classList.remove('disable-scroll');

  front_starters.classList.remove("active");
  back_starters.classList.remove("active");
  back_starters.classList.remove("scale");
  mask_test.classList.remove('active');

  front_a1.classList.remove("active");
  back_a1.classList.remove("active");
  back_a1.classList.remove("scale");
});
mask_test.addEventListener('click', function() {
  route.classList.remove("active");
  course.classList.remove('active');
  body.classList.remove('disable-scroll');

  front_starters.classList.remove("active");
  back_starters.classList.remove("active");
  back_starters.classList.remove("scale");
  mask_test.classList.remove('active');

  front_a1.classList.remove("active");
  back_a1.classList.remove("active");
  back_a1.classList.remove("scale");
})

course_a1 = document.querySelector(".courses-english");
front_a1 = document.querySelector(".front_a1");
back_a1 = document.querySelector(".back_a1");
exit_1 = document.querySelector(".back-exit_1");
route_a1 = document.querySelector(".route.a1");
card_a1 = document.querySelector('#a1_class');

function test_a1(){
  screenWidth_a1 = window.innerWidth;
  screenHeight_a1 = window.innerHeight;

  blockWidth_a1 = back_a1.offsetWidth;
  blockHeight_a1 = back_a1.offsetHeight;

  coord_a1 = back_a1.getBoundingClientRect();

  initialX_a1 = coord_a1.left;
  initialY_a1 = coord_a1.top;

  xCenter_a1 = (screenWidth_a1 / 2) - (blockWidth_a1 / 2);
  yCenter_a1 = (screenHeight_a1 / 2) - (blockHeight_a1 / 2);

  xFinal_a1 = xCenter_a1 - coord_a1.left;
  yFinal_a1 = yCenter_a1 - coord_a1.top;
  
  card_a1.style.transform = 'translate(' + xFinal_a1 + 'px' + ',' + yFinal_a1 + 'px' + ')';
}
front_a1.addEventListener("click", function () {
  test_a1();
  front_a1.classList.add("active");
  back_a1.classList.add("active");
  back_a1.classList.add("scale");
  route_a1.classList.add("active");
  course.classList.add('active');
  body.classList.add('disable-scroll');

  function mask_1(){
    mask_test_1.classList.add('active');
  }
  setTimeout(mask_1, 800)
});
exit_1.addEventListener("click", function () {
  route_a1.classList.remove("active");
  course.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_1.classList.remove('active');

  front_a1.classList.remove("active");
  back_a1.classList.remove("active");
  back_a1.classList.remove("scale");
});
mask_test_1.addEventListener('click', function() {
  route_a1.classList.remove("active");
  course.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_1.classList.remove('active');

  front_a1.classList.remove("active");
  back_a1.classList.remove("active");
  back_a1.classList.remove("scale");
})


front_a2 = document.querySelector(".front_a2");
back_a2 = document.querySelector(".back_a2");
exit_2 = document.querySelector(".back-exit_2");
route_a2 = document.querySelector(".route.a2");
card_a2 = document.querySelector('#a2_class');

function test_a2(){
  screenWidth_a2 = window.innerWidth;
  screenHeight_a2 = window.innerHeight;

  blockWidth_a2 = back_a2.offsetWidth;
  blockHeight_a2 = back_a2.offsetHeight;

  coord_a2 = back_a2.getBoundingClientRect();

  initialX_a2 = coord_a2.left;
  initialY_a2 = coord_a2.top;

  xCenter_a2 = (screenWidth_a2 / 2) - (blockWidth_a2 / 2);
  yCenter_a2 = (screenHeight_a2 / 2) - (blockHeight_a2 / 2);

  xFinal_a2 = xCenter_a2 - coord_a2.left;
  yFinal_a2 = yCenter_a2 - coord_a2.top;
  
  card_a2.style.transform = 'translate(' + xFinal_a2 + 'px' + ',' + yFinal_a2 + 'px' + ')';
}
front_a2.addEventListener("click", function () {
  test_a2();
  front_a2.classList.add("active");
  back_a2.classList.add("active");
  back_a2.classList.add("scale");
  route_a2.classList.add("active");
  course.classList.add('active');
  body.classList.add('disable-scroll');

  function mask_2(){
    mask_test_2.classList.add('active');
  }
  setTimeout(mask_2, 800)
});
exit_2.addEventListener("click", function () {
  route_a2.classList.remove("active");
  course.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_2.classList.remove('active');

  front_a2.classList.remove("active");
  back_a2.classList.remove("active");
  back_a2.classList.remove("scale");
});
mask_test_2.addEventListener('click', function() {
  route_a2.classList.remove("active");
  course.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_2.classList.remove('active');

  front_a2.classList.remove("active");
  back_a2.classList.remove("active");
  back_a2.classList.remove("scale");
})


front_a3 = document.querySelector(".front_b1");
back_a3 = document.querySelector(".back_b1");
exit_3 = document.querySelector(".back-exit_b1");
route_a3 = document.querySelector(".route.a3");
card_a3 = document.querySelector('#b1_class');

function test_a3(){
  screenWidth_a3 = window.innerWidth;
  screenHeight_a3 = window.innerHeight;

  blockWidth_a3 = back_a3.offsetWidth;
  blockHeight_a3 = back_a3.offsetHeight;

  coord_a3 = back_a3.getBoundingClientRect();

  initialX_a3 = coord_a3.left;
  initialY_a3 = coord_a3.top;

  xCenter_a3 = (screenWidth_a3 / 2) - (blockWidth_a3 / 2);
  yCenter_a3 = (screenHeight_a3 / 2) - (blockHeight_a3 / 2);

  xFinal_a3 = xCenter_a3 - coord_a3.left;
  yFinal_a3 = yCenter_a3 - coord_a3.top;
  
  card_a3.style.transform = 'translate(' + xFinal_a3 + 'px' + ',' + yFinal_a3 + 'px' + ')';
}
front_a3.addEventListener("click", function () {
  test_a3();
  front_a3.classList.add("active");
  back_a3.classList.add("active");
  back_a3.classList.add("scale");
  route_a3.classList.add("active");
  course.classList.add('active');
  body.classList.add('disable-scroll');

  function mask_3(){
    mask_test_3.classList.add('active');
  }
  setTimeout(mask_3, 800)
});
exit_3.addEventListener("click", function () {
  route_a3.classList.remove("active");
  course.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_3.classList.remove('active');

  front_a3.classList.remove("active");
  back_a3.classList.remove("active");
  back_a3.classList.remove("scale");
});
mask_test_3.addEventListener('click', function() {
  route_a3.classList.remove("active");
  course.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_3.classList.remove('active');

  front_a3.classList.remove("active");
  back_a3.classList.remove("active");
  back_a3.classList.remove("scale");
})


course_chine = document.querySelector(".courses-chinese");
front_child = document.querySelector(".front_child");
back_child = document.querySelector(".back_child");
exit_child = document.querySelector(".back-exit_child");
route_child = document.querySelector(".route.child");
card_child = document.querySelector('#child_class');

function test_child(){
  screenWidth_child = window.innerWidth;
  screenHeight_child = window.innerHeight;

  blockWidth_child = back_child.offsetWidth;
  blockHeight_child = back_child.offsetHeight;

  coord_child = back_child.getBoundingClientRect();

  initialX_child = coord_child.left;
  initialY_child = coord_child.top;

  xCenter_child = (screenWidth_child / 2) - (blockWidth_child / 2);
  yCenter_child = (screenHeight_child / 2) - (blockHeight_child / 2);

  xFinal_child = xCenter_child - coord_child.left;
  yFinal_child = yCenter_child - coord_child.top;
  
  card_child.style.transform = 'translate(' + xFinal_child + 'px' + ',' + yFinal_child + 'px' + ')';
}
front_child.addEventListener("click", function () {
  test_child();
  front_child.classList.add("active");
  back_child.classList.add("active");
  back_child.classList.add("scale");
  route_child.classList.add("active");
  course_chine.classList.add('active');
  body.classList.add('disable-scroll');

  function mask_4(){
    mask_test_4.classList.add('active');
  }
  setTimeout(mask_4, 800)
});
exit_child.addEventListener("click", function () {
  route_child.classList.remove("active");
  course_chine.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_4.classList.remove('active');

  front_child.classList.remove("active");
  back_child.classList.remove("active");
  back_child.classList.remove("scale");
});
mask_test_4.addEventListener('click', function() {
  route_child.classList.remove("active");
  course_chine.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_4.classList.remove('active');

  front_child.classList.remove("active");
  back_child.classList.remove("active");
  back_child.classList.remove("scale");
})


front_adult = document.querySelector(".front_adult");
back_adult = document.querySelector(".back_adult");
exit_adult = document.querySelector(".back-exit_adult");
route_adult = document.querySelector(".route.adult");
card_adult = document.querySelector('#adult_class');

function test_adult(){
  screenWidth_adult = window.innerWidth;
  screenHeight_adult = window.innerHeight;

  blockWidth_adult = back_adult.offsetWidth;
  blockHeight_adult = back_adult.offsetHeight;

  coord_adult = back_adult.getBoundingClientRect();

  initialX_adult = coord_adult.left;
  initialY_adult = coord_adult.top;

  xCenter_adult = (screenWidth_adult / 2) - (blockWidth_adult / 2);
  yCenter_adult = (screenHeight_adult / 2) - (blockHeight_adult / 2);

  xFinal_adult = xCenter_adult - coord_adult.left;
  yFinal_adult = yCenter_adult - coord_adult.top;
  
  card_adult.style.transform = 'translate(' + xFinal_adult + 'px' + ',' + yFinal_adult + 'px' + ')';
}
front_adult.addEventListener("click", function () {
  test_adult();
  front_adult.classList.add("active");
  back_adult.classList.add("active");
  back_adult.classList.add("scale");
  route_adult.classList.add("active");
  course_chine.classList.add('active');
  body.classList.add('disable-scroll');

  function mask_5(){
    mask_test_5.classList.add('active');
  }
  setTimeout(mask_5, 800)
});
exit_adult.addEventListener("click", function () {
  route_adult.classList.remove("active");
  course_chine.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_5.classList.remove('active');

  front_adult.classList.remove("active");
  back_adult.classList.remove("active");
  back_adult.classList.remove("scale");
});
mask_test_5.addEventListener('click', function() {
  route_adult.classList.remove("active");
  course_chine.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_5.classList.remove('active');

  front_adult.classList.remove("active");
  back_adult.classList.remove("active");
  back_adult.classList.remove("scale");
})


course_additional = document.querySelector(".courses-additional");
front_talking = document.querySelector(".front_talking");
back_talking = document.querySelector(".back_talking");
exit_talking = document.querySelector(".back-exit_talking");
route_talking = document.querySelector(".route.talking");
card_talking = document.querySelector('#talking');

function test_talking(){
  screenWidth_talking = window.innerWidth;
  screenHeight_talking = window.innerHeight;

  blockWidth_talking = back_talking.offsetWidth;
  blockHeight_talking = back_talking.offsetHeight;

  coord_talking = back_talking.getBoundingClientRect();

  initialX_talking = coord_talking.left;
  initialY_talking = coord_talking.top;

  xCenter_talking = (screenWidth_talking / 2) - (blockWidth_talking / 2);
  yCenter_talking = (screenHeight_talking / 2) - (blockHeight_talking / 2);

  xFinal_talking = xCenter_talking - coord_talking.left;
  yFinal_talking = yCenter_talking - coord_talking.top;
  
  card_talking.style.transform = 'translate(' + xFinal_talking + 'px' + ',' + yFinal_talking + 'px' + ')';
}
front_talking.addEventListener("click", function () {
  test_talking();
  front_talking.classList.add("active");
  back_talking.classList.add("active");
  back_talking.classList.add("scale");
  route_talking.classList.add("active");
  course_additional.classList.add('active');
  body.classList.add('disable-scroll');

  function mask_6(){
    mask_test_6.classList.add('active');
  }
  setTimeout(mask_6, 800)
});
exit_talking.addEventListener("click", function () {
  route_talking.classList.remove("active");
  course_additional.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_6.classList.remove('active');

  front_talking.classList.remove("active");
  back_talking.classList.remove("active");
  back_talking.classList.remove("scale");
});
mask_test_6.addEventListener('click', function() {
  route_talking.classList.remove("active");
  course_additional.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_6.classList.remove('active');

  front_talking.classList.remove("active");
  back_talking.classList.remove("active");
  back_talking.classList.remove("scale");
})


front_theatre = document.querySelector(".front_theatre");
back_theatre = document.querySelector(".back_theatre");
exit_theatre = document.querySelector(".back-exit_theatre");
route_theatre = document.querySelector(".route.theatre");
card_theatre = document.querySelector('#theatre');

function test_theatre(){
  screenWidth_theatre= window.innerWidth;
  screenHeight_theatre = window.innerHeight;

  blockWidth_theatre = back_theatre.offsetWidth;
  blockHeight_theatre = back_theatre.offsetHeight;

  coord_theatre = back_theatre.getBoundingClientRect();

  initialX_theatre = coord_theatre.left;
  initialY_theatre = coord_theatre.top;

  xCenter_theatre = (screenWidth_theatre / 2) - (blockWidth_theatre / 2);
  yCenter_theatre = (screenHeight_theatre / 2) - (blockHeight_theatre / 2);

  xFinal_theatre = xCenter_theatre - coord_theatre.left;
  yFinal_theatre = yCenter_theatre - coord_theatre.top;
  
  card_theatre.style.transform = 'translate(' + xFinal_theatre + 'px' + ',' + yFinal_theatre + 'px' + ')';
}
front_theatre.addEventListener("click", function () {
  test_theatre();
  front_theatre.classList.add("active");
  back_theatre.classList.add("active");
  back_theatre.classList.add("scale");
  route_theatre.classList.add("active");
  course_additional.classList.add('active');
  body.classList.add('disable-scroll');

  function mask_7(){
    mask_test_7.classList.add('active');
  }
  setTimeout(mask_7, 800)
});
exit_theatre.addEventListener("click", function () {
  route_theatre.classList.remove("active");
  course_additional.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_7.classList.remove('active');

  front_theatre.classList.remove("active");
  back_theatre.classList.remove("active");
  back_theatre.classList.remove("scale");
});
mask_test_7.addEventListener('click', function() {
  route_theatre.classList.remove("active");
  course_additional.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_7.classList.remove('active');

  front_theatre.classList.remove("active");
  back_theatre.classList.remove("active");
  back_theatre.classList.remove("scale");
})


front_olimp = document.querySelector(".front_olimp");
back_olimp = document.querySelector(".back_olimp");
exit_olimp = document.querySelector(".back-exit_olimp");
route_olimp = document.querySelector(".route.olimp");
card_olimp = document.querySelector('#olimp');

function test_olimp(){
  screenWidth_olimp = window.innerWidth;
  screenHeight_olimp = window.innerHeight;

  blockWidth_olimp = back_olimp.offsetWidth;
  blockHeight_olimp = back_olimp.offsetHeight;

  coord_olimp = back_olimp.getBoundingClientRect();

  initialX_olimp = coord_olimp.left;
  initialY_olimp = coord_olimp.top;

  xCenter_olimp = (screenWidth_olimp / 2) - (blockWidth_olimp / 2);
  yCenter_olimp = (screenHeight_olimp / 2) - (blockHeight_olimp / 2);

  xFinal_olimp = xCenter_olimp - coord_olimp.left;
  yFinal_olimp = yCenter_olimp - coord_olimp.top;
  
  card_olimp.style.transform = 'translate(' + xFinal_olimp + 'px' + ',' + yFinal_olimp + 'px' + ')';
}
front_olimp.addEventListener("click", function () {
  test_olimp();
  front_olimp.classList.add("active");
  back_olimp.classList.add("active");
  back_olimp.classList.add("scale");
  route_olimp.classList.add("active");
  course_additional.classList.add('active');
  body.classList.add('disable-scroll');

  function mask_8(){
    mask_test_8.classList.add('active');
  }
  setTimeout(mask_8, 800)
});
exit_olimp.addEventListener("click", function () {
  route_olimp.classList.remove("active");
  course_additional.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_8.classList.remove('active');

  front_olimp.classList.remove("active");
  back_olimp.classList.remove("active");
  back_olimp.classList.remove("scale");
});
mask_test_8.addEventListener('click', function() {
  route_olimp.classList.remove("active");
  course_additional.classList.remove('active');
  body.classList.remove('disable-scroll');
  mask_test_8.classList.remove('active');

  front_olimp.classList.remove("active");
  back_olimp.classList.remove("active");
  back_olimp.classList.remove("scale");
})