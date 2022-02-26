import "./css/style.scss"; // 追加
// fontawesomeの設定
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";

// ハンバーガーメニューの操作
const navBar = document.querySelector(".header .header__navBar");
console.log(navBar);
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  navBar.classList.toggle("active");
};
