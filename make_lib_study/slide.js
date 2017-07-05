//1. 클래스와 아이디 선택자 사용하기
//2. 각객체 지정하기
// 기본 변수 선언 해야 할것 Start
var doc = window.document;
var btnStart = doc.getElementById('btnStart');
var btnStop = doc.getElementById('btnStop');
var slide = doc.getElementsByClassName('sliders')[0];
console.log(slide);
var slideInner = slide.getElementsByClassName('slider_inner');
var slideList = slideInner[0].getElementsByTagName('li');
var slideListCount = slideList.length;
var num = 0;
var isPlaying = false; //현재 플레잉 여부
var direction = 0; //슬라이드 방향체크 0일경우 next, 1일경우 prev
console.log(slideInner);
console.log(slideList);
console.log(slideListCount);
function innerWidth() { //슬라이드 리스트 크기 li갯수*300
    slideInner[0].style.width = 300 * slideListCount + 'px';
}
innerWidth();
// 기본 변수 선언 해야 할것 End


function slideMove(){
    function moveNext(){  //next 무브
        num ++;
        console.log(num);
        slideInner[0].style.left = -(num*300) +'px';
        if(num >= slideListCount){
            num = 0;
            slide.style.display = 'none';
            slideInner[0].style.left = 0+'px';
            slide.style.display = 'block';
        }
        return num;
    }
    function movePrev(){  //prev 무브
        num --;
        console.log(num);
        slideInner[0].style.left = -(num*300) +'px';
        if(num < 0){
            num = 4;
            slide.style.display = 'none';
            slideInner[0].style.left = -((slideListCount-1)*300)+'px';
            slide.style.display = 'block';
        }
        return num;
    }
    var timer = setInterval(function(){  //타이머
        if(direction === 0){
            moveNext();
        }else{
            movePrev();
        }
    },3000);

    btnStop.onclick =function(){  // 스탑버튼 클릭 이벤트
        isPlaying = false;
        console.log('stop');
        clearInterval(timer);
    };
}
// var slide1 = new slideMove();
// console.log(slide1);
btnStart.onclick = function(){  //스타트버튼 클릭 이벤트
    if(isPlaying === false){
        isPlaying = true;
        console.log('start');
        slideMove();
    }
};


function a(){
    var b = {
        test1:'test1',
        test2:'test2'
    }
}
console.log(a);
var a1 = new a();
// a1.prototype.
console.log(a1);


function Test(){
    var a ="a";
    console.log("aaaaa : ", a);
    this.b = "b";
    this.c = function(){
        return a;
    }
}

var test = new Test(); // b,c
{
    b: "b",
    c: function(){
        return a;
    }
}
console.log(test.b);