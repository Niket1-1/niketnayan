function signup(el){
    el.preventDefault()

    let form=document.getElementById('signup')
    let username=form.username.value
    let email=form.email.value
    let password=form.password.value
    let mobnumber=form.mobnumber.value
    let userlist={
         username,
        email,
        password,
        mobnumber


    }
    let arr1;
    arr1=localStorage.getItem('newusers')
    if(arr1==null){

        arr1=[]
    }else{
        arr1=JSON.parse(localStorage.getItem('newusers'))
    }
    arr.push(userlist)
    localStorage.setItem('newusers',JSON.stringify(arr1))
}
