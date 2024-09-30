import Anime from "./anime.js";

//variables
let posArr = [];
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
for (let sec of secArr) posArr.push(sec.offsetTop);

//scroll btn evnet
scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		new Anime(window, { scroll: posArr[idx] });
	});
});

//window scroll event
window.addEventListener("scroll", () => {
	const scroll = window.scrollY;
	posArr.forEach((pos, idx) => {
		//if (scroll >= pos) [scroll_btns, secArr].forEach(arr => activation(arr, idx));
		if (scroll >= pos) {
			activation(scroll_btns, idx);
			activation(secArr, idx);
		}
	});
});

//activation func
function activation(arrEl, index) {
	//arrEl.forEach(el => el.classList.remove("on"));
	for (const el of arrEl) el.classList.remove("on");
	arrEl[index].classList.add("on");
}

/*
문제점1 -특정 위치로 슼롤 이동 후 브라우저 리사이즈시 버튼 활성화 위치 어긋남 문제
문제점2 - 브라우저를 축소한 상태에서는 마지막 버튼 비활성화 문제
문제점3 -브라우저 축소하고 세로 스크롤 이동 버튼 클릭시 이상한 위치로 이동이 되는 문제
*/
