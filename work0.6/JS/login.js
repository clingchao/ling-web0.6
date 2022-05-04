var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/15;
    var y=-event.clientY/20;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}
var Class =function(){
}
Class.f=0;
var zh=document.getElementById('zh');
var mm=document.getElementById('mm');
function login(){
    if(zh.value!="123"||mm.value!="123456"){    
        alert("账号或密码错误");
        return false;
    }
    Class.f=1;
    return true;
}
function l2(){
    if(Class.f==0)
   return true;
   else
   return false;
}
var yx=document.getElementById('yx');
var mm=document.getElementById('mm');
var yzm=document.getElementById('yzm');
var xmm=document.getElementById('xmm');
function registered(){
    if(xmm.value!=mm.value){    
        alert("密码不一致");
        return false;
    }
    else if(yzm.value!="123456")
    {
        alert("验证码错误");
        return false;
    }
    else
    {
        alert("注册成功！");
    }
}
function ForgotPassword(){
    if(xmm.value!=mm.value){    
        alert("密码不一致");
        return false;
    }
    else if(yzm.value!="123456")
    {
        alert("验证码错误");
        return false;
    }
    else
    {
        alert("修改成功！");
    }
}
var con=document.getElementById('con')
function loadoff(){
    con.style.display="none";
}
function loadon(){
    con.style.display="flex";
}
window.onload=function(){
    loadon();
    setTimeout(loadoff,2000);
}

