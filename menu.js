function  submit(){
    
    setInterval(function(){
        message.innerHTML=alert("your order is accepted")
},0)
setInterval(function(){
    message.innerHTML=alert("your order is being cooked")
},3000)
setInterval(function(){
    message.innerHTML=alert("your order is ready")
},8000)
setInterval(function(){
    message.innerHTML=alert("out for delivery")
},10000)
setInterval(function(){
    message.innerHTML=alert("order delivered")
},13000)
    
}
submit()