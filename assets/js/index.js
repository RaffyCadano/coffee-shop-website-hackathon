
//get all id's and set to const so it can not be use again
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const navContainer = document.getElementById('nav-container');

// opens side nav
openNav.addEventListener('click', () => {
    navContainer.style.transform = "translateX(0)";
    document.body.style.overflow = "hidden" //disable scrolling when side nav is open
})

// closes side nav
closeNav.addEventListener('click', () => {
    navContainer.style.transform = "translateX(100%)";
    document.body.style.overflow = "scroll" //able scrolling when side nav is open
})
//get coffee data json --  display all in menu section
async function getData() {
    const url = "coffeeData.json"; //url = coffeeData.json | file
    try {
        const response = await fetch(url); //fetch coffeedata from json
        const json = await response.json();
        //sort all by name to a-z
        json.sort((a, b) => a.name.localeCompare(b.name));
        getCoffeeData(json)

    } catch (error) {
        console.error(error.message);
    }
}
//initialize
getData();

//display drinks
function getCoffeeData(coffeeList) {
    let coffeeMenuList = document.getElementById('coffeeList');
    let coffeeViewContainer = document.querySelector(".coffee-view");

    //get all data and display it into html, can either use forEach or forLoop
    coffeeList.forEach((coffee) => {
        const { name, price, description, imageLink, coffeeId, id } = coffee; // get name, price, description, imageLink, coffeeId

        console.log(id)
        //manually create an element to display in html
        const coffeeEl = document.createElement("a");
        coffeeEl.className += `coffeeDiv ${id} show`;
        coffeeEl.innerHTML = `
            <li class="coffee-menu-info" id="${coffeeId}">
                <img src='${imageLink}' alt="">
                <div class="coffee-description">
                    <div>
                        <div class="coffee-name">${name}</div>
                        <p>${description}</p>
                    </div>
                    <div class="coffee-price">
                        <strong>$${price}</strong>
                        <button>
                        +
                        </button>
                    </div>
                </div>
            </li>
        `;
        coffeeMenuList.appendChild(coffeeEl); // initialize - display or append it in html

        //coffeeBtnId means -  when coffee or food is click, will show a modal or a container contains coffee information - also users can add select, coffee sizes
        let coffeeBtnId = document.getElementById(coffeeId);
        coffeeBtnId.addEventListener('click', () => {
            document.body.style.overflow = "hidden";
            console.log(coffeeId);
            coffeeViewContainer.style.display = 'block';
            const coffeeView = document.querySelector('.coffee-view-container');
            const coffeeEl = document.createElement("div");
            coffeeEl.className += "coffeeInfo";
            coffeeEl.innerHTML = `
                <div class="productContainer" id="${coffeeId}">
                    <button class="closeCoffeeViewBtn">Close</button>
                    <img src='${imageLink}' alt="">
                    <div class="productInfo">
                        <h1 class="productDetail">Product Details</h1>
                        <div>
                            <div class="">
                                <h1 class="productName">${name}</h1></span>
                            </div>
                            <div class="productDescription">
                                <span>Description</span>
                                <p>${description}</p>
                            </div>
                            <div class="productSizes">
                                <form class="">
                                    <span>Sizes:</span>
                                    <label>Small</label>
                                    <input type="checkbox">
                                    <label>Meduim</label>
                                    <input type="checkbox">
                                    <label>Large</label>
                                    <input type="checkbox">
                                </form>
                            </div>
                            <div class="productAmount">
                                <span>Amount</span>
                                <button>-</button>
                                <span id="amount">1</span>
                                <button>+</button>
                            </div>
                            <button class="addToCartBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>
            `;

            coffeeView.appendChild(coffeeEl);
            const closeCoffeeViewBtn = document.querySelector('.closeCoffeeViewBtn');
            closeCoffeeViewBtn.addEventListener('click', () => {
                coffeeView.innerHTML = "";
                coffeeViewContainer.style.display = 'none';
                document.body.style.overflow = "scroll";
            })
        })





    });

}
//filter lists 
document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let input,
        filter,
        ul,
        li,
        a,
        i,
        txtValue;
    input = document.getElementById("search_bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("coffeeList");
    li = ul.getElementsByTagName("a");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("li")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].classList.remove("active"); // Remove the active class from the previously active button
            }
        } else {
            li[i].style.display = "none";
        }
    }
})

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("coffeeDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("coffee-menu-list");
var btns = btnContainer.getElementsByClassName("coffee-menu-links");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].classList.remove("active"); // Remove the active class from the previously active button
        }
        this.classList.add("active"); // Add active class to the clicked button
    });
    btns[0].click()
}

