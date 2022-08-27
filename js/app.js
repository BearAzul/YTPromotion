// Responsive Navbar on Mobile
const btnMenu = document.querySelector(".burger");
const navlink = document.querySelector(".nav_link");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  navlink.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (e.target != btnMenu && e.target != navlink) {
    btnMenu.classList.remove("active");
    navlink.classList.remove("active");
  }
});

// To-home button
window.onscroll = () => {
  const toTop = document.querySelector(".to-home");
  const navbar = document.querySelector(".navbar");
  if (window.pageYOffset) {
    toTop.classList.add("active");
    navbar.classList.add("active");
  } else {
    toTop.classList.remove("active");
    navbar.classList.remove("active");
  }
};

// Read More Event
const readMore = document.getElementById("readMore");
const btnMore = document.getElementById("btnMore");

btnMore.addEventListener("click", () => {
  if (readMore.style.display == "block") {
    readMore.style.display = "none";
    btnMore.innerHTML = "read more";
  } else {
    readMore.style.display = "block";
    btnMore.innerHTML = "read less";
  }
});

// Cursor Configuration
const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// Content Gallery
const videoThumbnails = document.querySelectorAll(
  ".wrapp .content #viewMore .videos .thumbnail"
);
const videoPlayer = document.querySelector(
  ".wrapp .main-content .videos iframe"
);
const videoTitle = document.querySelector(".wrapp .main-content .video-title");

const showVideo = (videoId, title) => {
  let videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  videoPlayer.setAttribute("src", videoUrl);
  videoTitle.innerHTML = title;
};

videoThumbnails.forEach((e) => {
  e.addEventListener("click", () => {
    showVideo(e.dataset.id, e.dataset.title);
  });
});

// Switch Dark mode and Light mode
const themeMode = document.querySelector(".dark-light-mode #toggle");
const html = document.querySelector("html");

themeMode.addEventListener("click", () => {
  if (themeMode.checked) {
    html.classList.add("light");
    localStorage.theme = "light";
  } else {
    html.classList.remove("light");
    localStorage.theme = "dark";
  }
});

if (
  localStorage.theme === "light" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: light)").matches)
) {
  themeMode.checked = true;
} else {
  themeMode.checked = false;
}

// slide
const skillBtn = document.querySelector("#skill");
const profileBtn = document.querySelector("#profile");
const skill = document.querySelector(".slide_container");

skillBtn.addEventListener("click", (e) => {
  if (e.target.checked) {
    skill.style.marginLeft = "-665px";
  }
});
profileBtn.addEventListener("click", (e) => {
  if (e.target.checked) {
    skill.style.marginLeft = "0";
  }
});
