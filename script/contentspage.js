const contents_container = document.getElementById("contents-container-page");

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

function setContentImages(element, index) {
  element.style.background = `url("${content_img_names[index]}") center/cover no-repeat`;
}
for (let i = 0; i < content_urls.length; i++) {
  const new_card = document.createElement("a");
  new_card.className = "container-img";
  new_card.href = `${content_urls[i]}`;
  const img = document.createElement("span");
  img.className = "img";
  img.id = `img${i}`;
  setContentImages(img, i);
  new_card.appendChild(img);
  const title = document.createElement("span");
  title.className = "title";
  title.innerText = content_title_list[i];
  new_card.appendChild(title);
  const caption = document.createElement("span");
  caption.className = "caption";
  caption.innerText = content_caption_list[i];
  new_card.appendChild(caption);
  contents_container.appendChild(new_card);
}
