function check() {
    check = getCookie('edid');
    if (check !== "") {
        location.href = "./balance_game_add.html";
    }
}
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
check();