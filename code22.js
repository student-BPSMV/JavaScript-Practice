let content = document.querySelector("#content");
async function loadedValue(){
    try{
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        content.innerText = data;
        console.log(data)
    }catch(err){
        console.log(err.message);
    }
};

loadedValue();