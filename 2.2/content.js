
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "setPlaybackRate") {
        const videospeed = parseFloat(request.speed);
        const video = document.querySelector('video');
        if (video && !isNaN(videospeed) && videospeed > 0) {
            let x=document.querySelector('.bpx-player-ctrl-playbackrate-menu')
            x.innerHTML += "<li class='bpx-player-ctrl-playbackrate-menu-item' data-value='"+ videospeed +"'>" + videospeed +"x</li>"
            video.playbackRate = videospeed; 
            sendResponse({ result: '倍速设置成功'});
        } else {
            sendResponse({ result: '倍速无效'});
        }
    }
});

