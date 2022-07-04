/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-sidebar");
    })
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skill_active")
        })

        target.classList.add("skill_active")

        tabs.forEach((tab) => {
          tab.classList.remove("skill_active");
        });

        tab.classList.add("skill_active");
        })
    })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPotfolio = mixitup('.work_container', {
    selectors: {
        target:'.work_card'
    },
    animation: {
        duration:300
    }
})

/*===== Link Active Work =====*/
const linkwork = document.querySelectorAll('.work_item')

function activework() {
    linkwork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l => l.addEventListener('click', activework))

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement)
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

function portfolioItemDetails(portfolioitems) {
    document.querySelector(".pp_thumbnail img").src = portfolioitems.querySelector('.work_img').src;

    document.querySelector('.portfolio_popup-subtitle span').innerHTML = portfolioitems.querySelector('.work_title').innerHTML;

    document.querySelector(".portfolio_popup-body").innerHTML = portfolioitems.querySelector(".potfolio_item-details").innerHTML;
}

document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup)
/*=============== SERVICES MODAL ===============*/
const modelViews = document.querySelectorAll(".service_model"),
  modelBtns = document.querySelectorAll(".service_button"),
  modelClose = document.querySelectorAll(".service_model-close");

let model = function (modelClick) {
    modelViews[modelClick].classList.add("active-modal");
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        model(i)
    })
})

modelClose.forEach((modelClose) => {
    modelClose.addEventListener('click', () => {
        modelViews.forEach((modelview) => {
            modelview.classList.remove("active-modal");
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonial_container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== INPUT ANIMATION ===============*/
const input = document.querySelectorAll('.input');
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus")
    }
}

input.forEach((input) => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", navHighlighter)

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id")
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelector(".nav_menu a[href*=" + sectionId + "]")
              .classList.add("active-link");
        } else {
            document
              .querySelector(".nav_menu a[href*=" + sectionId + "]")
              .classList.remove("active-link");
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/
