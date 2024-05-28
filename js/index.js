document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".comment-img");
  const dots = document.querySelectorAll(".dot > div");
  let currentIndex = 0;

  // Hàm hiển thị slide và dot tương ứng
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.transform = "translateX(0)";
      } else if (i === index - 1 || (index === 0 && i === slides.length - 1)) {
        slide.style.transform = "translateX(-100%)";
      } else if (i === index + 1 || (index === slides.length - 1 && i === 0)) {
        slide.style.transform = "translateX(100%)";
      } else {
        slide.style.transform = "translateX(200%)"; // Move out of view
      }
    });
    dots.forEach((dot, i) => {
      dot.classList.remove("active-dot");
    });
    dots[index].classList.add("active-dot");
  }

  // Bắt sự kiện click cho các dot
  dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  // Tự động chuyển slide sau một khoảng thời gian
  setInterval(() => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  }, 3000);
});

// Lấy ra phần tử bạn muốn hiển thị khi cuộn đến
const elementToShow = document.querySelector(".footer");

// Function để kiểm tra xem phần tử có trong tầm nhìn không
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function để kiểm tra và hiển thị phần tử khi nó trong tầm nhìn
function checkVisibility() {
  if (isElementInViewport(elementToShow)) {
    elementToShow.classList.add("visible");
    // Gỡ bỏ event listener sau khi phần tử đã được hiển thị
    window.removeEventListener("scroll", checkVisibility);
  }
}

// Gọi function để kiểm tra khi trang được tải
checkVisibility();

// Gọi function lại mỗi khi trình duyệt cuộn trang
window.addEventListener("scroll", checkVisibility);

const selectElement = document.getElementById("mySelect");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    selectElement.classList.add("transparent", "fade-in");
  } else {
    selectElement.classList.remove("transparent", "fade-in");
  }
});
$(document).ready(function(){
  // Hiển thị nút khi cuộn xuống dưới 100px
  $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
          $('.roll').fadeIn();
      } else {
          $('.roll').fadeOut();
      }
  });

  // Cuộn lên đầu trang khi bấm nút
  $('.roll').click(function(){
      $('html, body').animate({scrollTop : 0}, 800);
      return false;
  });
});