var contenta = document.querySelector('.eventCont');
var replaya = document.querySelector('.timeEvent-a');
var contentb = document.querySelector('.curcle ul');
var replayb = document.querySelector('.container_fover');
var timera;

function autoPlaya() {
    timera = setInterval(function () {
        var target = replaya.offsetLeft - 30;
        var v = contenta.offsetLeft;
        if (Math.abs(v) < target) {
            v = v - 1;
            contenta.style.left = v + 'px';
        } else {
            contenta.style.left = 0;
        }
    }, 100)
}
autoPlaya();
contenta.onmouseenter = function () {
    clearInterval(timera);
}
contenta.onmouseleave = function () {
    autoPlaya();
}
// 轮播2
var timerb;

function autoPlayb() {
    timerb = setInterval(function () {
        var target = replayb.offsetLeft;
        var v = contentb.offsetLeft;
        if (Math.abs(v) < target) {
            v = v - 1;
            contentb.style.left = v + 'px';
        } else {
            contentb.style.left = 0;
        }
    }, 80)
}
autoPlayb();
contentb.onmouseenter = function () {
    clearInterval(timerb);
}
contentb.onmouseleave = function () {
    autoPlayb();
}
// 三
var trans = document.querySelectorAll('.gcontent_content a');
var trans1 = document.querySelector('.gcontent_content a:nth-child(1)');
var trans2 = document.querySelector('.gcontent_content a:nth-child(2)');
var trans3 = document.querySelector('.gcontent_content a:nth-child(3)');

function autoPlayc() {
    timerc = setInterval(function () {
        var v = trans1.className;
        if (v == 'transa') {
            trans1.className = 'transb';
            trans2.className = 'transc';
            trans3.className = 'transa';
        } else if (v == 'transb') {
            trans1.className = 'transc';
            trans2.className = 'transa';
            trans3.className = 'transb';
        } else if (v == 'transc') {
            trans1.className = 'transa';
            trans2.className = 'transb';
            trans3.className = 'transc';
        }
    }, 5000)
}
autoPlayc();
for (var i = 0; i < trans.length; i++) {
    trans[i].onmouseenter = function () {
        clearInterval(timerc);
    }
    trans[i].onmouseleave = function () {
        autoPlayc();
    }
}
trans1.onclick = function () {
    trans1.className = 'transb';
    trans2.className = 'transc';
    trans3.className = 'transa';
}
trans2.onclick = function () {
    trans1.className = 'transa';
    trans2.className = 'transb';
    trans3.className = 'transc';
}
trans3.onclick = function () {
    trans1.className = 'transc';
    trans2.className = 'transa';
    trans3.className = 'transb';
}
// 整体高度相同
var html = document.querySelector('html');
var n = html.offsetHeight;
var containers = document.querySelectorAll('.container > div');
for (var i = 0; i < containers.length; i++) {
    containers[i].style.height = n + 'px';
}
// 全部
var container = document.querySelector('.container');
container.style.transform = 'translateY(0px)';
// 取translateY的值
function tlY() {
    var str = container.style.transform;
    var arra = str.split('(');
    var arr = arra[1].split('p');
    var num = Number(arr[0]);
    return num;
}
// var num = tlY();
// console.log(num);
// 下箭头
var arrow = document.querySelector('.arrow');
arrow.onclick = function () {
    var num = tlY();
    if (num <= -6 * n) {
        num = -6 * n;
    } else {
        num -= n;
    }
    container.style.transform = 'translateY(' + num + 'px' + ')';
    $('.fixed-list .rel').eq(-num / n).children().addClass('active').parent().siblings().children().removeClass('active');
}
// 右侧小点
$('.fixed-list a').click(function () {
    $(this).addClass('active').parent().siblings().children().removeClass('active');
    var i = $(this).parent().index();
    var num = -n * i;
    container.style.transform = 'translateY(' + num + 'px' + ')';
});

















// $('.fixed-list').on('click','a',function () { 
//     $(this).addClass('active').siblings().removeClass('active')
//   })



// 滚动
// var num = tlY();
// if (num <= n * -6) {
//     window.onmousewheel = null;
// } else {window.onmousewheel = function () {
//         if (window.event.wheelDelta < 0) {
//             num -= n;
//             container.style.transform = 'translateY(' + num + 'px' + ')';
//             console.log(container.style.transform)
//         }
//     }
// }

// window.addEventListener ("mousewheel",function (e) {
//     e.preventDefault();
// }, false)
// var wheelstep;
    // window.onmousewheel = function (e) {
    //     var num = tlY();
    //     if (window.event.wheelDelta < 0) {
    //         if (num <= -6 * n) {
    //             num = -6 * n;
    //         }    
    //         num -= n;
    //         container.style.transform = 'translateY(' + num + 'px' + ')';
    //         console.log(container.style.transform)
    //     } else if (window.event.wheelDelta > 0) {
    //         num += n;
    //         container.style.transform = 'translateY(' + num + 'px' + ')';
    //         console.log(container.style.transform)
    //     }
    // }
// console.log(wheelstep)