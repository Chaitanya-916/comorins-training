
if(!localStorage.getItem("user-details")){
    localStorage.setItem("user-details",JSON.stringify([]));
}
let user_details = JSON.parse(localStorage.getItem("user-details"));

function signUp(){  
    let details ={
        name : document.getElementById('name').value,
        number : document.getElementById('number').value,
        password : document.getElementById('password').value,
        password1 : document.getElementById('confirm-password').value,      
    };
    if(details.password == details.password1){
        user_details.push(details);
        localStorage.setItem("user-details",JSON.stringify(user_details));
        window.location.href = "index.html";
    }
    else{
        alert("give same password to each");
    }
}

function logIn(){    
    localStorage.setItem('local-status',false)
    let user_id ={
        number : document.getElementById('user-id').value,
        password : document.getElementById('password-log').value,
    };
    let log_details = JSON.parse(localStorage.getItem("user-details")); 
    let alert_state;
    for(let i=0;i<user_details.length;i++){  

        if(user_id.number  === log_details[i].number && user_id.password === log_details[i].password){
            localStorage.setItem('local-status',true)
            window.location.href = "index.html";
            alert_state = false;
            break;
        }
        else if(!(user_id.number  === log_details[i].number && user_id.password === log_details[i].password)){
            alert_state = true;
        }    
    }
    if(alert_state){
        alert("Wrong user number password");
    }
}
    let local_status = localStorage.getItem('local-status');
    let func=" ";
    if(local_status == 'true'){
        let log_details = JSON.parse(localStorage.getItem("user-details")); 
        
        for(let i=0;i<log_details.length;i++){
            func='<a class="nav-link text-dark text-right" href="#" onclick="profile()">'+'Hi '+ log_details[i].name +'!' +'</a>';
            document.getElementById('log-func').innerHTML=func;
        }
        
        func='<a class="nav-link text-dark" href="#" onclick="logOut()">'+'Logout'+ '</a>';           
        document.getElementById('sign-func').innerHTML=func;
        func='<a class="nav-link text-dark" href="#" onclick="cart()">'+'My Cart'+ '</a>';           
        document.getElementById('cart').innerHTML=func;
        
    }
    else if(local_status == 'false'){
        func= '<a class="nav-link text-dark text-right" href="login.html">'+'Login'+ '</a>';
        document.getElementById('log-func').innerHTML=func;
        func='<a class="nav-link text-dark" href="signup.html" >'+'Signup'+ '</a>';
        document.getElementById('sign-func').innerHTML=func;
    }
function logOut(){
    if(func){
        localStorage.setItem('local-status',false);  
        location.reload();
    }
}
let brands =[
    { hotel_name:'KFC',
        food : [ 
            {
              id:1,
              name:'Chicken Biriyani',
              price:220, 
              category:"lunch",
              type:"Non-Veg"
            },
            {
                id:2,
                name:'Chicken chops',
                price:170, 
                category:"gravy",
                type:"Non-Veg"
            },
            {
                id:3,
                name:'Mutton Biriyani',
                price:220, 
                category:"lunch",
                type:"Non-Veg"
            },
            {
                id:4,
                name:'Chicken Burgger',
                price:110, 
                category:"Snacks",
                type:"Non-Veg",
            },
        ]
    },
    { hotel_name:'Arya Bhavan',
    food : [
        {
            id:1,
            name:'idly',
            price:'15 per piece',
            category:'Tiffen',
            type:'Veg'
        },
        {
            id:2,
            name:'Dhosa',
            price:'15 per piece',
            category:'Tiffen',
            type:'Veg'
        },
        {
            id:3,
            name:'Meals',
            price:'120rs',
            category:'Lunch',
            type:'Veg'
        },
        {
            id:4,
            name:'Fried rice',
            price:'140rs',
            category:'Lunch',
            type:'Veg'
        }
    ]
    },
]
if(!localStorage.getItem("hotels")){
    localStorage.setItem("hotels",JSON.stringify(brands));
}
let hotels_brand = JSON.parse(localStorage.getItem('hotels')) 
for(let j=0;j<hotels_brand.length;j++){
   document.getElementById('hotel-top-brands'+j).setAttribute("href","view.html?hotel_name="+hotels_brand[j].hotel_name)
}
