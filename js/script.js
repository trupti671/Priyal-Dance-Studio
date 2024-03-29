let about=document.getElementById('about');
let accomp=document.getElementById('accomp');
let studio=document.getElementById('studio');

window.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
})

about.addEventListener('click', () =>{
    if(window.innerWidth < 800){
        window.scrollTo(0, 445);
    }else if(window.innerWidth > 800 && window.innerWidth < 1100){
        window.scrollTo(0, 745);
    }else if(window.innerWidth > 1100 && window.innerWidth < 1500){
        window.scrollTo(0, 940);
    }else if(window.innerWidth > 1500 && window.innerWidth < 1600){
        window.scrollTo(0, 1080);
    }else if(window.innerWidth > 1600){
        window.scrollTo(0, 1694);
    }
})

accomp.addEventListener('click', () =>{
    if(window.innerWidth < 800){
        window.scrollTo(0, 1330);
    }else if(window.innerWidth > 800 && window.innerWidth < 1100){
        window.scrollTo(0, 1790);
    }else if(window.innerWidth > 1100 && window.innerWidth < 1500){
    window.scrollTo(0, 2410);
    }else if(window.innerWidth > 1500 && window.innerWidth < 1600){
        window.scrollTo(0, 2544);
    }else if(window.innerWidth > 1500){
        window.scrollTo(0, 4180);
    }
})

studio.addEventListener('click', () =>{
    if(window.innerWidth < 800){
        window.scrollTo(0, 2945);
    }else if(window.innerWidth >= 800 && window.innerWidth < 1100){
        window.scrollTo(0, 3434);
    }else if(window.innerWidth >= 1100 && window.innerWidth < 1500){
    window.scrollTo(0,4392);
    }else if(window.innerWidth > 1500 && window.innerWidth < 1600){
        window.scrollTo(0, 4519);
    }else if(window.innerWidth > 1500){
        window.scrollTo(0, 7456);
    }
})


// s code


var slider=document.getElementById('slider');
var left=document.getElementById('left');
var right=document.getElementById('right');
  
var a=1;
var ml;

if(window.innerWidth < 426){
   ml=-225;

    right.addEventListener("click",()=>{
        if(a==1)
        {
            slider.style.marginLeft=ml+"px";
            a++;
        }
        else if(a==2)
        {
            slider.style.marginLeft=(ml*2)+"px";
            a++;
        }
        else if(a==3)
        {
            slider.style.marginLeft=(ml*3)+"px";  
            a++;
        }
        else if(a==4)
        {
            slider.style.marginLeft=(ml*4) + "px";
            a++; 
        }
        else if(a==5)
        {
            slider.style.marginLeft=(ml*5) + "px";
              
        }
    });
    
    left.addEventListener("click",()=>{
        if(a==5)
        {
            slider.style.marginLeft=(ml*4)+"px";
        a--;
        }
        else if(a==4)
        {
            slider.style.marginLeft=(ml*3)+"px";  
            a--;
        }
        else if(a==3)
        {
            slider.style.marginLeft=(ml*2)+"px";
            a--;
        }
        else if(a==2)
        {
            slider.style.marginLeft=ml+"px";
            a--; 
        }
        else if(a==1){
            slider.style.marginLeft="0px";
             
        }
    });
}else if(window.innerWidth > 427 && window.innerWidth<1023){
      
    ml=-280;

    right.addEventListener("click",()=>{
        if(a==1)
        {
            slider.style.marginLeft=ml+"px";
            a++;
        }else if(a==2)
        {
            slider.style.marginLeft=(ml*2)+"px";
            a++;
        }else if(a==3)
        {
            slider.style.marginLeft=(ml*3)+"px";  
            a++;
        }
        else if(a==4)
        {
            slider.style.marginLeft=(ml*4) + "px";
        }
    });

    left.addEventListener("click",()=>{
        if(a==4)
        {
            slider.style.marginLeft=(ml*3)+"px";  
            a--;
        }
        else if(a==3)
        {
            slider.style.marginLeft=(ml*2)+"px";
            a--;
        }
        else if(a==2)
        {
            slider.style.marginLeft=ml+"px";
            a--; 
        }
        else if(a==1){
            slider.style.marginLeft="0px";
             
        }
    });
}else if(window.innerWidth>=1024 && window.innerWidth < 1439){
      
    ml=-375;

    right.addEventListener("click",()=>{
        if(a==1)
        {
            slider.style.marginLeft=ml+"px";
            a++;
        }else if(a==2)
        {
            slider.style.marginLeft=(ml*2)+"px";
            a++;
        }else if(a==3)
        {
            slider.style.marginLeft=(ml*3)+"px";  
            a++;
        }else if(a==4)
        {
            slider.style.marginLeft=(ml*4) + "px";
        }


    });

    left.addEventListener("click",()=>{
        if(a==4)
        {
            slider.style.marginLeft=(ml*3)+"px";  
            a--;
        }
        else if(a==3)
        {
            slider.style.marginLeft=(ml*2)+"px";
            a--;
        }
        else if(a==2)
        {
            slider.style.marginLeft=ml+"px";
            a--; 
        }
        else if(a==1){
            slider.style.marginLeft="0px";
             
        }
    });
}else if(window.innerWidth>=1440){
    ml=-388;
    right.addEventListener("click",()=>{
        if(a==1)
        {
            slider.style.marginLeft=ml+"px";
            a++;
        }else if(a==2)
        {
            slider.style.marginLeft=(ml*2)+"px";
            a++;
        }else if(a==3)
        {
            slider.style.marginLeft=(ml*3)+"px";  
            a++;
        }
        
        else if(a==4)
        {
            slider.style.marginLeft="0px";
            a=1; 
        }
    })
    
    
    left.addEventListener("click",()=>{
        
        if(a==4)
        {
            slider.style.marginLeft=(ml*2)+"px";  
            a--;
        }
        else if(a==3)
        {
            slider.style.marginLeft=ml+"px";
            a--;
        }
        else if(a==2)
        {
            slider.style.marginLeft="0px";
            a--; 
        }
        else if(a==1){
            slider.style.marginLeft=(ml*3)+"px";
            a=4; 
        }
    })
}
