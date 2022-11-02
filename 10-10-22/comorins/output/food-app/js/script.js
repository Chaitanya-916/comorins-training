
if (!localStorage.getItem("user-details")) {
    localStorage.setItem("user-details", JSON.stringify([]));
}
let user_details = JSON.parse(localStorage.getItem("user-details")); 
//signup function
function signUp() {
    let details = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value,
        password1: document.getElementById('confirm-password').value, //This is confirm password (password1)
    };
    if(details.name && details.number != null ){
        if (details.password == details.password1) {
            user_details.push(details);
            localStorage.setItem("user-details", JSON.stringify(user_details));
            window.location.href = "login.html";
        }
        else {
            alert("give same password to each");
        }
    }    
    else {
        alert("Give proper name and mobile number");
    }
}
let user_id;
    //Login function
function logIn() {
    //getting the user input value and storing in a variable
    user_id = {
        number: document.getElementById('user-id').value,
        password: document.getElementById('password-log').value,
    };
    
    let alert_state;
    for (let i = 0; i < user_details.length; i++) {

        if (user_id.number === user_details[i].number && user_id.password === user_details[i].password) {
            localStorage.setItem('local-status', true)
            window.location.href = "index.html";
            alert_state = false;
            break;
        }
        else if (!(user_id.number === user_details[i].number && user_id.password === user_details[i].password)) {
            alert_state = true;
        }
    }
    if (alert_state) {
        alert("Wrong user number password");
    }
}
let local_status = localStorage.getItem('local-status');
if (local_status == 'true') {
    for (let i = 0; i < user_details.length; i++) {
        document.getElementById('log-func').innerHTML = '<a class="nav-link text-dark text-right" href="#"">' + 'Hi ' + user_details[i].name + '! </a>';
    }
    document.getElementById('sign-func').innerHTML = '<a class="nav-link text-dark" href="#" onclick="logOut()">' + 'Logout' + '</a>';
    document.getElementById('cart').innerHTML = '<a class="nav-link text-dark" href="cart.html" >' + 'My Cart' + '</a>';
}
else if (local_status != 'true') {
    document.getElementById('log-func').innerHTML = '<a class="nav-link text-dark text-right" href="login.html">' + 'Login' + '</a>';
    document.getElementById('sign-func').innerHTML = '<a class="nav-link text-dark" href="signup.html" >' + 'Signup' + '</a>';
}
//Function for logout
function logOut() {
    localStorage.setItem('local-status', false);
    location.reload();
}
        //Creating static hotels and its food varieties in the name of brands
let brands = [
    {
        hotel_name: 'KFC',
        food: [
            {
                id: 1,
                name: 'Chicken Biriyani',
                price: "220",
                currency:'INR',
                category: "lunch",
                type: "Non-Veg",
                brand: 'KFC',
                url: "https://geekrobocook.com/wp-content/uploads/2021/03/Tandoori-chicken-biryani.jpg"
            },
            {
                id: 2,
                name: 'Chicken chops',
                price: "170",
                currency:'INR',
                category: "gravy",
                type: "Non-Veg",
                brand: 'KFC',
                url: "https://www.yummytummyaarthi.com/wp-content/uploads/2017/08/IMG_5752-500x500.jpg"
            },
            {
                id: 3,
                name: 'Mutton Biriyani',
                price: "220",
                currency:'INR',
                category: "lunch",
                type: "Non-Veg",
                brand: 'KFC',
                url: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"
            },
            {
                id: 4,
                name: 'Chicken Burgger',
                price: "110",
                currency:'INR',
                category: "Snacks",
                type: "Non-Veg",
                brand: 'KFC',
                url: "https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg"
            },
        ]
    },
    {
        hotel_name: 'Arya Bhavan',
        food: [
            {
                id: 1,
                name: 'Idly',
                price: '15 per piece',
                currency:'INR',
                category: 'Tiffen',
                type: 'Veg',
                brand: 'Arya Bhavan',
                url: "https://inemai.com/wp-content/uploads/2019/02/idly.jpg"
            },
            {
                id: 2,
                name: 'Dhosa',
                price: '75',
                currency:'INR',
                category: 'Tiffen',
                type: 'Veg',
                brand: 'Arya Bhavan',
                url: "https://b.zmtcdn.com/data/reviews_photos/1e2/19f261b43d11344ce5f483c20a0941e2_1561214851.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            },
            {
                id: 3,
                name: 'Meals',
                price: '120',
                currency:'INR',
                category: 'Lunch',
                type: 'Veg',
                brand: 'Arya Bhavan',
                url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hjpbgpuoarzjiyarrqy5"
            },
            {
                id: 4,
                name: 'Fried rice',
                price: '140',
                currency:'INR',
                category: 'Lunch',
                type: 'Veg',
                brand: 'Arya Bhavan',
                url: "https://www.veganricha.com/wp-content/uploads/2022/01/Indo-Chinese-Fried-Rice-0754-500x375.jpg"
            }
        ]
    },
]
localStorage.setItem("hotels", JSON.stringify(brands));  //Storing the hotels and its varieties in local storage





