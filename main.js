let googleLogo = document.getElementById('hplogo');
// parent id is 'lga'
let parent = googleLogo.parentNode.id;
googleLogo.parentNode.removeChild(googleLogo);
console.log(parent);
let img = document.createElement('img')
img.src = "https://lh3.googleusercontent.com/proxy/h2QJevU7_PcXTbi4Kp6oaQ9HBkSLi1FzI4T9weFksbPOgbl_rCdLs3y45wtMMAHYrcKey7iVSEiPb2IQpw"

let parentElement = document.getElementById(parent);
parentElement.appendChild(img)