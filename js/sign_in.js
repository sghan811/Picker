function getCookie(name) {
    var nameOfCookie = name + "="; 
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) == nameOfCookie) {


            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1) {
                endOfCookie = document.cookie.length;
            }
            return unescape(document.cookie.substring(y, endOfCookie));

        }

        x = document.cookie.indexOf(" ", x) + 1;

        if (x == 0) {
            break;
        }
    }

    return "";

}

function load_user() {
    var cookie = getCookie('edid');
    var text = document.createTextNode('');
    if (cookie!=="") {
        var li2 = document.getElementById("link");
        idtext = document.createTextNode(cookie);
        var div = document.createElement("div");
        div.appendChild(idtext);
        li2.appendChild(div);
    } else {
        var li2 = document.getElementById("link")
        var sign1 = document.createElement("a");
        var sign2 = document.createElement("a");
        sign1.href = "/Picker/html/insert.html";
        text = document.createTextNode('sign up ');
        sign1.appendChild(text);
        sign2.href = "/Picker/html/login.html";
        text = document.createTextNode('sign in');
        sign2.appendChild(text);
        li2.appendChild(sign1);
        li2.appendChild(sign2);
    }
}
load_user();