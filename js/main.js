const layer = document.querySelector('.layer');
const mobileNav = document.querySelector('#mobilenav');
const arrow = document.querySelectorAll('.arrow');
const hasChild = document.querySelectorAll('.has-child');
const subMenu = document.querySelectorAll('.sub-menu');
const showMenu = document.querySelector('#show-menu');


// Mobile nav-menu
showMenu.addEventListener('click', () => {
    mobileNav.classList.add('opened')
})

layer.addEventListener('click', () => {
    mobileNav.classList.remove('opened');
})

arrow.forEach((arr, idx) => {
    let checkSubMenu = false;
    arr.addEventListener('click', () => {
        console.log("aaa")
        checkSubMenu = !checkSubMenu;
        subMenu[idx].style.display = checkSubMenu ? "block" : "none";
        hasChild[idx].style.height = checkSubMenu ? `${(subMenu[idx].children.length+1)*40+"px"}` : "40px";
        checkSubMenu ? hasChild[idx].classList.add('sub-menu-open') : hasChild[idx].classList.remove('sub-menu-open');
        checkSubMenu ? hasChild[idx].classList.add('sub-menu-active') : hasChild[idx].classList.remove('sub-menu-active')

    })
});

// Banner slide
const btnLeft = document.querySelector('.banner-btn-left');
const btnRight = document.querySelector('.banner-btn-right');
const bannerImg = document.querySelectorAll('.banner-img');

let positionBanner = 0;
let bannerAmount = bannerImg.length - 1;
let intervalBanner;

function setItvBanner() {
    intervalBanner = setInterval(() => {
        positionBanner++;
        if (positionBanner > bannerAmount) {
            positionBanner = 0;
        }
        bannerImg.forEach((banner, idx) => {
            if (idx != positionBanner) {
                banner.classList.remove('banner-active')
            } else {
                banner.classList.add('banner-active')
            }
        })
    }, 1500)
}

setItvBanner();

btnLeft.addEventListener('click', () => {
    positionBanner--;
    if (positionBanner < 0) {
        positionBanner = bannerAmount;
    }
    bannerImg.forEach((banner, idx) => {
        if (idx != positionBanner) {
            banner.classList.remove('banner-active')
        } else {
            banner.classList.add('banner-active')
        }
    })
    clearInterval(intervalBanner);
    setItvBanner();
})

btnRight.addEventListener('click', () => {
    positionBanner++;
    if (positionBanner > bannerAmount) {
        positionBanner = 0;
    }
    bannerImg.forEach((banner, idx) => {
        if (idx != positionBanner) {
            banner.classList.remove('banner-active')
        } else {
            banner.classList.add('banner-active')
        }
    })
    clearInterval(intervalBanner);

    setItvBanner();

})

// Product - Shoe
const productShoes = document.querySelectorAll('.product-shoes');
const btnShoesRight = document.querySelector('.shoes-btn-right');
const btnShoesLeft = document.querySelector('.shoes-btn-left');
const rowShoes = document.querySelector('.row-shoes');
const containerShoes = document.querySelector('.container-shoes');

let positionShoe = 0;
let translateX = 0;

function btnShoesActive(positionShoe) {
    let widthShoe = productShoes[0].offsetWidth;
    let widthContainerShoes = containerShoes.offsetWidth;
    let shoeInScreen = widthContainerShoes / widthShoe;
    if (positionShoe == 0) {
        btnShoesLeft.classList.add('shoes-btn-none-active');
    }
    if (positionShoe == (productShoes.length - shoeInScreen)) {
        btnShoesRight.classList.add('shoes-btn-none-active');
    }
    if (positionShoe > 0 && positionShoe < (productShoes.length - shoeInScreen)) {
        btnShoesLeft.classList.remove('shoes-btn-none-active');
        btnShoesRight.classList.remove('shoes-btn-none-active');
    }
}

btnShoesRight.addEventListener('click', () => {
    let widthShoe = productShoes[0].offsetWidth;
    let widthContainerShoes = containerShoes.offsetWidth;
    positionShoe++;
    let widthRowShoes = productShoes.length * widthShoe;
    translateX = positionShoe * widthShoe;
    btnShoesActive(positionShoe);
    if (translateX <= widthRowShoes - widthContainerShoes) {
        rowShoes.style.transform = `translateX(${-translateX}px)`;
    } else {
        positionShoe--;
    }
})

btnShoesLeft.addEventListener('click', () => {
    let widthShoe = productShoes[0].offsetWidth;
    positionShoe--;
    translateX = positionShoe * widthShoe;
    btnShoesActive(positionShoe);
    if (translateX >= 0) {
        rowShoes.style.transform = `translateX(${-translateX}px)`;
    } else {
        positionShoe++;

    }
})

// Product - Phu Kien

const productPhuKien = document.querySelectorAll('.product-phu-kien');
const btnPhuKienRight = document.querySelector('.phu-kien-btn-right');
const btnPhuKienLeft = document.querySelector('.phu-kien-btn-left');
const rowPhuKien = document.querySelector('.row-phu-kien');
const containerPhuKien = document.querySelector('.container-phu-kien');

let positionPhuKien = 0;
let translatePhuKienX = 0;

function btnPhuKienActive(positionShoe) {
    let widthPhuKien = productPhuKien[0].offsetWidth;
    let widthContainerPhuKien = containerPhuKien.offsetWidth;
    let phuKienInScreen = widthContainerPhuKien / widthPhuKien;
    if (positionPhuKien == 0) {
        btnPhuKienLeft.classList.add('phu-kien-btn-none-active');
    }
    if (positionPhuKien == (productPhuKien.length - phuKienInScreen)) {
        btnPhuKienRight.classList.add('phu-kien-btn-none-active');
    }
    if (positionPhuKien > 0 && positionPhuKien < (productPhuKien.length - phuKienInScreen)) {
        btnPhuKienLeft.classList.remove('phu-kien-btn-none-active');
        btnPhuKienRight.classList.remove('phu-kien-btn-none-active');
    }
}

btnPhuKienRight.addEventListener('click', () => {
    let widthPhuKien = productPhuKien[0].offsetWidth;
    let widthContainerPhuKien = containerPhuKien.offsetWidth;
    positionPhuKien++;
    let widthRowPhuKien = productPhuKien.length * widthPhuKien;
    translatePhuKienX = positionPhuKien * widthPhuKien;
    btnPhuKienActive(positionPhuKien);
    if (translatePhuKienX <= widthRowPhuKien - widthContainerPhuKien) {
        rowPhuKien.style.transform = `translateX(${-translatePhuKienX}px)`;
    } else {
        positionPhuKien--;
    }
})

btnPhuKienLeft.addEventListener('click', () => {
    let widthPhuKien = productPhuKien[0].offsetWidth;
    positionPhuKien--;
    translatePhuKienX = positionPhuKien * widthPhuKien;
    btnPhuKienActive(positionPhuKien);
    if (translatePhuKienX >= 0) {
        rowPhuKien.style.transform = `translateX(${-translatePhuKienX}px)`;
    } else {
        positionPhuKien++;

    }
})

// All products

const productAllProduct = document.querySelectorAll('.product-all-product');
const btnAllProductRight = document.querySelector('.all-product-btn-right');
const btnAllProductLeft = document.querySelector('.all-product-btn-left');
const rowAllProduct = document.querySelector('.row-all-product');
const containerAllProduct = document.querySelector('.container-all-product');

let positionAllProduct = 0;
let translateAllProductX = 0;

function btnAllProductActive(positionShoe) {
    let widthAllProduct = productAllProduct[0].offsetWidth;
    let widthContainerAllProduct = containerAllProduct.offsetWidth;
    let AllProductInScreen = widthContainerAllProduct / widthAllProduct;
    if (positionAllProduct == 0) {
        btnAllProductLeft.classList.add('all-product-btn-none-active');
    }
    if (positionAllProduct == (productAllProduct.length - AllProductInScreen)) {
        btnAllProductRight.classList.add('all-product-btn-none-active');
    }
    if (positionAllProduct > 0 && positionAllProduct < (productAllProduct.length - AllProductInScreen)) {
        btnAllProductLeft.classList.remove('all-product-btn-none-active');
        btnAllProductRight.classList.remove('all-product-btn-none-active');
    }
}

btnAllProductRight.addEventListener('click', () => {
    let widthAllProduct = productAllProduct[0].offsetWidth;
    let widthContainerAllProduct = containerAllProduct.offsetWidth;
    positionAllProduct++;
    let widthRowAllProduct = productAllProduct.length * widthAllProduct;
    translateAllProductX = positionAllProduct * widthAllProduct;
    btnAllProductActive(positionAllProduct);
    if (translateAllProductX <= widthRowAllProduct - widthContainerAllProduct) {
        rowAllProduct.style.transform = `translateX(${-translateAllProductX}px)`;
    } else {
        positionAllProduct--;
    }
})

btnAllProductLeft.addEventListener('click', () => {
    let widthAllProduct = productAllProduct[0].offsetWidth;
    positionAllProduct--;
    translateAllProductX = positionAllProduct * widthAllProduct;
    btnAllProductActive(positionAllProduct);
    if (translateAllProductX >= 0) {
        rowAllProduct.style.transform = `translateX(${-translateAllProductX}px)`;
    } else {
        positionAllProduct++;

    }
})

// Khach hang

const ctmContainer = document.querySelector('.custommer-container')
const ctmContainerImg = document.querySelector('.custommer-container-img')
const containerImg = document.querySelectorAll('.container-img')
const btnCustommerLeft = document.querySelector('.btn-custommer-left')
const btnCustommerRight = document.querySelector('.btn-custommer-right')
const commentContainer = document.querySelector('.custommer-comment-container')
const comment = document.querySelectorAll('.comment')

let counter = 2
let counterCmt = 1

ctmContainerImg.style.transform = 'translateX(' + (-containerImg[1].offsetWidth) + 'px)'
commentContainer.style.transform = 'translateX(' + (-comment[0].offsetWidth) + 'px)'

btnCustommerRight.addEventListener('click', () => {
    let widthContainerImg = containerImg[1].offsetWidth
    if (counter >= containerImg.length - 2) {
        return
    }
    ctmContainerImg.style.transition = 'transform 0.3s'
    counter++
    console.log(counter)
    custommerActive(counter)
    ctmContainerImg.style.transform = 'translateX(' + (-(counter - 1) * widthContainerImg) + 'px)'

    counterCmt++
    commentContainer.style.transition = 'transform 0.3s'
    commentContainer.style.transform = 'translateX(' + (-(counterCmt) * comment[0].offsetWidth) + 'px)'
})

btnCustommerLeft.addEventListener('click', () => {
    let widthContainerImg = containerImg[1].offsetWidth
    if (counter <= 1) {
        return
    }
    ctmContainerImg.style.transition = 'transform 0.3s'
    counter--
    console.log(counter)
    custommerActive(counter)
    ctmContainerImg.style.transform = 'translateX(' + (-(counter - 1) * widthContainerImg) + 'px)'

    counterCmt--
    commentContainer.style.transition = 'transform 0.3s'
    commentContainer.style.transform = 'translateX(' + (-(counterCmt) * comment[0].offsetWidth) + 'px)'
})

commentContainer.addEventListener('transitionend', () => {
    if (comment[counterCmt].id === 'first-comment') {
        commentContainer.style.transition = 'none'
        counterCmt = comment.length - 2
        commentContainer.style.transform = 'translateX(' + (-(counterCmt) * comment[0].offsetWidth) + 'px)'
    }
    if (comment[counterCmt].id === 'last-comment') {
        commentContainer.style.transition = 'none'
        counterCmt = 1
        commentContainer.style.transform = 'translateX(' + (-(counterCmt) * comment[0].offsetWidth) + 'px)'
    }
})

ctmContainerImg.addEventListener('transitionend', () => {
    let widthContainerImg = containerImg[1].offsetWidth
    if (containerImg[counter].id === 'last') {
        ctmContainerImg.style.transition = 'none'
        counter = 2
        ctmContainerImg.style.transform = 'translateX(' + (-(counter - 1) * widthContainerImg) + 'px)'
        custommerActive(counter)
    }
    if (containerImg[counter].id === 'first') {
        ctmContainerImg.style.transition = 'none'
        counter = containerImg.length - 3
        ctmContainerImg.style.transform = 'translateX(' + (-(counter - 1) * widthContainerImg) + 'px)'
        custommerActive(counter)
    }
})

function custommerActive(counter) {
    containerImg[counter].classList.add('custommer-active')
    containerImg[counter].classList.remove('custommer-right')
    containerImg[counter].classList.remove('custommer-left')
    containerImg[counter - 1].classList.add('custommer-left')
    containerImg[counter - 1].classList.remove('custommer-active')
    containerImg[counter - 1].classList.remove('custommer-right')
    containerImg[counter + 1].classList.add('custommer-right')
    containerImg[counter + 1].classList.remove('custommer-active')
    containerImg[counter + 1].classList.remove('custommer-left')
}

// Dang ki
const btnDangNhap = document.querySelector('#btn-dang-nhap');
const modal = document.querySelector('.modal');
const btnCloseDangNhap = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

function showDangNhap() {
    modal.classList.add('open');
}

function hideDangNhap() {
    modal.classList.remove('open');
}

btnDangNhap.addEventListener('click', showDangNhap);
btnCloseDangNhap.addEventListener('click', hideDangNhap);
modal.addEventListener('click', hideDangNhap);
modalContainer.addEventListener('click', (e) => {
    e.stopPropagation();
})