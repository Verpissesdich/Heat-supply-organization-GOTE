
// скрипт на JS для работы favicona из 26ти катинок
let counter = 1;
let faviconImgs = 26;
let favicons = document.querySelectorAll("link");

function animateFavicon() {
    favicons.forEach(item =>{
       if(item.getAttribute("rel").indexOf("icon") >= 0){
           item.setAttribute("href", "images/favicon/" + counter + ".png");
       }
    });
    counter++;
    if(counter == faviconImgs){ counter = 1; }

}

setInterval(animateFavicon, 100);


