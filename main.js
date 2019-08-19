
// GATHER THE HEIGHT AND WEIGHT OF THE INDIVIDUAL
function getBMI() {
    let weight = document.getElementById('pounds').value
      weight = parseFloat(weight)
    let heightFoot = document.getElementById('feet').value
      heightFoot = parseFloat(heightFoot * 12)
    let heightInches = document.getElementById('inches').value
      heightInches = parseFloat(heightInches)
    let height = heightFoot + heightInches
  
    let bmi = (703 * (weight / (height * height))).toFixed(2)
      bmi = Number(bmi)
  
    
    if(bmi < 19) {
      document.getElementById('results-box').style.display = 'block'
      document.getElementById('results').classList.remove('green')
      document.getElementById('results').classList.remove('yellow')
      document.getElementById('results').classList.remove('orange')
      document.getElementById('results').classList.add('red')
      document.getElementById('results').innerHTML = '<h1>You are Underweight</h1>' + ' Your BMI is ' + '<strong>' + bmi + '</strong>' +
      '<br>' + ' This is not healthy'
  
    } else if(bmi >= 19 && bmi <= 24.9) {
      document.getElementById('results-box').style.display = "block"
      document.getElementById('results').classList.remove('red')
      document.getElementById('results').classList.remove('yellow')
      document.getElementById('results').classList.remove('orange')
      document.getElementById('results').classList.add('green')
      document.getElementById('results').innerHTML = '<h1>Awesome Sauce</h1>' + ' Your BMI is ' + '<strong>' + bmi + '</strong>' +
      '<br>' + ' You are in the Perfect BMI range'
  
    } else if(bmi >= 25 && bmi <= 29.9) {
      document.getElementById('results-box').style.display = 'block'
      document.getElementById('results').classList.remove('red')
      document.getElementById('results').classList.remove('green')
      document.getElementById('results').classList.remove('orange')
      document.getElementById('results').classList.add('yellow')
      document.getElementById('results').innerHTML = '<h2>You have some work to do</h2>' + ' Your BMI is ' + '<strong>' + bmi + '</strong>' +
      '<br>' + ' You are considered overwieght in this range'
  
    } else if(bmi >= 30 && bmi <= 39.9) {
      document.getElementById('results-box').style.display = 'block'
      document.getElementById('results').classList.remove('red')
      document.getElementById('results').classList.remove('green')
      document.getElementById('results').classList.remove('yellow')
      document.getElementById('results').classList.add('orange')
      document.getElementById('results').innerHTML = '<h2>Danger! Obesity</h2>' + ' Your BMI is ' + '<strong>' + bmi + '</strong>' +
      '<br>' + ' You are considered Obese in this range'
  
  
    } else if(bmi >=40 && bmi <= 49.9) {
      document.getElementById('results-box').style.display = 'block'
      document.getElementById('results').classList.remove('yellow')
      document.getElementById('results').classList.remove('green')
      document.getElementById('results').classList.remove('orange')
      document.getElementById('results').classList.add('red')
      document.getElementById('results').innerHTML = '<h2>You are in Danger</h2>' + ' Your BMI is ' + '<strong>' + bmi + '</strong>' +
      '<br>' + ' You are considered Severly Obese right now'
  
  
    } else {
      document.getElementById('results-box').style.display = 'block'
      document.getElementById('results').classList.add('red')
      document.getElementById('results').innerHTML = '<h2>See a Dr.</h2>' + ' Your BMI is ' + '<strong>' + bmi + '</strong>' +
      '<br>' + ' This recording is off the charts'
  
    }
      
     
    }
  
      
     
  
      
  
   
  
   
  
      
  
   
  
      
    
  