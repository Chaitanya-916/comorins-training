
if (!localStorage.getItem("user-details")) {
    localStorage.setItem("user-details", JSON.stringify([]));
}
let user_details = JSON.parse(localStorage.getItem("user-details"));

function signUp() {
    let details = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value,
        password1: document.getElementById('confirm-password').value,
    };
    if (details.password == details.password1) {
        user_details.push(details);
        localStorage.setItem("user-details", JSON.stringify(user_details));
        window.location.href = "index.html";
    }
    else {
        alert("give same password to each");
    }
}
let user_id;

function logIn() {

    user_id = {
        number: document.getElementById('user-id').value,
        password: document.getElementById('password-log').value,
    };
    let log_details = JSON.parse(localStorage.getItem("user-details"));
    let alert_state;
    for (let i = 0; i < user_details.length; i++) {

        if (user_id.number === log_details[i].number && user_id.password === log_details[i].password) {
            localStorage.setItem('local-status', true)
            window.location.href = "index.html";
            alert_state = false;
            break;
        }
        else if (!(user_id.number === log_details[i].number && user_id.password === log_details[i].password)) {
            alert_state = true;
        }
    }
    if (alert_state) {
        alert("Wrong user number password");
    }
}
let local_status = localStorage.getItem('local-status');
let func = " ";
if (local_status == 'true') {
    let log_details = JSON.parse(localStorage.getItem("user-details"));
    for (let i = 0; i < log_details.length; i++) {
        func = '<a class="nav-link text-dark text-right" href="#"">' + 'Hi ' + log_details[i].name + '! </a>';
        document.getElementById('log-func').innerHTML = func;
    }

    func = '<a class="nav-link text-dark" href="#" onclick="logOut()">' + 'Logout' + '</a>';
    document.getElementById('sign-func').innerHTML = func;
    func = '<a class="nav-link text-dark" href="cart.html" >' + 'My Cart' + '</a>';
    document.getElementById('cart').innerHTML = func;

}
else if (local_status != 'true') {
    func = '<a class="nav-link text-dark text-right" href="login.html">' + 'Login' + '</a>';
    document.getElementById('log-func').innerHTML = func;
    func = '<a class="nav-link text-dark" href="signup.html" >' + 'Signup' + '</a>';
    document.getElementById('sign-func').innerHTML = func;
}
function logOut() {
    localStorage.setItem('local-status', false);
    location.reload();
}
let brands = [
    {
        hotel_name: 'KFC',
        food: [
            {
                id: 1,
                name: 'Chicken Biriyani',
                price: "220rs",
                category: "lunch",
                type: "Non-Veg",
                brand: 'KFC',
                url: "https://geekrobocook.com/wp-content/uploads/2021/03/Tandoori-chicken-biryani.jpg"
            },
            {
                id: 2,
                name: 'Chicken chops',
                price: "170rs",
                category: "gravy",
                type: "Non-Veg",
                brand: 'KFC',
                url: "https://www.yummytummyaarthi.com/wp-content/uploads/2017/08/IMG_5752-500x500.jpg"
            },
            {
                id: 3,
                name: 'Mutton Biriyani',
                price: "220rs",
                category: "lunch",
                type: "Non-Veg",
                brand: 'KFC',
                url: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"
            },
            {
                id: 4,
                name: 'Chicken Burgger',
                price: "110rs",
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
                price: '15rs per piece',
                category: 'Tiffen',
                type: 'Veg',
                brand: 'Arya Bhavan',
                url: "https://inemai.com/wp-content/uploads/2019/02/idly.jpg"
            },
            {
                id: 2,
                name: 'Dhosa',
                price: '75rs',
                category: 'Tiffen',
                type: 'Veg',
                brand: 'Arya Bhavan',
                url: "https://b.zmtcdn.com/data/reviews_photos/1e2/19f261b43d11344ce5f483c20a0941e2_1561214851.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            },
            {
                id: 3,
                name: 'Meals',
                price: '120rs',
                category: 'Lunch',
                type: 'Veg',
                brand: 'Arya Bhavan',
                url: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/08/31082832/HotelMaris-Anandam1.jpg"
            },
            {
                id: 4,
                name: 'Fried rice',
                price: '140rs',
                category: 'Lunch',
                type: 'Veg',
                brand: 'Arya Bhavan',
                url: "https://www.veganricha.com/wp-content/uploads/2022/01/Indo-Chinese-Fried-Rice-0754-500x375.jpg"
            }
        ]
    },
]
localStorage.setItem("hotels", JSON.stringify(brands));





