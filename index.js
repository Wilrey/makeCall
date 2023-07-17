    // Implicit grant credentials
    const CLIENT_ID = 'ee4696b8-16c4-40ce-87ae-7322597880ac';

    // Genesys Cloud environment
    const ENVIRONMENT = 'mypurecloud.de';

    function getParameterByName(name) {
        name = name.replace(/[\\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\#&]" + name + "=([^&#]*)"),
          results = regex.exec(location.hash);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    if(window.location.hash) {
        var token = getParameterByName('access_token');
        console.log("token" + token);


        $.ajax({
            url: `https://api.${ENVIRONMENT}/api/v2/users/me`,
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'bearer ' + token);},
            success: function(data) {
                console.log(data);
            }
        });

        location.hash=''

    } else {

        var queryStringData = {
            response_type : "token",
            client_id : CLIENT_ID,
            redirect_uri : "https://www.google.es/"
        }

        window.location.replace(`https://login.${ENVIRONMENT}/oauth/authorize?` + jQuery.param(queryStringData));
    }
