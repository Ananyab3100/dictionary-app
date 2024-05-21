console.log(1);
const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');
const content =  document.getElementById('content')

const  handleSearch = (e) =>{
    e.preventDefault();
    const searchField = document.getElementById('searchField');
    console.log(searchField.value);
    const text = searchField.value;

  

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`

    fetch(url)
    .then((response) =>{
        if(!response.ok){
            console.log("An error occured")
        }
        // Parse the JSON response
        return response.json();
    })
    .then((data) => {
        // Handle the JSON data
        console.log(data);
        const apiData = data;
        content.innerText  = apiData[0].meanings[0].definitions[0].definition;
    
        
      })
    .catch((err) => console.log(err));

        
}

const handleClear = () =>{
        searchField.value =""
        content.innerText = "";
       
}




searchButton.addEventListener('click' , handleSearch);
clearButton.addEventListener('click' , handleClear);




