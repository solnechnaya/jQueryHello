console.log('hello');
$(document).ready(
    function () {
        $('#submit').click(
            function () {
                console.log('click');
                var validUsername;
                var validPassword;

                $.ajax({
                    url: 'http://localhost:8080/user',
                    type: 'GET',
                    dataType: 'json'
                })
                    .done(function (data) {

                        validUsername = data.username;
                        validPassword = data.password;

                        var username = $('#username').val();
                        var password = $('#password').val();
                        if (username == validUsername && password == validPassword) {
                            alert("Ок");
                        } else {
                            alert("Неверное имя пользователя или пароль");
                        }

                    })
                    .fail(function () {
                        alert("Ошибка сервера!")
                    });


            }
        )
        /*
         $.ajax({
         url: siteConfig.backEndUrl+ url + (id ? '/' + id : ''),
         headers: { 'Content-Type': 'application/json', 'X-Swellby-SessionID': s_sessionId },
         type: 'PUT',
         dataType: 'json',
         data: data ? JSON.stringify(data) : null
         })
         .done(function (data) {
         success(data,triggerValue,closemodal,callback)
         })
         .fail(function (xhr, strErr) {
         if(typeof errorcallback === "function") {
         errorcallback(xhr, strErr);
         } else {
         errorHandler(xhr, strErr);
         }
         });

         $.ajax({
         url: siteConfig.backEndUrl+ url,
         headers: { 'Content-Type': 'application/json', 'X-Swellby-SessionID': s_sessionId },
         type: 'GET',
         dataType: 'json'
         })
         .done(function (data) {
         success(data,triggerValue,false,callback)
         })
         .fail(function (xhr, strErr) {
         errorHandler(xhr, strErr);
         if(typeof errorcallback === "function") {
         errorcallback();
         }
         });

         */
    }
);

