function convertAge() {
    alert("Function is running!"); 
    let myName = document.getElementById("name").value;
    let myAge = parseInt(document.getElementById("age").value, 10);

    // Validate user input
    if (!myName || isNaN(myAge) || myAge <= 0) {
        document.getElementById("result").innerText = "Please enter a valid name and age.";
        return;
    }

    let earlyYears = 2 * 10.5;
    let laterYears = (myAge - 2) * 4;
    let myAgeInDogYears = earlyYears + laterYears;

    let myIntroduction = `My name is ${myName}. I am ${myAge} years old, which is ${myAgeInDogYears} in dog years! 🐶`;

    // Display the result on the webpage
    document.getElementById("result").innerText = myIntroduction;
}

