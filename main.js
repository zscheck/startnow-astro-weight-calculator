var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
planets.reverse(); // Challenge to reverse
planets.forEach(function(planet){  //use forEach function instead of for loop

  let pname= document.getElementById('planets');
  // now    pname = <select> 
  let option = document.createElement('option');
  // create an <option> element
  option.value= planet[0]; //originally had planet[1] so it stored ratio under value in html
  option.innerHTML=planet[0];
  pname.appendChild(option);
  //should append <option> inside parent element <select>
});

function getGravity(planetName) {
  for(let i=0;i < planets.length;i++){
    if(planetName == planets[i][0]){
   return planets[i][1];
    }
  }
}

function calculateWeight(weight,pGravity){
 let results = pGravity * weight;
  return results;
}

function handleClickEvent(){
  // 3. Create a variable called userWeight and assign the value of the user's weight.
  let userWeight = document.getElementById('user-weight').value;
  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  
  let sel = document.getElementById('planets');
  //let planetName = sel.options[sel.selectedIndex].innerHTML; //how i hade it before
  let planetName = sel.options[sel.selectedIndex].value; //was planet weight when ratios were in value
  let planetWeight = getGravity(planetName);
  
  
  
  // 5. Create a variable called result and assign the value of the new calculated weight.
  // result should be displayed to the nearest .01
  const result= calculateWeight(userWeight,planetWeight); //calling formula in function

  // 6. Write code to display the message shown in the screenshot.
  document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
}
