function newbalancegame(json) {
    $.ajax({
        type: "POST", // POST형식으로 폼 전송
        url: "http://seohanbook.co.kr/Picker/php/save.php", // 목적지
        timeout: 10000,
        data: ({ 'json2': json }),
        cache: false,
        dataType: "text",
        error: function (xhr, textStatus, errorThrown) { // 전송 실패
            alert("전송에 실패했습니다.");
        }
    });
}
function add(callback) {
    var contant;
    var title2 = document.getElementById("add_main3");
    var text2 = document.getElementById("contant");
    var yes3 = document.getElementById("add_main7");
    var no3 = document.getElementById("add_main9");
    var text3 = Math.random().toString(36).substr(2, 11);
    var img2 = text3+".png";
    var xobj = new XMLHttpRequest();
    if (text3 !== null&&title2 !== null && text2 !== null && img2 !== null && yes3 !== null && no3 !== null) {
        var personInfo = new Object();
        personInfo.title = title2.value;
        personInfo.text = text2.value;
        personInfo.yes2 = yes3.value;
        personInfo.no2 = no3.value;
        personInfo.yes = 0;
        personInfo.no = 0;
        personInfo.pic = img2;
        var aa = {
            [text3]: {

            }
        }
        xobj.overrideMimeType("application/json");
        xobj.open('POST', '../json/data.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(JSON.parse(xobj.responseText));
                contant = JSON.parse(xobj.responseText);
                Object.assign(aa[text3], personInfo);
                Object.assign(contant, aa);
                newbalancegame(contant);
            }
        };
        xobj.send(null);
        var link = '../html/balance_game.html?name=' + text3;
        setTimeout(function () {
            location.href = link;
            location.replace(link);
            window.open(link);
        }, 500);

    }
}
