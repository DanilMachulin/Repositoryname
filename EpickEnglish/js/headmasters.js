//Data for first professor
first = document.getElementsByClassName('professors-first');
first_submenu = document.getElementsByClassName('professors-first-submenu');
first_name = document.getElementsByClassName('professors-first-name');

//Data for second professor
second = document.getElementsByClassName('professors-second');
second_submenu = document.getElementsByClassName('professors-second-submenu');
second_name = document.getElementsByClassName('professors-second-name');

//Data for third professor
third = document.getElementsByClassName('professors-third');
third_submenu = document.getElementsByClassName('professors-third-submenu');
third_name = document.getElementsByClassName('professors-third-name');

//Data for third professor
fourth = document.getElementsByClassName('professors-fourth');
fourth_submenu = document.getElementsByClassName('professors-fourth-submenu');
fourth_name = document.getElementsByClassName('professors-fourth-name');

let flag = false;

$(first).hover(function() {
    if (!flag) {
        $(first_submenu).slideDown();
        $(first_name).css({ "display": "none" });
        $(first_submenu).css({ "display": "flex" });
    } else {
        $(first_submenu).slideUp();
        $(first_name).css({ "display": "flex" });
        $(first_submenu).css({ "display": "none" });
    }
    flag = !flag;
})

$(second).hover(function() {
    if (!flag) {
        $(second_submenu).slideDown();
        $(second_name).css({ "display": "none" });
        $(second_submenu).css({ "display": "flex" });
    } else {
        $(second_submenu).slideUp();
        $(second_name).css({ "display": "flex" });
        $(second_submenu).css({ "display": "none" });
    }
    flag = !flag;
})

$(third).hover(function() {
    if (!flag) {
        $(third_submenu).slideDown();
        $(third_name).css({ "display": "none" });
        $(third_submenu).css({ "display": "flex" });
    } else {
        $(third_submenu).slideUp();
        $(third_name).css({ "display": "flex" });
        $(third_submenu).css({ "display": "none" });
    }
    flag = !flag;
})

$(fourth).hover(function() {
    if (!flag) {
        $(fourth_submenu).slideDown();
        $(fourth_name).css({ "display": "none" });
        $(fourth_submenu).css({ "display": "flex" });
    } else {
        $(fourth_submenu).slideUp();
        $(fourth_name).css({ "display": "flex" });
        $(fourth_submenu).css({ "display": "none" });
    }
    flag = !flag;
})