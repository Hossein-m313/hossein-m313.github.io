import { Ball, Wall, Text, sleep } from "./document.js";

const ball_el = document.getElementById("ball");
const wall_el = document.getElementById("ground");
const text_box = document.getElementById("text-box");
const text_animation_container = document.getElementById("text-animation-container");

const contents_container = document.querySelector("#contents-container .contents-box");
const [contents_left_arrow, contents_right_arrow] = document.querySelectorAll("#contents-container svg");
let contents = document.querySelectorAll("#contents-container .container");
let content_images = document.querySelectorAll("#contents-container .container .img");

const videos_container = document.querySelector("#videos .videos-container");
const [videos_left_arrow, videos_right_arrow] = document.querySelectorAll("#videos .videos-container svg");
let video_boxes = [];

let content_index = 3;
let transforming_content_cards = false;
const content_title_list = ["شاخه های اختر شناسی", "تاریخچه علم نجوم", "ابزارالات نجوم", "عمر خورشید", "سیاره قابل سکونت"];
const content_caption_list = [
  "در مورد شاخه های علم نجوم بیشتر بدون",
  "میدونی چه کسی برای ولین بار علم نجوم رو مطرح رد؟",
  "میدونی تلسکوپ چجوری کار میکنه؟ اسطرلاب چطور؟",
  "شنیدی میگن خورشید یه روزی قراره بمیره؟",
  "به نظرت میشه تو سیاره‌ای غیر از زمین زندگی کرد؟",
];
const content_img_names = [
  "../picture/a beauty picture of space.jpg",
  "../picture/history of astronomy.jpg",
  "../picture/some space things.jpg",
  "../picture/an amazing star.jpg",
  "../picture/a planet and a sun.jpg",
];
const content_urls = [
  "./contents/astrology branches.html",
  "./contents/history of astronomy.html",
  "./contents/astronomical instruments.html",
  "./contents/the life of the sun.html",
  "./contents/habitable planet.html",
];
let video_index = 2;
let transforming_video_cards = false;
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

function checkTheLinks(the_page_width){
  if(the_page_width <= 650){
    const links = document.querySelectorAll("menu li a");
    links[1].href = "./videos.html";
    links[2].href = "./contents.html";
  }
  else{
    const links = document.querySelectorAll("menu li a");
    links[1].href = "#videos";
    links[2].href = "#contents";
  }
}
checkTheLinks(window.innerWidth);

function setContentImages(element, index) {
  element.style.background = `url("${content_img_names[index]}") center/cover no-repeat`;
}
for (let i = 0; i < 5; i++) {
  setContentImages(content_images[i + 1], i);
}
setContentImages(content_images[6], 0);
setContentImages(content_images[0], 4);
function setVideos(element, index){
  element.src = video_urls[index];
}
for (let i = 0; i < 3; i++) {
  const new_card = document.createElement("div");
  new_card.className = "container";
  const video = document.createElement("video");
  video.setAttribute("controls", "true");
  if(video_poster_urls[i] !== "default")video.poster = video_poster_urls[i];
  setVideos(video, i);
  new_card.appendChild(video);
  const title = document.createElement("h4");
  title.innerText = video_title_list[i];
  new_card.appendChild(title);
  videos_container.insertBefore(new_card, videos_right_arrow);
  video_boxes.push(new_card);
}

function change_content_cards(direction) {
  if (direction === "right" && !transforming_content_cards) {
    transforming_content_cards = true;
    const [zero, one, two, three, four, five, six] = [...contents];
    const [zero_img, one_img, two_img, three_img, four_img, five_img, six_img] = [...content_images];
    two.style.animation = "right-two-animation 0.8s forwards";
    three.style.animation = "right-three-animation 0.8s forwards";
    four.style.animation = "right-four-animation 0.8s forwards";
    five.style.animation = "right-five-animation 0.8s forwards";
    setTimeout(() => {
      two.style.zIndex = "1";
      three.style.zIndex = "2";
      four.style.zIndex = "3";
      five.style.zIndex = "2";
      two_img.style.animation = "img-two-animation 0.4s forwards";
      three_img.style.animation = "img-three-animation 0.4s forwards";
      four_img.style.animation = "img-four-animation 0.4s forwards";
      five_img.style.animation = "img-five-animation 0.4s forwards";
      six.style.opacity = "1";
      // one.style.opacity = "0";
    }, 400);
    setTimeout(() => {
      content_index += 1;
      if (content_index > content_urls.length) content_index -= content_urls.length;
      let new_content_index = content_index + 3;
      if (new_content_index > content_urls.length) new_content_index -= content_urls.length;
      new_content_index -= 1;
      const new_card = document.createElement("a");
      new_card.className = "container";
      new_card.href = `${content_urls[new_content_index]}`;
      const img = document.createElement("span");
      img.className = "img";
      img.id = `img${new_content_index}`;
      setContentImages(img, new_content_index);
      new_card.appendChild(img);
      const title = document.createElement("span");
      title.className = "title";
      title.innerText = content_title_list[new_content_index];
      new_card.appendChild(title);
      const caption = document.createElement("span");
      caption.className = "caption";
      caption.innerText = content_caption_list[new_content_index];
      new_card.appendChild(caption);
      contents_container.appendChild(new_card);
      zero.remove();
      two.style.animation = "none";
      three.style.animation = "none";
      four.style.animation = "none";
      five.style.animation = "none";
      two_img.style.animation = "none";
      three_img.style.animation = "none";
      four_img.style.animation = "none";
      five_img.style.animation = "none";
      contents = document.querySelectorAll("#contents-container .container");
      content_images = document.querySelectorAll("#contents-container .container .img");
      transforming_content_cards = false;
    }, 800);
  } else if (direction === "left" && !transforming_content_cards) {
    transforming_content_cards = true;
    const [zero, one, two, three, four, five, six] = [...contents];
    const [zero_img, one_img, two_img, three_img, four_img, five_img, six_img] = [...content_images];
    one.style.animation = "left-one-animation 0.8s forwards";
    two.style.animation = "left-two-animation 0.8s forwards";
    three.style.animation = "left-three-animation 0.8s forwards";
    four.style.animation = "left-four-animation 0.8s forwards";
    setTimeout(() => {
      one.style.zIndex = "2";
      two.style.zIndex = "3";
      three.style.zIndex = "2";
      four.style.zIndex = "1";
      five.style.zIndex = "0";
      one_img.style.animation = "img-five-animation 0.4s forwards";
      two_img.style.animation = "img-four-animation 0.4s forwards";
      three_img.style.animation = "img-three-animation 0.4s forwards";
      four_img.style.animation = "img-two-animation 0.4s forwards";
      zero.style.opacity = "1";
      // five.style.opacity = "0";
    }, 400);
    setTimeout(() => {
      content_index -= 1;
      if (content_index < 1) content_index += content_urls.length;
      let new_content_index = content_index - 3;
      if (new_content_index < 1) new_content_index += content_urls.length;
      new_content_index -= 1;
      const new_card = document.createElement("a");
      new_card.className = "container";
      new_card.href = `${content_urls[new_content_index]}`;
      const img = document.createElement("span");
      img.className = "img";
      img.id = `img${new_content_index}`;
      setContentImages(img, new_content_index);
      new_card.appendChild(img);
      const title = document.createElement("span");
      title.className = "title";
      title.innerText = content_title_list[new_content_index];
      new_card.appendChild(title);
      const caption = document.createElement("span");
      caption.className = "caption";
      caption.innerText = content_caption_list[new_content_index];
      new_card.appendChild(caption);
      contents_container.insertBefore(new_card, zero);
      six.remove();
      one.style.animation = "none";
      two.style.animation = "none";
      three.style.animation = "none";
      four.style.animation = "none";
      one_img.style.animation = "none";
      two_img.style.animation = "none";
      three_img.style.animation = "none";
      four_img.style.animation = "none";
      contents = document.querySelectorAll("#contents-container .container");
      content_images = document.querySelectorAll("#contents-container .container .img");
      transforming_content_cards = false;
    }, 800);
  } else {
    return "Error";
  }
}
function change_video_cards(direction) {
  if (direction === "right" && !transforming_video_cards) {
    transforming_video_cards = true;
    video_boxes[0].style.animation = "video-left-animation 0.7s forwards";
    video_boxes[1].style.animation = "video-center-one-animation 0.7s forwards";
    setTimeout(() => {
      video_boxes[0].style.animation = "none";
      video_boxes[1].style.animation = "none";
      video_index -= 1;
      if (video_index < 1) video_index += video_urls.length;
      let new_video_index = video_index - 1;
      if (new_video_index < 1) new_video_index += video_urls.length;
      new_video_index -= 1;
      const new_card = document.createElement("div");
      new_card.className = "container";
      const video = document.createElement("video");
      video.setAttribute("controls", "true");
      if(video_poster_urls[new_video_index] !== "default")video.poster = video_poster_urls[new_video_index];
      setVideos(video, new_video_index);
      new_card.appendChild(video);
      const title = document.createElement("h4");
      title.innerText = video_title_list[new_video_index];
      new_card.appendChild(title);
      videos_container.insertBefore(new_card, video_boxes[0]);
      video_boxes[2].remove();
      video_boxes = document.querySelectorAll("#videos .container");
      transforming_video_cards = false;
    }, 700);
  } else if (direction === "left" && !transforming_video_cards) {
    transforming_video_cards = true;
    video_boxes[2].style.animation = "video-right-animation 0.7s forwards";
    video_boxes[1].style.animation = "video-center-two-animation 0.7s forwards";
    setTimeout(() => {
      video_boxes[2].style.animation = "none";
      video_boxes[1].style.animation = "none";
      video_index += 1;
      if (video_index > video_urls.length) video_index -= video_urls.length;
      let new_video_index = video_index + 1;
      if (new_video_index > video_urls.length) new_video_index -= video_urls.length;
      new_video_index -= 1;
      const new_card = document.createElement("div");
      new_card.className = "container";
      const video = document.createElement("video");
      video.setAttribute("controls", "true");
      if(video_poster_urls[new_video_index] !== "default")video.poster = video_poster_urls[new_video_index];
      setVideos(video, new_video_index);
      new_card.appendChild(video);
      const title = document.createElement("h4");
      title.innerText = video_title_list[new_video_index];
      new_card.appendChild(title);
      videos_container.insertBefore(new_card, videos_right_arrow);
      video_boxes[0].remove();
      video_boxes = document.querySelectorAll("#videos .container");
      transforming_video_cards = false;
    }, 700);
  } else {
    return "Error";
  }
}

const speek_list = ["Do you want to know me?", "Someone named Hossein wrote me", "I have an advanced mechanism", "overall, I hope you like me", "Bye : )"];
const ball = new Ball(ball_el);
const wall = new Wall(wall_el);

wall.applyXY = false;
wall.begin("120px", "4px", -60, 0, 4, 0);

ball.rotate = true;
ball.is_return_power_equal = true;
ball.t = "10";
ball.shoot(90, 500, [0, 180]);

if (localStorage.getItem("start") !== "set") {
  (async function startTextAnimation() {
    const text = new Text();
    await text.initial(text_box, speek_list[0]);
    for (let i = 1; i < speek_list.length; i++) {
      await sleep(1000);
      await text.show(speek_list[i]);
    }
    localStorage.setItem("start", "set");
    text_animation_container.style.animation = "close-text-animation 1s forwards";
    await sleep(2000);
    text_animation_container.style.display = "none";
  })();
} else {
  text_animation_container.style.animation = "close-text-animation 0s forwards";
}

contents_right_arrow.addEventListener("click", () => change_content_cards("right"));
contents_left_arrow.addEventListener("click", () => change_content_cards("left"));

videos_right_arrow.addEventListener("click", () => change_video_cards("right"));
videos_left_arrow.addEventListener("click", () => change_video_cards("left"));

window.addEventListener("resize", (e) => checkTheLinks(e.target.innerWidth));