const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

// getElementById --> finds <input id = "height or etc" in HTML



calculateBtn.addEventListener("click", () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

// addEventListener --> "wait and watch" i.e waits for user entery
// click --> mouse click
// heightInput.value --> user entered value will be stores here
// parseFloat --> entered value is always in a form f string so to convert it into number



  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Please enter valid height and weight of yours!!!";
    return;
  }

// !height --> means empty or NaN  

//math part
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

  let category = "";
  let color = "";
  let advice = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "orange";
    advice = "Eat nutritious food and maintain a healthy diet.";
  } else if (bmi < 25) {
    category = "Normal";
    color = "green";
    advice = "Great job! Maintain your healthy lifestyle.";
  } else if (bmi < 30) {
    category = "Overweight";
    color = "darkorange";
    advice = "Exercise regularly and balance your diet.";
  } else {
    category = "Obese";
    color = "red";
    advice = "Consult a healthcare professional.";
  }

  resultDiv.style.color = color;
  resultDiv.innerHTML = `
    So your<br>
    BMI: ${bmi} <br>
    Category: ${category} <br>
    <small>${advice}</small>
  `;
});

resetBtn.addEventListener("click", () => {
  heightInput.value = "";
  weightInput.value = "";
  resultDiv.textContent = "";
});
