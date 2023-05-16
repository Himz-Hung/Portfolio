function music(choice){
    var play = document.getElementById('play');
    var title = document.getElementById('title');
    var singer = document.getElementById('singer');
    var pic = document.getElementById('pic');
    play.autoplay="true"
    if(choice == 1){
        play.src="DenVau.mp3";
        title.innerHTML="Title: Mang tiền về cho mẹ";
        singer.innerHTML="Singer: Đen Vâu";
        pic.src="music2.jpg";
        return;
    }
    if(choice == 2){
        play.src="Thunder.mp3";
        title.innerHTML="Title: Thunder";
        singer.innerHTML="Singer: Imagine Dragon";
        pic.src="maxresdefault.jpg";
        return;
    }
    if(choice == 3){
        play.src="Mono.mp3";
        title.innerHTML="Title: Waiting for you";
        singer.innerHTML="Singer: Mono";
        pic.src="music1.jpg";
        return;
    }
}
function choose(){
    alert("ok");
}
window.addEventListener("scroll",show1)

function show1(){
    var a = (window.pageYOffset/document.documentElement.getBoundingClientRect().height)*100
    // alert(a)
    if( a>20 && a<60){
        document.getElementById('about1').style.opacity="1"
    }else{
        document.getElementById('about1').style.opacity="0"
    }
    if(a >50.5){
        document.getElementById("skill1").style.opacity="1"
    }else{
        document.getElementById("skill1").style.opacity="0"
    }
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }