console.log('hello');


function showName(data) {
    $('#name').html(data.name + ' ' + data.lastName);
}

function getName() {
    $.ajax({
        url: 'http://localhost:8080/username',
        type: 'GET',
        dataType: 'json'
    })
        .done(function(data) {showName(data);})
        .fail(function () {
            alert("Ошибка сервера!")
        });
}

function login(data) {
    var validUsername = data.username;
    var validPassword = data.password;

    var username = $('#username').val();
    var password = $('#password').val();

    console.log(data.username + " " + data.password);

    if (username == validUsername && password == validPassword) {
        getName();
    } else {
        alert("Неверное имя пользователя или пароль");
    }
}

function submit() {
    console.log('click');

    $.ajax({
        url: 'http://localhost:8080/user',
        type: 'GET',
        dataType: 'json'
    })
        .done(function (data) {
                login(data);
            }
        )
        .fail(function () {
            alert("Ошибка сервера!")
        });
}

$(document).ready(
    function () {
        $('#submit').click(submit);
    }
);

