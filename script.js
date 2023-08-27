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

/*
***********************************************************************************
********************************* POKEMON *****************************************
**************************** gotta fetch 'em all **********************************
***********************************************************************************
*/
// 10.
const ditto = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        const data = await response.json();

        console.log(data);

        displayDitto(data) // display Ditto (incl. sprites and abilities) with the fetched data
    } catch (error) {
        console.error("Error fetching Ditto data", error);
    }
}

// 11.
const displayDitto = dittoData => {
    // header with the name of the pkmn (here: Ditto)
    const dittoDiv = document.createElement("div");
    const dittoName = document.createElement("h2");
    dittoName.textContent = dittoData.name;

    // image of pkmn
    const dittoImage = document.createElement("img");
    dittoImage.src = dittoData.sprites.front_default;
    dittoImage.alt = "Ditto";

    // just a header saying "abilities"
    const abilitiesHeading = document.createElement("h3");
    abilitiesHeading.textContent = "Abilities";

    // unordered list of abilities
    const abilitiesList = document.createElement("ul");
    // function enables possibility to add more abilities in the future
    dittoData.abilities.forEach(ability => {
        const abilityItem = document.createElement("li");
        abilityItem.textContent = ability.ability.name;
        abilitiesList.appendChild(abilityItem);
    });

    // now that everything's created, it has to be appended to the div...
    dittoDiv.appendChild(dittoName);
    dittoDiv.appendChild(dittoImage);
    dittoDiv.appendChild(abilitiesHeading);
    dittoDiv.appendChild(abilitiesList);

    // ... which in turn has to be attended to the root-div
    root.appendChild(dittoDiv)
}

ditto()