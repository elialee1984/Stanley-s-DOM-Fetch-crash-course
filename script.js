// 1.
const root = document.querySelector("#root");

// 2.
const h1 = document.createElement("h1");
h1.innerText = "h1 works"
root.appendChild(h1);

// 3.
const secondUl = document.querySelector("#second-list");
const ulElements = document.querySelectorAll("ul");

// 4.
const liElement = document.createElement("li");
liElement.textContent = "new Item"

ulElements.forEach((ul) => {
    ul.appendChild(liElement.cloneNode(true));
})

// 5.
ulElements.forEach((ul) => {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
})

// 6. 7. 8. 9.
const users = [
    { name: 'stanley', age: 24, isDrunk: true },
    { name: 'alex', age: `${23}?`, isDrunk: false },
    { name: 'elia', age: `${19} (of course!)`, isDrunk: false }
];

const createUsersList = (arrOfObj) => {
    const ul = document.createElement("ul");


    arrOfObj.forEach((user, index) => {
        const li = document.createElement("li")
        const alcState = user.isDrunk ? "drunk" : "sober";

        li.innerText = `${user.name} is age ${user.age} and is ${alcState}`

        const button = document.createElement("button");
        button.innerText = "X";
        button.style.marginRight = "5px"

        button.addEventListener("click", () => {
            console.log(user);
            users.splice(index, 1); // remove user from array
            const newUserList = createUsersList(users); // regenerate the user list
            root.removeChild(ul); // remove the old user list
            root.appendChild(newUserList); // append the updated user list
        })

        li.prepend(button)
        ul.appendChild(li)
    });
    return ul;
}

const userList = createUsersList(users);
root.appendChild(userList);