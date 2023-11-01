
"use strict";
// Sweet Alert CDN through JS
let script = document.createElement("script");
script.type = 'text/javascript';
script.src="https://unpkg.com/sweetalert/dist/sweetalert.min.js";
document.body.appendChild(script);

// Header

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top dark-theme" id="navbar">
<a class="navbar-brand" href="index.html"> </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="propos.html">À propos</a></li>

   <li class="nav-item">
   <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()" checked>
   </li>
   <div class="bike">
    <img src="">
    </g>
     <defs>
       
       </linearGradient>
     </defs>
   </svg>
 </div>
  </ul>
</div>
</nav>`);

// Footer

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#2b2a2a;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <div class="quotes"    style="text-align:center;">
      <!--SVG code for quote-left icon-->
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5em" height="1.5em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7 21a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2L7 13a4 4 0 1 1 0 8zm10 0a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2l-2 10a4 4 0 1 1 0 8z" fill="#fff" fill-rule="evenodd"/></svg>
      </div>
      <p class="tag" >Si vous avez des propositions, voilà comment me contacter.</p>
    </div>

    
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
          <style>svg#freepik_stories-smiley-face:not(.animated) .animable {opacity: 0;}svg#freepik_stories-smiley-face.animated #freepik--background-complete--inject-31 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) fadeIn;animation-delay: 0.2s;opacity: 0}svg#freepik_stories-smiley-face.animated #freepik--Shadow--inject-31 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) fadeIn;animation-delay: 0.2s;opacity: 0}svg#freepik_stories-smiley-face.animated #freepik--Character--inject-31 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideDown,1.5s Infinite  linear floating;animation-delay: 0.2s,1.2s;opacity: 0}            @keyframes fadeIn {                0% {                    opacity: 0;                }                100% {                    opacity: 1;                }            }                    @keyframes slideDown {                0% {                    opacity: 0;                    transform: translateY(-30px);                }                100% {                    opacity: 1;                    transform: translateY(0);                }            }                    @keyframes floating {                0% {                    opacity: 1;                    transform: translateY(0px);                }                50% {                    transform: translateY(-10px);                }                100% {                    opacity: 1;                    transform: translateY(0px);                }            }        </style>
              <svg class="animated" id="freepik_stories-smiley-face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><g id="freepik--background-complete--inject-31" class="animable" style="transform-origin: 250px 207.723px;"><rect y="382.4" width="500" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 250px 382.525px;" id="elz12x8mjcuy" class="animable"></rect><rect x="359" y="391.92" width="90.9" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 404.45px 392.045px;" id="ele8kmyfspz6b" class="animable"></rect><rect x="306.33" y="389.21" width="24.89" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 318.775px 389.335px;" id="eledad4o6o5d" class="animable"></rect><rect x="349.52" y="401.21" width="38.59" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 368.815px 401.335px;" id="el2n7z79wktuo" class="animable"></rect><rect x="52.46" y="399.53" width="22.64" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 63.78px 399.655px;" id="elvxkkohbhat" class="animable"></rect><rect x="84" y="399.53" width="26.89" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 97.445px 399.655px;" id="el1hzhibkohdp" class="animable"></rect><rect x="178.31" y="395.31" width="46.84" height="0.25" style="fill: rgb(235, 235, 235); transform-origin: 201.73px 395.435px;" id="elhzpvwn605h7" class="animable"></rect><path d="M237,337.8H43.91a5.71,5.71,0,0,1-5.7-5.71V60.66A5.71,5.71,0,0,1,43.91,55H237a5.71,5.71,0,0,1,5.71,5.71V332.09A5.71,5.71,0,0,1,237,337.8ZM43.91,55.2a5.46,5.46,0,0,0-5.45,5.46V332.09a5.46,5.46,0,0,0,5.45,5.46H237a5.47,5.47,0,0,0,5.46-5.46V60.66A5.47,5.47,0,0,0,237,55.2Z" style="fill: rgb(235, 235, 235); transform-origin: 140.46px 196.4px;" id="el92bi8cxpvav" class="animable"></path><path d="M453.31,337.8H260.21a5.72,5.72,0,0,1-5.71-5.71V60.66A5.72,5.72,0,0,1,260.21,55h193.1A5.71,5.71,0,0,1,459,60.66V332.09A5.71,5.71,0,0,1,453.31,337.8ZM260.21,55.2a5.47,5.47,0,0,0-5.46,5.46V332.09a5.47,5.47,0,0,0,5.46,5.46h193.1a5.47,5.47,0,0,0,5.46-5.46V60.66a5.47,5.47,0,0,0-5.46-5.46Z" style="fill: rgb(235, 235, 235); transform-origin: 356.75px 196.4px;" id="elpbqyu6v2yks" class="animable"></path><g id="ellpbg5sgx4tl"><circle cx="122.74" cy="109.59" r="70.27" style="fill: rgb(235, 235, 235); transform-origin: 122.74px 109.59px; transform: rotate(-45deg);" class="animable" id="elqv1umdpmofn"></circle></g><path d="M69.64,99c.76,1.37,2.66,1.61,4.24.54s2.24-3,1.48-4.42-2.66-1.61-4.24-.54S68.88,97.61,69.64,99Z" style="fill: rgb(255, 255, 255); transform-origin: 72.5px 97.0522px;" id="elwyii447cnes" class="animable"></path><path d="M101.26,83.17a3.46,3.46,0,1,0,2.39-3.76A3.19,3.19,0,0,0,101.26,83.17Z" style="fill: rgb(255, 255, 255); transform-origin: 104.671px 82.7102px;" id="ellxn1f8vo9z" class="animable"></path><path d="M107.44,93.87c.85,1.71,4.56,1.29,8.28-.92s6-5.38,5.19-7.08-4.56-1.29-8.28.92S106.59,92.17,107.44,93.87Z" style="fill: rgb(240, 240, 240); transform-origin: 114.169px 89.8721px;" id="eld2400dcgy64" class="animable"></path><path d="M63.38,111.81c.61,1.74,4.25,2,8.13.58s6.54-4,5.93-5.73-4.24-2-8.12-.58S62.78,110.07,63.38,111.81Z" style="fill: rgb(240, 240, 240); transform-origin: 70.4113px 109.237px;" id="elaqe9wyt3w7f" class="animable"></path><path d="M113.55,99.45c-6.45,1.14-22.88,5-37.72,16.07a2.53,2.53,0,0,0-.32,3.34C85.68,134.62,112.74,123,116,102.4,116.3,100.77,115,99.2,113.55,99.45Z" style="fill: rgb(224, 224, 224); transform-origin: 95.5343px 112.803px;" id="ela0xzo5jc17k" class="animable"></path><path d="M90.41,116a12.06,12.06,0,0,1,3.27-.21,9.92,9.92,0,0,1,6.65-4.42,11.72,11.72,0,0,1,10.58,3,30.11,30.11,0,0,1-8.06,7.52,27.74,27.74,0,0,1-7.53,3.41A19.37,19.37,0,0,1,82.73,125C82.27,120.87,85.44,117,90.41,116Z" style="fill: rgb(255, 255, 255); transform-origin: 96.7979px 118.657px;" id="elnfdxc6486h" class="animable"></path><path d="M396,72.5a20.49,20.49,0,0,0,2.94,5,1.36,1.36,0,0,0,2.39-.81c.16-2.36,1.08-4.09,2.68-4.59a3.44,3.44,0,0,1,1.78-.06,1.37,1.37,0,0,0,1.65-1.73c-.15-.42-.3-.84-.48-1.26-2.33-5.67-6.67-9.51-9.7-8.56S393.68,66.82,396,72.5Z" style="fill: rgb(235, 235, 235); transform-origin: 401.034px 69.16px;" id="el6nwl8k97tju" class="animable"></path><g id="elf9faotbb9hs"><circle cx="358.27" cy="103.18" r="57.3" style="fill: rgb(245, 245, 245); transform-origin: 358.27px 103.18px; transform: rotate(-45deg);" class="animable" id="elqi86kkazii9"></circle></g><g id="eltc10qpfw589"><circle cx="110.29" cy="305.94" r="48.64" style="fill: rgb(250, 250, 250); transform-origin: 110.29px 305.94px; transform: rotate(-45deg);" class="animable" id="elbkp2k6by87d"></circle></g><path d="M85.38,339.06a19.78,19.78,0,0,1,4.46,2.57,1.07,1.07,0,0,1-.74,1.91c-2.1,0-3.66.69-4.11,2a2.47,2.47,0,0,0-.06,1.43,1.13,1.13,0,0,1-1.55,1.26c-.38-.13-.75-.27-1.13-.43-5-2.12-8.44-5.78-7.57-8.19S80.33,337,85.38,339.06Z" style="fill: rgb(235, 235, 235); transform-origin: 82.3982px 342.983px;" id="elpaf77a8n7sa" class="animable"></path><path d="M102,306.39a9.92,9.92,0,0,1,4,2.75c.76.86.37,3.4-.6,4a7.59,7.59,0,0,0-3.58,5.7,10.13,10.13,0,0,0,0,2.75c.19,1.54-.53,3.31-1.34,3.13a10,10,0,0,1-1-.28c-4.51-1.6-7.6-6.92-6.9-11.89S97.49,304.8,102,306.39Z" style="fill: rgb(235, 235, 235); transform-origin: 99.4407px 315.337px;" id="el2ptuoqt91zm" class="animable"></path><g id="els31dqseik8"><circle cx="355.9" cy="275.72" r="91.58" style="fill: rgb(240, 240, 240); transform-origin: 355.9px 275.72px; transform: rotate(-45deg);" class="animable" id="el7qamk7i2df9"></circle></g><path d="M338.37,309.46c-2.78,2.94-.1,7.21,6,9.53s13.29,1.8,16.07-1.15.09-7.21-6-9.52S341.15,306.51,338.37,309.46Z" style="fill: rgb(255, 255, 255); transform-origin: 349.404px 313.655px;" id="el8o56g9k4os5" class="animable"></path><path d="M404.76,316.39c.28,3.17,5.35,4.52,11.32,3s10.58-5.31,10.3-8.48-5.35-4.53-11.31-3S404.48,313.21,404.76,316.39Z" style="fill: rgb(255, 255, 255); transform-origin: 415.57px 313.648px;" id="elv9mhsatd7dl" class="animable"></path><path d="M344,338.53c10.72,1.76,32.24,4.77,50.43,4.06a2.29,2.29,0,0,1,1.46,4.13c-11.5,8.63-34.53,13.76-53.83-4.27A2.29,2.29,0,0,1,344,338.53Z" style="fill: rgb(224, 224, 224); transform-origin: 369.084px 346.543px;" id="elb8wu07kh5ik" class="animable"></path></g><g id="freepik--Shadow--inject-31" class="animable" style="transform-origin: 250px 416.24px;"><ellipse id="freepik--path--inject-31" cx="250" cy="416.24" rx="193.89" ry="11.32" style="fill: rgb(245, 245, 245); transform-origin: 250px 416.24px;" class="animable"></ellipse></g><g id="freepik--Character--inject-31" class="animable" style="transform-origin: 200.694px 236.008px;">
    <path d="M268.71,170.68l-4.46-9.58-5.47,9.07s2.67,5.49,8.16,3.57Z" style="fill: rgb(255, 139, 123); transform-origin: 263.745px 167.624px;" id="elcvugl93uee" class="animable"></path><polygon points="257.51 156.82 253.8 163.66 258.78 170.17 264.25 161.1 257.51 156.82" style="fill: rgb(255, 139, 123); transform-origin: 259.025px 163.495px;" id="eloyef4kodfkg" class="animable"></polygon>
                <g id="elwpa580009tp"><circle cx="189.55" cy="204.84" r="105.44" style="fill: #bb86fc; transform-origin: 189.55px 204.84px; transform: rotate(-45deg);" class="animable" id="elswvit1tjfz"></circle></g><g id="eliyrfy2n52e"><circle cx="195.48" cy="182.76" r="79.21" style="fill: rgb(255, 255, 255); opacity: 0.07; transform-origin: 195.48px 182.76px;" class="animable" id="el9jk9mqjah0t"></circle></g><path d="M237.61,143.74c-.15,3-3.79,5.33-8.13,5.11s-7.73-2.86-7.57-5.91,3.79-5.32,8.13-5.1S237.77,140.7,237.61,143.74Z" style="fill: rgb(38, 50, 56); transform-origin: 229.76px 143.345px;" id="elqtnmhnj1lja" class="animable"></path><path d="M156.57,148.74c.58,3-2.41,6.08-6.67,6.91s-8.19-.92-8.77-3.91,2.4-6.09,6.67-6.92S156,145.75,156.57,148.74Z" style="fill: rgb(38, 50, 56); transform-origin: 148.85px 150.235px;" id="elu7g5jhbm0om" class="animable"></path><ellipse cx="146.47" cy="166.1" rx="14.79" ry="5.51" style="fill: #bb86fc; transform-origin: 146.47px 166.1px;" id="el0y5r0oe5z848" class="animable"></ellipse><path d="M251,154.73c.45,2.9-5.49,6.24-13.26,7.46s-14.45-.15-14.91-3.05,5.49-6.23,13.26-7.45S250.57,151.83,251,154.73Z" style="fill: #bb86fc; transform-origin: 236.914px 156.939px;" id="elok3k7m7rsq" class="animable"></path><path d="M170.38,172.57c7.62-2.38,27.56-7.64,49.73-5.63a2.46,2.46,0,0,1,2.17,2.79c-2.46,19.32-38.18,23.28-53,6.76A2.42,2.42,0,0,1,170.38,172.57Z" style="fill: rgb(38, 50, 56); transform-origin: 195.487px 176.67px;" id="elr104jqj61tr" class="animable"></path><g id="el120fn8gk3ngl"><path d="M204.55,175.07a17.4,17.4,0,0,0-3.67,1.53,13.81,13.81,0,0,0-9.63-.4c-4.83,1.4-8.58,4.68-9.87,8.21a41.47,41.47,0,0,0,22.9,1.47c5.39-1.2,10.18-3.55,13.47-6.95C216,175.07,210.5,173.34,204.55,175.07Z" style="fill: #bb86fc; opacity: 0.6; transform-origin: 199.565px 180.622px;" class="animable" id="el19ja9ku3plk"></path></g></g></svg>
          </div>



        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 form-comtainer">
          <div class="form-style-6">
             <div class="form-header">
                <h6 class="display">Me contacter</h6>
              </div>
              <form action="https://formspree.io/f/mzblwzor" method="POST">
                  <input id="name" type="text" name="name" placeholder="Votre nom" required/>
                  <input id="email" type="email" name="email" placeholder="Votre email" required/>                  
                  <textarea id="textArea" name="message" placeholder="Votre message" required></textarea>
              
                  <div id="main">
                    <button id="lnch" type="button" value="Send" >Envoyer</button>
                    <div id="lnch_btn"><i class="fas fa-space-shuttle"></i></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>


    



    
    </div>
    </div>
    <div class="col-sm-5 copyright">
                    <p>
                        Copyright &copy; <span id="current-year">2023</span> Nit & Broinblock & Sindria
                    </p>
                </div>
</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

$(document).ready(function () {
  // updating the color of the swiper bullets (initial update of color)
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));

  //function for the "Scroll To Top" button to detect the footer
  $(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 838
      ) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  });
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

//consistent light mode for page change
if (localStorage.getItem("lightMode") == "light") {
  var app = document.getElementsByTagName("HTML")[0];
  app.setAttribute("light-mode", "light");

  //to add dark theme to nav bar after its been loaded
  window.addEventListener("load", function () {
    var nav = document.getElementById("navbar");
    nav.classList.remove("dark-theme");
    document.getElementById("dark_toggler").checked = false;
  });

  var sc = document.getElementsByClassName("socialicon");
  for (var i = 0; i < sc.length; i++) {
    sc[i].classList.remove("dsc");
  }
} else {
  localStorage.setItem("lightMode", "dark");
}

function toggle_light_mode() {
  console.log(localStorage.getItem("lightMode"));
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.remove("dsc");
    }
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
      sc[i].classList.add("dsc");
    }
  }

  // updating the swiper bullets
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));
}

// function to update swiper bullets
function updateColorOfSwiperBullets(lightMode) {
  document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
    if (lightMode == "light") {
      bullet.style.backgroundColor = "blue";
    } else {
      bullet.style.backgroundColor = "white";
    }
  });
}

window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
});

// Function to remove scroll bar during preload
$(window).on("load", function () {
  setTimeout(function () {
    $(".no-scroll-preload").css("overflow", "visible");
  }, 1000);
  $(".loader-container").fadeOut(2500);
});

//send button animation


$(function submitAnimation() {
  const name = document.querySelector("#name")
  const emailAdress = document.querySelector("#email")
  const text = document.querySelector("#textArea")
  const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  $("#lnch").on("click", function () {

    // Check if the name field is empty or contains a number
    if (name.value == "" || (/\d/.test(name.value))) {
      swal("Error !","Please enter a valid name !","error");
      return;
    }
    // Check if the email field is empty or email is not valid ex: test@@email.com
    else if (emailAdress.value == "" || !(emailPattern.test(emailAdress.value))) {
      swal("Error !","Please enter a valid email !","error");
      return;
    }
    // Check if the message field is empty
    else if (text.value == "") {
      swal("Error !","Please enter a valid message !","error");
      return;
    }
    else {

      setTimeout(function () {
        $("#lnch").addClass("launching").text("Sending");
        $("#lnch_btn").addClass("launching");
      }, 0);
      setTimeout(function () {
        $("#lnch").addClass("launched").text("SENT");
        $("#lnch_btn").addClass("launched");
      }, 1500);
      // Wait for 2.2 seconds so that the send button animation can be fully played before submitting the form
      setTimeout(() => {
        document.querySelector('form').submit();
      }, 2200);
    }
  });
});
