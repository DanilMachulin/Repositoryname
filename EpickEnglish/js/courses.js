starter = document.getElementById('starters_class');
front_starter = document.querySelector('.front_starters');
back_starter = document.querySelector('.back_starters');

starter.addEventListener("click", function() {
    front_starter.classList.toggle('active');
    back_starter.classList.toggle('active');
    front_a1.classList.remove('active');
    back_a1.classList.remove('active');
    front_a2.classList.remove('active');
    back_a2.classList.remove('active');
    front_b1.classList.remove('active');
    back_b1.classList.remove('active');
    front_child.classList.remove('active');
    back_child.classList.remove('active');
    front_adult.classList.remove('active');
    back_adult.classList.remove('active');
    front_talking.classList.remove('active');
    back_talking.classList.remove('active');
    front_theatre.classList.remove('active');
    back_theatre.classList.remove('active');
    front_olimp.classList.remove('active');
    back_olimp.classList.remove('active');
})

a1 = document.getElementById('a1_class');
front_a1 = document.querySelector('.front_a1');
back_a1 = document.querySelector('.back_a1');

a1.addEventListener("click", function() {
    front_a1.classList.toggle('active');
    back_a1.classList.toggle('active');
    front_starter.classList.remove('active');
    back_starter.classList.remove('active');
    front_a2.classList.remove('active');
    back_a2.classList.remove('active');
    front_b1.classList.remove('active');
    back_b1.classList.remove('active');
    front_child.classList.remove('active');
    back_child.classList.remove('active');
    front_adult.classList.remove('active');
    back_adult.classList.remove('active');
    front_talking.classList.remove('active');
    back_talking.classList.remove('active');
    front_theatre.classList.remove('active');
    back_theatre.classList.remove('active');
    front_olimp.classList.remove('active');
    back_olimp.classList.remove('active');
})

a2 = document.getElementById('a2_class');
front_a2 = document.querySelector('.front_a2');
back_a2 = document.querySelector('.back_a2');

a2.addEventListener("click", function() {
    front_a2.classList.toggle('active');
    back_a2.classList.toggle('active');

    front_a1.classList.remove('active');
    back_a1.classList.remove('active');
    front_starter.classList.remove('active');
    back_starter.classList.remove('active');
    front_b1.classList.remove('active');
    back_b1.classList.remove('active');
    front_child.classList.remove('active');
    back_child.classList.remove('active');
    front_adult.classList.remove('active');
    back_adult.classList.remove('active');
    front_talking.classList.remove('active');
    back_talking.classList.remove('active');
    front_theatre.classList.remove('active');
    back_theatre.classList.remove('active');
    front_olimp.classList.remove('active');
    back_olimp.classList.remove('active');
})

b1 = document.getElementById('b1_class');
front_b1 = document.querySelector('.front_b1');
back_b1 = document.querySelector('.back_b1');

b1.addEventListener("click", function() {
    front_b1.classList.toggle('active');
    back_b1.classList.toggle('active');

    front_a2.classList.remove('active');
    back_a2.classList.remove('active');
    front_a1.classList.remove('active');
    back_a1.classList.remove('active');
    front_starter.classList.remove('active');
    back_starter.classList.remove('active');
    front_child.classList.remove('active');
    back_child.classList.remove('active');
    front_adult.classList.remove('active');
    back_adult.classList.remove('active');
    front_talking.classList.remove('active');
    back_talking.classList.remove('active');
    front_theatre.classList.remove('active');
    back_theatre.classList.remove('active');
    front_olimp.classList.remove('active');
    back_olimp.classList.remove('active');
})

child = document.getElementById('child_class');
front_child = document.querySelector('.front_child');
back_child = document.querySelector('.back_child');

child.addEventListener("click", function() {
    front_child.classList.toggle('active');
    back_child.classList.toggle('active');

    front_a2.classList.remove('active');
    back_a2.classList.remove('active');
    front_a1.classList.remove('active');
    back_a1.classList.remove('active');
    front_b1.classList.remove('active');
    back_b1.classList.remove('active');
    front_starter.classList.remove('active');
    back_starter.classList.remove('active');
    front_adult.classList.remove('active');
    back_adult.classList.remove('active');
    front_talking.classList.remove('active');
    back_talking.classList.remove('active');
    front_theatre.classList.remove('active');
    back_theatre.classList.remove('active');
    front_olimp.classList.remove('active');
    back_olimp.classList.remove('active');
})

adult = document.getElementById('adult_class');
front_adult = document.querySelector('.front_adult');
back_adult = document.querySelector('.back_adult');

adult.addEventListener("click", function() {
    front_adult.classList.toggle('active');
    back_adult.classList.toggle('active');

    front_child.classList.remove('active');
    back_child.classList.remove('active');
    front_a2.classList.remove('active');
    back_a2.classList.remove('active');
    front_a1.classList.remove('active');
    back_a1.classList.remove('active');
    front_b1.classList.remove('active');
    back_b1.classList.remove('active');
    front_starter.classList.remove('active');
    back_starter.classList.remove('active');
    front_talking.classList.remove('active');
    back_talking.classList.remove('active');
    front_theatre.classList.remove('active');
    back_theatre.classList.remove('active');
    front_olimp.classList.remove('active');
    back_olimp.classList.remove('active');
})

talking = document.getElementById('talking');
front_talking = document.querySelector('.front_talking');
back_talking = document.querySelector('.back_talking');

talking.addEventListener("click", function() {
    front_talking.classList.toggle('active');
    back_talking.classList.toggle('active');

    front_adult.classList.remove('active');
    back_adult.classList.remove('active');
    front_child.classList.remove('active');
    back_child.classList.remove('active');
    front_a2.classList.remove('active');
    back_a2.classList.remove('active');
    front_a1.classList.remove('active');
    back_a1.classList.remove('active');
    front_b1.classList.remove('active');
    back_b1.classList.remove('active');
    front_starter.classList.remove('active');
    back_starter.classList.remove('active');
    front_theatre.classList.remove('active');
    back_theatre.classList.remove('active');
    front_olimp.classList.remove('active');
    back_olimp.classList.remove('active');
})

theatre = document.getElementById('theatre');
front_theatre = document.querySelector('.front_theatre');
back_theatre = document.querySelector('.back_theatre');

theatre.addEventListener("click", function() {
    front_theatre.classList.toggle('active');
    back_theatre.classList.toggle('active');

    front_talking.classList.remove('active');
    back_talking.classList.remove('active');
    front_adult.classList.remove('active');
    back_adult.classList.remove('active');
    front_child.classList.remove('active');
    back_child.classList.remove('active');
    front_a2.classList.remove('active');
    back_a2.classList.remove('active');
    front_a1.classList.remove('active');
    back_a1.classList.remove('active');
    front_b1.classList.remove('active');
    back_b1.classList.remove('active');
    front_starter.classList.remove('active');
    back_starter.classList.remove('active');
    front_olimp.classList.remove('active');
    back_olimp.classList.remove('active');
})

olimp = document.getElementById('olimp');
front_olimp = document.querySelector('.front_olimp');
back_olimp = document.querySelector('.back_olimp');

olimp.addEventListener("click", function() {
    front_olimp.classList.toggle('active');
    back_olimp.classList.toggle('active');

    front_theatre.classList.remove('active');
    back_theatre.classList.remove('active');
    front_talking.classList.remove('active');
    back_talking.classList.remove('active');
    front_adult.classList.remove('active');
    back_adult.classList.remove('active');
    front_child.classList.remove('active');
    back_child.classList.remove('active');
    front_a2.classList.remove('active');
    back_a2.classList.remove('active');
    front_a1.classList.remove('active');
    back_a1.classList.remove('active');
    front_b1.classList.remove('active');
    back_b1.classList.remove('active');
    front_starter.classList.remove('active');
    back_starter.classList.remove('active');
})