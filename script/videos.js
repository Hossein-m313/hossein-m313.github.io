const videos_container = document.getElementById("videos-container");

const video_title_list = ["عظمت کیهان", "داستان جهان", "کهکشان راه شیری"];
const video_urls = [
  "../videos/97d117f14a0ddc80a099f8287b1d70e423064820-1080p.mp4",
  "../videos/aaf19ab86c204259752bee689d826c6621618671-720p.mp4",
  "../videos/0f377cabeb42d9292252ee9dfc16669523420440-480p.mp4",
];
const video_poster_urls = [
  "../picture/galaxy.webp",
  "../picture/big bang.webp",
  "default",
]

function setVideos(element, index) {
  element.src = video_urls[index];
}
for (let i = 0; i < video_urls.length; i++) {
  const new_card = document.createElement("div");
  new_card.className = "video-container";
  const video = document.createElement("video");
  video.setAttribute("controls", "true");
  if(video_poster_urls[i] !== "default")video.poster = video_poster_urls[i];
  setVideos(video, i);
  new_card.appendChild(video);
  const title = document.createElement("h4");
  title.innerText = video_title_list[i];
  new_card.appendChild(title);
  videos_container.appendChild(new_card);
}
