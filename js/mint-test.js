function test(value, callback) {
    var text = document.createTextNode("");
    var choice1 = document.getElementById("choice3");
    var choice2 = document.getElementById("choice4");
    var urlParams = new URL(window.location.href);
    urlParams = urlParams.searchParams;
    if (value == 'yes') {
        var ppp = 0;
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('POST', 'http://seohanbook.co.kr/Picker/json/data.json', true);
        var contant;
        var key2;
        var mm;
        var text = document.createTextNode("");
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(JSON.parse(xobj.responseText));
                contant = JSON.parse(xobj.responseText);
                for (var key in contant) {
                    if (key == urlParams.get('name')) {
                        for (key2 in contant[key]) {
                            contant[key].yes = Number(contant[key].yes) + 1;
                            ppp = Number(contant[key].no) + Number(contant[key].yes);
                            mm = Number(contant[key].no);
                        }
                        choice1.innerText = "";
                        choice2.innerText = "";
                        text = document.createTextNode(contant[key].yes2);
                        choice1.appendChild(text);
                        text = document.createTextNode(contant[key].no2);
                        choice2.appendChild(text);
                        if (Math.round(100 * ((ppp - mm) / ppp)) !== 0 && Math.round(100 * ((ppp - mm) / ppp)) >= 20) {
                            choice1.innerText = "";
                            choice2.innerText = "";
                            text = document.createTextNode(contant[key].yes2);
                            choice1.appendChild(text);
                            text = document.createTextNode(contant[key].no2);
                            choice2.appendChild(text);
                            text = document.createTextNode(Math.round(100 * ((ppp - mm) / ppp)) + "%");
                            choice1.style.width = Math.round(100 * ((ppp - mm) / ppp)) + "%";
                            choice1.appendChild(text);
                            text = document.createTextNode(Math.round(100 * (mm / ppp)) + "%");
                            choice2.style.width = Math.round(100 * (mm / ppp)) + "%";
                            choice2.appendChild(text);
                        } else {
                            choice1.innerText = "";
                            choice2.innerText = "";
                            text = document.createTextNode(contant[key].yes2);
                            choice1.appendChild(text);
                            text = document.createTextNode(contant[key].no2);
                            choice2.appendChild(text);
                            text = document.createTextNode(Math.round(100 * ((ppp - mm) / ppp)) + "%");
                            choice1.style.width = "20%";
                            choice1.appendChild(text);
                            text = document.createTextNode(Math.round(100 * (mm / ppp)) + "%");
                            choice2.style.width = "80%";
                            choice2.appendChild(text);
                        }
                        if (Math.round(100 * (mm / ppp)) !== 0 && Math.round(100 * (mm / ppp)) >= 20 && (Math.round(100 * ((ppp - mm) / ppp)) !== 0 && Math.round(100 * ((ppp - mm) / ppp)) >= 20) === true) {
                            choice1.innerText = "";
                            choice2.innerText = "";
                            text = document.createTextNode(contant[key].yes2);
                            choice1.appendChild(text);
                            text = document.createTextNode(contant[key].no2);
                            choice2.appendChild(text);
                            text = document.createTextNode(Math.round(100 * ((ppp - mm) / ppp)) + "%");
                            choice1.style.width = Math.round(100 * ((ppp - mm) / ppp)) + "%";
                            choice1.appendChild(text);
                            text = document.createTextNode(Math.round(100 * (mm / ppp)) + "%");
                            choice2.style.width = Math.round(100 * (mm / ppp)) + "%";
                            choice2.appendChild(text);
                        } else {
                            choice1.innerText = "";
                            choice2.innerText = "";
                            text = document.createTextNode(contant[key].yes2);
                            choice1.appendChild(text);
                            text = document.createTextNode(contant[key].no2);
                            choice2.appendChild(text);
                            text = document.createTextNode(Math.round(100 * ((ppp - mm) / ppp)) + "%");
                            choice1.style.width = "80%";
                            choice1.appendChild(text);
                            text = document.createTextNode(Math.round(100 * (mm / ppp)) + "%");
                            choice2.style.width = "20%";
                            choice2.appendChild(text);
                        }
                        json_cookie(contant);
                        break;
                    }
                }
            }
        };
        xobj.send(null);
    } else {
        var text = document.createTextNode("");
        var ppp = 0;
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('POST', 'http://seohanbook.co.kr/Picker/json/data.json', true);
        var contant;
        var key2;
        var mm;
        var text = document.createTextNode("");
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(JSON.parse(xobj.responseText));
                contant = JSON.parse(xobj.responseText);
                for (var key in contant) {
                    if (key == urlParams.get('name')) {
                        for (key2 in contant[key]) {
                            contant[key].no = Number(contant[key].no) + 1;
                            ppp = Number(contant[key].no) + Number(contant[key].yes);
                            mm = Number(contant[key].no);
                        }
                        if (Math.round(100 * ((ppp - mm) / ppp)) !== 0 && Math.round(100 * ((ppp - mm) / ppp)) >= 20) {
                            choice1.innerText = "";
                            choice2.innerText = "";
                            text = document.createTextNode(contant[key].yes2);
                            choice1.appendChild(text);
                            text = document.createTextNode(contant[key].no2);
                            choice2.appendChild(text);
                            text = document.createTextNode(Math.round(100 * ((ppp - mm) / ppp)) + "%");
                            choice1.style.width = Math.round(100 * ((ppp - mm) / ppp)) + "%";
                            choice1.appendChild(text);
                            text = document.createTextNode(Math.round(100 * (mm / ppp)) + "%");
                            choice2.style.width = Math.round(100 * (mm / ppp)) + "%";
                            choice2.appendChild(text);
                        } else {
                            choice1.innerText = "";
                            choice2.innerText = "";
                            text = document.createTextNode(contant[key].yes2);
                            choice1.appendChild(text);
                            text = document.createTextNode(contant[key].no2);
                            choice2.appendChild(text);
                            text = document.createTextNode(Math.round(100 * ((ppp - mm) / ppp)) + "%");
                            choice1.style.width = "80%";
                            choice1.appendChild(text);
                            text = document.createTextNode(Math.round(100 * (mm / ppp)) + "%");
                            choice2.style.width = "20%";
                            choice2.appendChild(text);
                        } 
                        if (Math.round(100 * (mm / ppp)) !== 0 && Math.round(100 * (mm / ppp)) >= 20 && (Math.round(100 * ((ppp - mm) / ppp)) !== 0 && Math.round(100 * ((ppp - mm) / ppp)) >= 20)===true) {
                            choice1.innerText = "";
                            choice2.innerText = "";
                            text = document.createTextNode(contant[key].yes2);
                            choice1.appendChild(text);
                            text = document.createTextNode(contant[key].no2);
                            choice2.appendChild(text);
                            text = document.createTextNode(Math.round(100 * ((ppp - mm) / ppp)) + "%");
                            choice1.style.width = Math.round(100 * ((ppp - mm) / ppp)) + "%";
                            choice1.appendChild(text);
                            text = document.createTextNode(Math.round(100 * (mm / ppp)) + "%");
                            choice2.style.width = Math.round(100 * (mm / ppp)) + "%";
                            choice2.appendChild(text);
                        } else {
                            choice1.innerText = "";
                            choice2.innerText = "";
                            text = document.createTextNode(contant[key].yes2);
                            choice1.appendChild(text);
                            text = document.createTextNode(contant[key].no2);
                            choice2.appendChild(text);
                            text = document.createTextNode(Math.round(100 * ((ppp - mm) / ppp)) + "%");
                            choice1.style.width = "20%";
                            choice1.appendChild(text);
                            text = document.createTextNode(Math.round(100 * (mm / ppp)) + "%");
                            choice2.style.width = "80%";
                            choice2.appendChild(text);
                        }
                        json_cookie(contant);
                        break;
                    }
                }
            }
        };
        xobj.send(null);
    }
}
function json_cookie(json) {
    $.ajax({
        type: "POST", // POST형식으로 폼 전송
        url: "http://seohanbook.co.kr/Picker/php/save.php", // 목적지
        timeout: 10000,
        data: ({ 'json2': json,}),
        cache: false,
        dataType: "text",
        error: function (xhr, textStatus, errorThrown) { // 전송 실패
            alert("전송에 실패했습니다.");
        }
    }); 
}
function load_set(callback) {
    var choice1 = document.getElementById("choice3");
    var choice2 = document.getElementById("choice4");
    var text4 = document.getElementById("text");
    var urlParams = new URL(window.location.href);
    urlParams = urlParams.searchParams;
    var xobj = new XMLHttpRequest();
    var contant;
    var text2;
    xobj.overrideMimeType("application/json");
    xobj.open('POST', 'http://seohanbook.co.kr/Picker/json/data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
            contant = JSON.parse(xobj.responseText);
            for (key in contant) {
                if (key === urlParams.get('name')) {
                    for (key2 in contant[key]) {
                        choice1.innerText = "";
                        choice2.innerText = "";
                        text2 = document.createTextNode(contant[key].yes2);
                        choice1.appendChild(text2);
                        text2 = document.createTextNode(contant[key].no2);
                        choice2.appendChild(text2);
                        text2 = document.createTextNode(contant[key].text);
                        text4.appendChild(text2);
                        break;
                    }
                }
            }
        }
    };
    xobj.send(null);
}
function img_upload(img, name) {
    $.ajax({
        type: "POST", // POST형식으로 폼 전송
        url: "http://seohanbook.co.kr/Picker/php/save2.php", // 목적지
        timeout: 10000,
        data: ({ 'img2': img,'name': name }),
        cache: false,
        dataType: "text",
        error: function (xhr, textStatus, errorThrown) { // 전송 실패
            alert("전송에 실패했습니다.");
        }
    });
}
function url_p_loader() {
    var urlParams = new URL(window.location.href);
    urlParams = urlParams.searchParams;
    return urlParams.get('name');
}
function capture() {
    var target = $('#balance_main2');
    if (target != null && target.length > 0) {
        var t = target[0];
        html2canvas(t).then(function (canvas) {
            var myImg = canvas.toDataURL("image/png");
            myImg = myImg.replace("data:image/png;base64,", "");

            $.ajax({
                type: "POST",
                data: {
                    "img2": myImg,
                    "name": url_p_loader()
                },
                dataType: "text",
                url: "../php/save2.php",
                success: function (data) {
                    console.log(data);
                },
                error: function (a, b, c) {
                    alert("error");
                }
            });
        });
    }
}
load_set(function (json) { console.log(json); });
