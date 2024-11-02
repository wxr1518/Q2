document.getElementById('setspeed').addEventListener('click', () => {
    const speed = parseFloat(document.getElementById('speedinput').value);
    if (!isNaN(speed) && speed > 0) {
        setVideoSpeed(speed);
    } else {
        alert('请输入有效的倍速:');
    }
});

function setVideoSpeed(speed) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: changeSpeed,
            args: [speed]
        });
    });
}

function changeSpeed(speed) {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => video.playbackRate = speed);
}
