let target = document.querySelector("#dynamic");


function randomString(){
    
 let stringArr=["Learn to HTML...","Learn to CSS...","Learn to Javascript...","Learn to React..."]
 //변수 stringrr에 배열함수 할당

 let selectString = stringArr[Math.floor(Math.random()*stringArr.length)]; //stringArr.length=5 
 //math.random 랜덤한 문자열 하나 할당
 //Math.floor 은 소숫점 아래버림

 let selectStringArr= selectString.split("");//해당문자열을 ("")기준으로 단어하나하나 쪼개져서 배열로 분리

 return selectStringArr;
}

//타이핑 리섹
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}


//한글자씩 텍스트 출력함수
function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift(); //배열 앞에서부터 빼내서 출력
        setTimeout(function(){
         dynamic(randomArr);
        },120);
    } else{
        setTimeout(resetTyping, 1500); 
    }
}



dynamic(randomString());


//console.log(selectStringArr);
//console.log(selectString);   //배열빠지는거 확인용


//커서 깜박임 효과
function blink(){
    target.classList.toggle("active"); //acive 라는 코드가 추가되었다가 삭제되었다가 하는 코드
}

setInterval(blink,500); 
//blink라는 함수를 0.5초마다 실행해라