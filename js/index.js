function getIdNo() {
    var g = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];
    var c = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
    var h = "420101";
    var j = "" + (parseInt(40 * Math.random()) + 1960) + "0" + (parseInt(9 * Math.random()) + 1) + (parseInt(
        20 * Math.random()) + 10);
    var k = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(
        Math.random() * 10).toString();
    var e = (h + j + k).split("");
    var f = 0;
    for (var b = 0; b < e.length; b++) {
        f = f + parseInt(e[b]) * parseInt(g[b])
    }
    var a = c[parseInt(f % 11)];
    var d = h + j + k + a;
    return d
}

function getName() {
    var h = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜";
    var l =
        "子璇淼国栋夫子瑞堂甜敏尚国贤贺祥晨涛昊轩易轩辰益帆冉瑾春瑾昆春齐杨文昊东雄霖浩晨熙涵溶溶冰枫欣宜豪欣慧建政美欣淑慧文轩杰欣源忠林榕润欣汝慧嘉新建建林亦菲林冰洁佳欣涵涵禹辰淳美泽惠伟洋涵越润丽翔淑华晶莹凌晶苒溪雨涵嘉怡佳毅子辰佳琪紫轩瑞辰昕蕊萌明远欣宜泽远欣怡佳怡佳惠晨茜晨璐运昊汝鑫淑君晶滢润莎榕汕佳钰佳玉晓庆一鸣语晨添池添昊雨泽雅晗雅涵清妍诗悦嘉乐晨涵天赫玥傲佳昊天昊萌萌若萌测试身份证号大全和名由程序随机组合而成所有信息均为虚构生成不会泄密真实公民隐私信息也非现实生活中真实的身份证号码和真实名身份证号码所属年龄均为岁以上均已通过校验身份证号码和名仅供测试或用在必须输入身份证号码和名的网站上请不要将身份证号码和名用于任何非法用途且自行承担使用本工具的任何后果和责任";
    var e = parseInt(h.length * Math.random());
    var b = h.substr(e, 1);
    var g = l.length;
    var d = parseInt(g * Math.random());
    var c = parseInt(g * Math.random());
    var f = l.substr(d, 1) + l.substr(c, 1);
    var a = b + f;
    return a
}

function getBankAccount() {
    var b = "0102";
    var c = "";
    switch (b) {
        case "0102":
            c = "622202";
            break;
        case "0103":
            c = "622848";
            break;
        case "0105":
            c = "622700";
            break;
        case "0301":
            c = "622262";
            break;
        case "104":
            c = "621661";
            break;
        case "0303":
            c = "622666";
            break;
        case "305":
            c = "622622";
            break;
        case "0306":
            c = "622556";
            break;
        case "0308":
            c = "622588";
            break;
        case "0410":
            c = "622155";
            break;
        case "302":
            c = "622689";
            break;
        case "304":
            c = "622630";
            break;
        case "309":
            c = "622908";
            break;
        case "310":
            c = "621717";
            break;
        case "315":
            c = "622323";
            break;
        case "316":
            c = "622309";
            break;
        default:
    }
    for (var a = 0; a < 13; a++) {
        c = c + Math.floor(Math.random() * 10)
    }
    return c
}

function getMoble() {
    var b = new Array("135", "136", "137", "138", "139", "150", "151", "152", "157", "158", "159", "182", "183",
        "187", "188", "198", "130", "131", "132", "155", "156", "186", "181", "189");
    var c = parseInt(10 * Math.random());
    var d = b[c];
    for (var a = 0; a < 8; a++) {
        d = d + Math.floor(Math.random() * 10)
    }
    return d
}

function genrate() {
    trs = "";
    for (var a = 1; a <= 20; a++) {
        trs = trs + `<tr>
                        <td>${a}</td>
                        <td><span class="csp anli clipboard" data-clipboard-text="${getName()}">${getName()}</span></td>
                        <td><span class="csp anli clipboard" data-clipboard-text="${getMoble()}">${getMoble()}</span></td>
                        <td><span class="csp anli clipboard" data-clipboard-text="${getIdNo()}">${getIdNo()}</span></td>
                        <td><span class="csp anli clipboard" data-clipboard-text="${getBankAccount()}">${getBankAccount()}</span></td>
                    </tr>`
    }
    document.getElementById("list").innerHTML = trs;
    document.getElementById('list').addEventListener('click', function (event) {
        if (event.target.nodeName == 'SPAN') {
            var b = $("<input>");
            $("body").append(b);
            b.val(event.target.innerHTML).select();
            document.execCommand("copy");
            b.remove();
            layer.msg("复制成功", {
                offset: "80%",
                time: 1000
            });
        }
    }, true)
}
window.onload = function () {
    document.getElementById('genrateBtn').onclick = genrate
    genrate()
};