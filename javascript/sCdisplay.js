

const displayData =(data) =>{
    console.log(data["name"])
    //for image
    const image = "data:image/png;base64," + data["image"];
    const imageDiv = document.getElementById("image_character_div");
    const characterImage = document.createElement('img');
    characterImage.src = image;
    imageDiv.appendChild(characterImage);
    //for name
    const name = data['name'];
    let nameHeader = document.getElementById("name_character");
    nameHeader.textContent = name;
    //for long description
    const longDescription = data['description'];
    let descriptionParagraph = document.getElementById('description_character');
    descriptionParagraph.textContent = longDescription;
}

export default displayData