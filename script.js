
        var d = new Date();
        var h = d.getHours();  
    window.onload = function() {
         
        if (h<12){            
            document.body.style.background = "url('image/back2.jpg') no-repeat center top";
            
            document.getElementsByClassName("event")[0].innerHTML="이벤트중";
            document.getElementsByClassName("event")[0].style.color="yellow";              
        }
        else{
            document.body.style.background = "url('image/back3.jpg') no-repeat center top";            
            document.getElementsByClassName("event")[0].innerHTML="이벤트마감"; 
            document.getElementsByClassName("event")[0].style.color="gray"; 

        }
    }

function change() {
 if(h<12) {
  location.href="poster5.html"
    }
else {
  alert("이벤트가 마감되었습니다ㅠㅠ.");
    }
}


 var cnt=0;
    function addCount() {
      cnt=parseInt(document.getElementById("guest").innerHTML);
      cnt=cnt+1;
      document.getElementById("guest").innerHTML=cnt;
      var str=Date();
      var str1=str.replace("GMT+0900 (대한민국 표준시)","");
      document.getElementById("datetime").innerHTML=str1;
    }
