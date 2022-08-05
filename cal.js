let display = document.querySelector(".main_display")
let btn = Array.from(document.getElementsByClassName("button"))


btn.map((x)=>{
    x.addEventListener("click",(y)=>{
    let b= y.target.innerText; 

    if(b=="Del"){
        if(display.innerText=="infinity"){
            display.innerText=""
        }
        display.innerText=display.innerText.slice(0,-1)
    }else if(b=="="){
        display.innerText=eval(display.innerText)
    }else
    if(b=="A/C"){
        display.innerText=""
    } else if(b=="sin"){
        display.innerText=Math.sin(display.innerText)
    }else if(b=="cos"){
        display.innerText=Math.cos(display.innerText)
    }else if(b=="tan"){
        display.innerText=Math.tan(display.innerText)
    }else if(b=="ln2"){
        display.innerText=Math.LN2(display.innerText)
    }else if(b=="ln10"){
        display.innerText=Math.LN10(display.innerText)
    }else if(b=="log"){
        display.innerText=Math.log(display.innerText)
    }else if(b=="√"){
        display.innerText=Math.sqrt(display.innerText)
    }else if(b=="π"){
        display.innerText+=3.142
    }else if(b=="e"){
        display.innerText+= 2.71828
    }else if(b=="Deg"){
        display.innerText+= 57.296

    }else if(b=="rad"){
        display.innerText+=0.01745

    } else if(b=="X!"){

function facto(num,fact=1){
    let num = b;
    if(num<0){
        return error
    }else if(0>num){
        fact += fact*num
        facto(fact+1,num)
    } 
}
 console.log(facto.display.innerText)
}
    
    else{
        display.innerText +=b
    }

    })
})


