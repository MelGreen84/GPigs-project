// Short-haired breed array
gpigssh = [["American", "The most popular breed of guinea pig. They are suitable for new piggie owners because their short hair makes them easy to maintain.", "<img src='img/sh/american_guinea_pig.jpg' class = 'thumbnail' alt='short-haired guinea pig'/>"],
["Dalmation", "A sweet, short-haired guinea pig whose hair is primarily white with black spots. They are suitable for beginners because they don't need alot of grooming.", "<img src='img/sh/dalmation_gp.jpg' class = 'thumbnail'/>"],
["Teddy", "Course, short hair that doesn't need much grooming. Teddy guinea pigs are known for being one of the most relaxed and friendly breeds.", "<img src='img/sh/teddy.jpg' class = 'thumbnail'/>"],
["Agouti", "The Agouti is a smooth-coated guinea pig with a very cute face. They are suitable for beginners because they don't need alot of grooming.", "<img src='img/sh/agouti.jpg' class = 'thumbnail'/>"]];

// Function
function breedsh(breedName) {
    switch (breedName) {
        case ("American"):
            document.getElementById("breed").innerHTML = "Breed: " + gpigssh[0][0] + "<br>" + "Description: " + gpigssh[0][1] + "<br>" + gpigssh[0][2];
            document.getElementById("breed").style.backgroundColor = "#0000ff80";
            break;
        case ("Dalmation"):
            document.getElementById("breed").innerHTML = "Breed: " + gpigssh[1][0] + "<br>" + "Description: " + gpigssh[1][1] + "<br>" + gpigssh[1][2];
            document.getElementById("breed").style.backgroundColor = "#00ff0080";
            break;
        case ("Teddy"):
            document.getElementById("breed").innerHTML = "Breed: " + gpigssh[2][0] + "<br>" + "Description: " + gpigssh[2][1] + "<br>" + gpigssh[2][2];
            document.getElementById("breed").style.backgroundColor = "#ffff0080";
            break;
        case ("Agouti"):
            document.getElementById("breed").innerHTML = "Breed: " + gpigssh[3][0] + "<br>" + "Description: " + gpigssh[3][1] + "<br>" + gpigssh[3][2];
            document.getElementById("breed").style.backgroundColor = "#ff00ff80";
            break;

    }
}

// Long-haired breed array
gpigslh = [["Peruvian", "They have the longest fur out of all guinea pig breeds and therefore require regular grooming by experienced guinea pig owners.", "<img src='img/lh/peruvian.png' class = 'thumbnail'/>"],
["Abyssinian", "These little piggies are friendly, cheeky and love to play. Their hair stands on end because it grows in rosettes.", "<img src='img/lh/abyssinian_guinea_pig.jpg' class = 'thumbnail'/>"],
["Sheltie", "Also known as Silkies, they have long, soft, silky fur that requires regular grooming. Suitable for experienced guinea pig owners.", "<img src='img/lh/sheltie_guinea_pig.jpg' class = 'thumbnail'/>"],
["Coronet", "Similar to Shelties, with long, silky, soft hair, they are not suitable for beginners because they require regular grooming.", "<img src='img/lh/coronet_guinea_pig.jpg' class = 'thumbnail'/>"]];

// Function
function breedlh(breedName) {
    switch (breedName) {
        case ("Peruvian"):
            document.getElementById("breed").innerHTML = "Breed: " + gpigslh[0][0] + "<br>" + "Description: " + gpigslh[0][1] + "<br>" + gpigslh[0][2];
            document.getElementById("breed").style.backgroundColor = "#0000ff80";
            break;
        case ("Abyssinian"):
            document.getElementById("breed").innerHTML = "Breed: " + gpigslh[1][0] + "<br>" + "Description: " + gpigslh[1][1] + "<br>" + gpigslh[1][2];
            document.getElementById("breed").style.backgroundColor = "#00ff0080";
            break;
        case ("Sheltie"):
            document.getElementById("breed").innerHTML = "Breed: " + gpigslh[2][0] + "<br>" + "Description: " + gpigslh[2][1] + "<br>" + gpigslh[2][2];
            document.getElementById("breed").style.backgroundColor = "#ffff0080";
            break;
        case ("Coronet"):
            document.getElementById("breed").innerHTML = "Breed: " + gpigslh[3][0] + "<br>" + "Description: " + gpigslh[3][1] + "<br>" + gpigslh[3][2] + "<br>";
            document.getElementById("breed").style.backgroundColor = "#ff00ff80";
            break;

    }
}
