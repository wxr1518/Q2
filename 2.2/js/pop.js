/*document.getElementById("speedset").onclick = function(){
    chorme.runtime.sendMessage({greet},function(res){
       // console.log(response.farewell)
    })
}
$(function () {
    $("#search").click(function () {
    // chrome.tabs.query可以通过回调函数获得当前活跃tab
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // 取出当前标签页的 tag_id, 发送一个消息出去, 同时带上回调函数
            chrome.tabs.sendMessage(tabs[0].id, { action: "search" }, function (response) {
            	// 回调函数，把传回的信息渲染在popup.html上
                $("#flag").text(response)
            });  
        }); 
    });
});*/
document.getElementById('setspeed').addEventListener('click', () => {
    const speed_in = document.getElementById('speedinput').value;
    const speed = parseFloat(speed_in);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "setPlaybackRate", speed: speed }, (response) => {
            alert(response.result);
        });
    });
});