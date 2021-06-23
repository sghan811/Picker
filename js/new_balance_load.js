function balance_load(callback) {
    var main = document.getElementById("selections1");
    var br = document.createElement('br');
    var xobj = new XMLHttpRequest();
    var newdiv;
    var newimg;
    var text;
    var contant;
    xobj.overrideMimeType("application/json");
    xobj.open('POST', './json/data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
            contant = JSON.parse(xobj.responseText);
            for (var key in contant) {
                for (var key2 in contant[key]) {
                    newdiv = document.createElement("div");
                    newdiv.setAttribute("class", "selection1");
                    newdiv.setAttribute("onclick", "location.href='html/balance_game.html?name=" + key + "'");
                    newdiv.setAttribute("id", key);
                    newimg = document.createElement("img");
                    newimg.setAttribute("src", "./pic/"+contant[key].pic);
                    text = document.createTextNode(contant[key].title);
                    newdiv.appendChild(newimg);
                    newdiv.appendChild(text);
                    br = document.createElement('br');
                    main.appendChild(br);
                    main.appendChild(newdiv);
                    break;
                }
            }
        }
    };
    xobj.send(null);
}

balance_load(function (json) { console.log(json); });