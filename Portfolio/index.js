
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}



var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-190px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyaPd29DDNhBjK5s-5v2agEj5wtFJSz4umYNCPODHsugTYCiN_E6Ie1YfiVLjqLxWygsg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Thank you for your valuable response" 
        setTimeout(function(){
        msg.innerHTML=""
    },5000)
form.reset()
})
    .catch(error => console.error('Error!', error.message))
})


function message(){
    document.getElementById("msg2").innerHTML = "More projects coming soon... Stay Tuned";
    setTimeout(function() {
        document.getElementById("msg2").innerHTML = "";
    }, 2000);
}


//Code injected by live-server

// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}



//--------------------------------------------------------- exp mod--

const imgBx = document.querySelector('.imgBx');
const slides = imgBx.getElementsByTagName('video');
var i =0;
function nextSlide(){
    slides[i].classList.remove('active');
    i = (i+1)%slides.length;
    slides[i].classList.add('active');
}
function previousSlide(){
    slides[i].classList.remove('active');
    i = (i-1+slides.length)%slides.length;
    slides[i].classList.add('active');
}

const contentBx = document.querySelector('.contentBx');
const slidesText = contentBx.getElementsByTagName('div');
var j =0;
function nextSlideText(){
    slidesText[j].classList.remove('active');
    j = (j+1)%slidesText.length;
    slidesText[j].classList.add('active');
}
function previousSlideText(){
    slidesText[j].classList.remove('active');
    j = (j-1+slidesText.length)%slidesText.length;
    slidesText[j].classList.add('active');
}