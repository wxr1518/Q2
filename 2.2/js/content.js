/*document.addEventListener('DOMContentLoaded', function() {
    // 创建切换按钮
    var toggleButton = document.createElement('button');
    toggleButton.textContent = '切换夜间模式';
    document.body.appendChild(toggleButton);

    // 定义一个变量来跟踪夜间模式是否开启
    var isNightMode = false;

    // 为切换按钮添加点击事件监听器
    toggleButton.addEventListener('click', function() {
        if (!isNightMode) {
            document.body.classList.add('night - mode');
            isNightMode = true;
        } else {
            document.body.classList.remove('night - mode');
            isNightMode = false;
        }
    });
});*/

alert("content-script.js 已经注入");

chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "search") {
        //收到search信息，获取当前页面id为 articleContentId 的元素
            var target = $("#articleContentId");
            console.log(target)
            if (target.length > 0) {
            // 如果获取的值不为空则返回数据到 popup.js
                sendResponse(target.text());
            } else {
                sendResponse("no data found!");
            }
        }
    }
);

document.getElementById("app").setAttribute('style','background-color:#000000;');
document.getElementById('page-index').setAttribute('style','color:#ffffff;');
document.getElementsByClassName('s-space')[0].setAttribute('style','background-color:#000000;');
document.getElementsByClassName('col-1')[0].setAttribute('style','background-color:#000000;');
document.getElementsByClassName('col-2')[0].setAttribute('style','background-color:#000000;');
document.getElementsByClassName('section elec')[0].setAttribute('style','background-color:#000000;');
document.getElementsByClassName('section i-live')[0].setAttribute('style','background-color:#000000;');
document.getElementsByClassName('section user-info')[0].setAttribute('style','background-color:#000000;');
document.getElementsByClassName('wrapper')[0].setAttribute('style','background-color:#000000;');
document.getElementsByClassName('n-inner clearfix')[0].setAttribute('style','background-color:#000000;');

//视频倍速
function speedset() {
    var rate = document.getElementById("speedset").value;
    console.log('rate');
document.getElementsByTagName('video')[0].playbackRate=rate;
}