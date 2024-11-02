document.getElementById('setSpeedButton').addEventListener('click', () => {
    const speedInput = document.getElementById('speedInput').value;
    const speed = parseFloat(speedInput);

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "setPlaybackRate", speed: speed }, (response) => {
        alert(response.result);
        });
    });
});
