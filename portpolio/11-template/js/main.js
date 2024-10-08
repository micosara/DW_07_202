//모든 article 요소들을 변수 items에 저장
const items = document.querySelectorAll("article");

//items의 갯수만큼 반복을 돌면 반복 
for(let el of items){    
     //현재 반복돌고 있는 article요소에 mouseenter 이벤트 발생 시    
     el.addEventListener("mouseenter", e=>{
        //자식인 video요소 재생
        e.currentTarget.querySelector("video").play();  
    });
    
    //현재 반복돌고 있는 article요소에 mouseleave 이벤트 발생 시 
    el.addEventListener("mouseleave", e=>{
        //자식인 video요소 일시정지
        e.currentTarget.querySelector("video").pause();
    });

}