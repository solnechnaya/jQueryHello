console.log('hello');
$(document).ready(
    function () {
        $('#submit').click(
            function () {
                console.log('click');
                const validUsername='Наташа';
                const validPassword='qqq';

                var username = $('#username').val();
                var password = $('#password').val();
                if (username == validUsername && password == validPassword) {
                    alert("Ок");
                } else {
                    alert("Неверное имя пользователя или пароль");
                }
            }
        )
    }
);

