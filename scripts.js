// Add API endpoint here
var API_ENDPOINT = "API_ENDPOINT_PASTE_HERE";

// AJAX POST request to save user data
document.getElementById("saveUser").onclick = function(){
    var inputData = {
        "name": $('#name').val(),
        "age": $('#age').val(),
        "height": $('#height').val(),
        "weight": $('#weight').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("userSaved").innerHTML = "User Data Saved!";
        },
        error: function () {
            alert("Error saving user data.");
        }
    });
}

// AJAX GET request to retrieve all users
document.getElementById("getUsers").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#userTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#userTable").append("<tr> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['age'] + "</td> \
                    <td>" + data['height'] + "</td> \
                    <td>" + data['weight'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving user data.");
        }
    });
}