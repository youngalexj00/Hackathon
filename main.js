let head = document.querySelector("head");
let jQueryScript = document.createElement("script");
jQueryScript.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
head.appendChild(jQueryScript);

$(document).ready(function () {
});

let googleLogo = document.getElementById('hplogo');
// parent id is 'lga'
let parent = googleLogo.parentNode.id;
googleLogo.parentNode.removeChild(googleLogo);
let img = document.createElement('img')
img.src = "https://lh3.googleusercontent.com/proxy/h2QJevU7_PcXTbi4Kp6oaQ9HBkSLi1FzI4T9weFksbPOgbl_rCdLs3y45wtMMAHYrcKey7iVSEiPb2IQpw"

let parentElement = document.getElementById(parent);
parentElement.appendChild(img);


function quotes() {
    let quotesArr = ['If you want to achieve greatness stop asking for permission." --Anonymous', '"Things work out best for those who make the best of how things work out." --John Wooden']
    let random = Math.floor(Math.random() * quotesArr.length);
    alert(quotesArr[random]);
}

$("body").css({ backround: black });
