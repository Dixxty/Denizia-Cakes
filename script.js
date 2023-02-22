window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$('.carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  arrows: false,
});

$('.prev-arrow').click(function(){
  $('.carousel').slick('slickPrev');
});

$('.next-arrow').click(function(){
  $('.carousel').slick('slickNext');
});

$(window).on('resize', function() {
  var windowWidth = $(window).width();
  if (windowWidth < 1443) {
    $('.carousel').slick('slickSetOption', 'slidesToShow', 3);
    $('.carousel').slick('slickSetOption', 'variableWidth', false);
  } else {
    $('.carousel').slick('slickSetOption', 'slidesToShow', 4);
  }
});

const btn = document.querySelector("#sidebar-btn");
const sidebar = document.querySelector("#sidebar");
const closeBtn = document.querySelector("#close-btn");
const content = document.querySelector("#content");

btn.addEventListener("click", function() {
  sidebar.classList.toggle("open");
  content.classList.toggle("open");
});

closeBtn.addEventListener("click", function() {
  sidebar.classList.remove("open");
  content.classList.remove("open");
}); 

const sidebarBtn = document.getElementById("sidebar-btn");
const closebtn = document.getElementById("close-btn");
const sideBar = document.getElementById("sidebar");
const containerimgbg = document.getElementById("mainlogo");
const containerinitialtext = document.getElementById("container-initialtext");

sidebarBtn.addEventListener("click", function() {
  sidebar.style.display = "block";
  containerinitialtext.classList.add("open");
});

closeBtn.addEventListener("click", function() {
  sidebar.style.display = "none";
  containerinitialtext.classList.remove("open");
});

sidebarBtn.addEventListener("click", function() {
  sidebar.style.display = "block";
  containerimgbg.classList.add("open");
});

closeBtn.addEventListener("click", function() {
  sidebar.style.display = "none";
  containerimgbg.classList.remove("open");
});

sidebarBtn.addEventListener("click", function() {
  sidebar.style.display = "block";
  sidebar-btn.classList.add("open");
});

closeBtn.addEventListener("click", function() {
  sidebar.style.display = "none";
  sidebar-btn.classList.remove("open");
});

const topBtn = document.querySelector("#topBtn");

  topBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.onscroll = function() {
    if (window.pageYOffset > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  document.querySelector("input[type='text']").addEventListener("focus", function() {
    this.setSelectionRange(4, 4);
    this.select();
  });
  
  
  
  
  












