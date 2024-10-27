// 模拟视频数据
const videos = [
    {
      title: '香蕉君',
      cover: 'banana.png',
      duration: '04:54',
      description: '抽象',
      url: 'banana.mp4'
    },
    {
      title: '保加利亚妖王',
      cover: 'bao.png',
      duration: '03:19',
      description: '抽象',
      url: 'bao.mp4'
    },
    {
      title: '喜羊羊',
      cover: 'xi.png',
      duration: '05:59',
      description: '抽象',
      url: 'xi.mp4'
    },
    {
      title: '蓝露露',
      cover: 'lan.png',
      duration: '02:41',
      description: '抽象',
      url: 'lan.mp4'
    },
  ];
  function displayVideos() {
    const videoListElement = document.getElementById('videoList');
    videos.forEach(video => {
      const videoItem = document.createElement('div');
      videoItem.classList.add('video-item');
      videoItem.innerHTML = `
        <img src="${video.cover}" alt="${video.title}">
        <div class="video-info">
          <h3>${video.title}</h3>
          <p>时长：${video.duration}</p>
          <p>${video.description}</p>
          <button class="download-btn">下载</button>
        </div>
      `;
      videoItem.addEventListener('click', () => {
        playVideo(video.url);
      });
      const downloadBtn = videoItem.querySelector('.download-btn');
      downloadBtn.addEventListener('click', () => {
        downloadVideo(video.url);
      });
      videoListElement.appendChild(videoItem);
    });
  }
  function playVideo(url) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = url;
  }
  function searchVideos() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const videoListElement = document.getElementById('videoList');
    videoListElement.innerHTML = '';
    videos.forEach(video => {
      if (video.title.toLowerCase().includes(searchTerm)) {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
          <img src="${video.cover}" alt="${video.title}">
          <div class="video-info">
            <h3>${video.title}</h3>
            <p>时长：${video.duration}</p>
            <p>${video.description}</p>
            <button class="download-btn">下载</button>
          </div>
        `;
        videoItem.addEventListener('click', () => {
          playVideo(video.url);
        });
        const downloadBtn = videoItem.querySelector('.download-btn');
        downloadBtn.addEventListener('click', () => {
          downloadVideo(video.url);
        });
        videoListElement.appendChild(videoItem);
      }
    });
  }
  function downloadVideo(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  const videoPlayer = document.getElementById('videoPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const speedSelect = document.getElementById('speedSelect');
  const progressBar = document.getElementById('progress');
  playPauseBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
      playPauseBtn.textContent = '暂停';
    } else {
      videoPlayer.pause();
      playPauseBtn.textContent = '播放';
    }
  });
  speedSelect.addEventListener('change', () => {
    videoPlayer.playbackRate = parseFloat(speedSelect.value);
  });
  videoPlayer.addEventListener('timeupdate', () => {
    const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.style.width = progress + '%';
  });
  displayVideos();
  document.getElementById('searchInput').addEventListener('input', searchVideos);