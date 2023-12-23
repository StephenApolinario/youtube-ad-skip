function skip_ad(video) {
  var button = document.querySelector(".ytp-ad-skip-button-modern");

  video.currentTime += 99999;
  if (button) {
    button.click();
  }
}

function ad_check() {
  var videoAdsDiv = document.querySelector(".ytp-ad-player-overlay");
  var video = document.querySelector(".video-stream");

  if (videoAdsDiv && video) {
    skip_ad(video);
  }
}

setInterval(function () {
  ad_check();
}, 50);
