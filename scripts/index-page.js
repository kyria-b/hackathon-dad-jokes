
const inputForm = document.getElementById("input-form");

inputForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Create dialog elements

    try {
        const joke = await getDadsJoke();
        const popUp = document.createElement("dialog");
        const popUpCopy = document.createElement("p");
        popUpCopy.innerText = joke.data.joke;
        const popUpButton = document.createElement("button");
    
        popUp.classList.add("dialog");
        popUpCopy.classList.add("popup__response");
        popUpButton.classList.add("popup__close");
        popUpButton.textContent = "Close";
    
        const popUpConnect = document.querySelector(".popup");
        popUpConnect.appendChild(popUp);
        popUp.appendChild(popUpCopy);
        popUp.appendChild(popUpButton);
    
        popUpButton.addEventListener("click", () => {
            popUp.close();
            popUp.remove();
        
    
        });

        popUp.showModal();

    } catch (error) {
        popUpCopy.innerText = "Failed to fetch a joke.";
        console.error(error);
    }
});

async function getDadsJoke() {
    const baseUrl = "https://icanhazdadjoke.com/";
    try {
        const response = await axios.get(baseUrl, {
            headers: { Accept: "application/json" },
        });
        return response; // Returning the full response
    } catch (error) {
        console.error("Error fetching dad's joke:", error);
        throw error;
    }
}
