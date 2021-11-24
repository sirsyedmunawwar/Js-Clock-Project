function clock(){
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var amPm=document.getElementById("am");
    
    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();
    var m="AM";
    if(a>12){
        m="PM";
    }
    if(a>12){
        a=a-12;
    }
    if(a==0){
        a=12;
    }
    if(am>12){
        am=am.innerHTML=(PM);
    }
    if(a<10){
        a="0"+ a;
    }
    if(b<10){
        b="0"+ b;
    }
    if(c<10){
        c="0"+c;
    }
    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    amPm.innerHTML=m;
 


}
setInterval(clock,1000);

function settime(){
    
    var wakeuptime=document.getElementById("wakeUpTimeSelector").value;
    var lunchtime=document.getElementById("lunchTimeSelector").value;
    var naptime=document.getElementById("napTimeSelector").value;   
    var hourr=new Date().getHours();
   
    
    if(naptime==hourr){
        document.getElementById("right-bottom-container").style.backgroundImage="url(Assets/goodnight_image.svg)";
        document.getElementById("text-container").innerHTML="GOOD NIGHT !!";
    }
    if(lunchtime==hourr){
        document.getElementById("right-bottom-container").style.backgroundImage="url(Assets/lunch_image.svg)";
        document.getElementById("text-container").innerHTML="LETS HAVE SOME LUNCH !!";
       
    }
    if(wakeuptime==hourr){
        document.getElementById("right-bottom-container").style.backgroundImage="url(Assets/wakeup_image.svg)";
        document.getElementById("text-container").innerHTML="WAKE UP !!";
       
    }
    Makediv();
}
let counter=0;
function Makediv(){
    var container1 = document.createElement("div");                
    var textnode1 = document.createTextNode("");         
    container1.appendChild(textnode1);  
    container1.className="grid-item";
    container1.id="dynamic-block1";

    var container2 = document.createElement("div");                
    var textnode2 = document.createTextNode("");         
    container2.appendChild(textnode2);  
    container2.className="grid-item";
    container2.id="dynamic-block2";

    var container3 = document.createElement("div");                
    var textnode3 = document.createTextNode("");         
    container3.appendChild(textnode3);  
    container3.className="grid-item";
    container3.id="dynamic-block3"

 if(counter==0){
    document.getElementById("grid-container1-id").appendChild(container1);
    var invalue1=document.getElementById("wakeUpTimeSelector");
    var value1=invalue1.options[invalue1.selectedIndex].text;
    document.getElementById("dynamic-block1").innerHTML="Wake up time " + value1 ;
    
    document.getElementById("grid-container1-id").appendChild(container2);
    var invalue2=document.getElementById("lunchTimeSelector");
    var value2=invalue2.options[invalue2.selectedIndex].text;
    document.getElementById("dynamic-block2").innerHTML="Lunch time " + value2 ;

    document.getElementById("grid-container1-id").appendChild(container3);
    var invalue3=document.getElementById("napTimeSelector");
    var value3=invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("dynamic-block3").innerHTML="Nap time " + value3 ;
 }
 counter+=1;
 if(counter!=0){
    var invalue1=document.getElementById("wakeUpTimeSelector");
    var value1=invalue1.options[invalue1.selectedIndex].text;
    document.getElementById("dynamic-block1").innerHTML="Wake up time &nbsp;&nbsp;&nbsp;&nbsp;" + value1 ;
    
    var invalue2=document.getElementById("lunchTimeSelector");
    var value2=invalue2.options[invalue2.selectedIndex].text;
    document.getElementById("dynamic-block2").innerHTML="Lunch time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + value2 ;

    var invalue3=document.getElementById("napTimeSelector");
    var value3=invalue3.options[invalue3.selectedIndex].text;
 }
    document.getElementById("dynamic-block3").innerHTML="Nap time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + value3 ;  
 }

       
     
   
    
   
    
  
   
    




