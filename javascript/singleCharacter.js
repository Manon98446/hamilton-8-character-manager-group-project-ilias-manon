import {displayData} from "./sCdisplay.js";



const imagediv = document.getElementById("character_picture");
const postName = (new URLSearchParams(window.location.search)).get('id'); //window.location.search = URL actuel de ma page
fetch("https://character-database.becode.xyz/characters/" + postName )
.then(response => response.json())
.then (data => displayData(data));

//the function displayData is to display the information contained in the object (array)

const deleteCharacter = () => {
    if(confirm("Are you sure you want to delete this character?")){
        fetch("https://character-database.becode.xyz/characters/" +postName ,{method: 'DELETE'})
        .then(response => {
            if (response.ok){
                console.log("DELETED")
            }
            else{console.log("not deleted")}
        })
    }
    else{
        console.log("You did not delete this character");
    }
    

}


const buttonDelete=document.getElementById("buttonDeleteCharater");
buttonDelete.addEventListener("click", deleteCharacter);


//linking with the edit page

const buttonEdit=document.getElementById("buttonEditCharacter");
buttonEdit.setAttribute("href", "editCharacter.html?id=" + postName);  

