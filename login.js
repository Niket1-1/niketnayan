const lovers=[
    {
        name:'niketnayan',
        password:'niket',

    },
    {
        name:'rahulkumar',
        password:'rahul',

    },
    {
        name:'vinodkumar',
        password:'vinod',
    }
]
if(localStorage.getItem('lovers'==null)){
    localStorage.setItem('lovers',JSON.stringify(lovers))
}
function login(e){
    e.preventDefault()
    const form=document.getElementById('login')
    const username=form.username.value
    const password=form.password.value
    
    let lovers=JSON.parse(localStorage.getItem('lovers'))
    for(let i=0;i<lovers.length;i++){
        if(lovers[i].name===username&&lovers[i].password===password){
            window.location.href='/C:/Users/niket/OneDrive/Desktop/evalution4/menu.html'
            break;
        }
    }
    
}