// === message box scroll === //

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 700) {
        document.querySelector(".slideUp").style.visibility = 'visible';
        document.querySelector(".message_box").style.visibility = 'visible';
    } else if (document.documentElement.scrollTop < 700) {
        document.querySelector(".slideUp").style.visibility = 'hidden';
        document.querySelector(".message_box").style.visibility = 'hidden';
    }
}

// ==== message box 【 help desk 】 window ========= //

const lightBox = document.getElementById("lightBox");

function closeWindow() {
    lightBox.style.display = "none";
}
function popUpWindow() {
    lightBox.style.display = "inherit";
}
function init() {
    document.getElementById('btnClose').onclick = closeWindow;
    document.getElementById('slideUp').onclick = popUpWindow;
}

const submit = document.getElementById('js_btn_submit');

submit.addEventListener("click", function () {
    const show = document.getElementById('js_info_content');
    const input = document.getElementById('js_text_area');

    show.innerHTML = show.innerHTML + `<div class="info_content" id="js_info_content">
    <div class="user_message">
        
        <div class="message">
            <p>${input.value}</p>
        </div>
        <div class="u_head">
        <img src="./image/icon/smile.png" alt="">
    </div>
        `
})

window.addEventListener("load", init, false);