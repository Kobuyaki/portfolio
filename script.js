// スクロール時のフェードイン演出
const revealElements = document.querySelectorAll('.scroll-reveal');
const blogP = document.querySelectorAll('blogP')
const blogItem = document.querySelectorAll('blog-item')


const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8; // 画面の8割まで来たら表示

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`${link.innerText} セクションへ移動しました。`);
    });
});

const blogItems = document.querySelectorAll('.blog-item'); // ドットが必要

blogItems.forEach((item) => {
    item.addEventListener('click', () => {

        const content = item.querySelector('.blogP');
        
        if (content) {

            content.classList.toggle('hidden');
        }
        
        console.log('ブログ記事がクリックされました');
    });
});

const pagetop_btn = document.querySelector(".pagetop");
pagetop_btn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}