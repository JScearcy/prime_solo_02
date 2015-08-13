
//object constructor for beginning object
var Employee = function(name, empNum, sal, rat){
	this.name = name;
	this.empNum = empNum;
	this. sal = sal;
	this.rat = rat;
}
//prototype to call all functions and construct the array.
Employee.prototype.calculateSTI = function(){
  var newArray = [];
  newArray[0] = "Name: " + this.name;
  var employeeNumber = this.empNum;
  var baseSalary = this.sal;
  var reviewScore = this.rat;

  var bonus = this.getBaseSTI(reviewScore) + this.getYearAdjustment(employeeNumber) - this.getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
}
newArray[1] = ("Bonus percentage: " + bonus * 100 + "%");
newArray[2] = ("Adjusted salary: $" + (Math.round(baseSalary * (1.0 + bonus))).toLocaleString());
newArray[3] = ("Bonus dollars: $" + (Math.round(baseSalary * bonus)).toLocaleString());
console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
//change array into a new object and return that
var newEmp = new empBonus(newArray[0], newArray[1], newArray[2], newArray[3]);
return newEmp;
}
//prototype for STI function
Employee.prototype.getBaseSTI = function(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}
//prototype for get Year function
Employee.prototype.getYearAdjustment = function(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}
//prototype for get Income function
Employee.prototype.getIncomeAdjustment = function(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}

//Object constructor for final object
var empBonus = function(name, bonusPer, adjSal, bonus){
	this.name = name;
	this.bonusPer = bonusPer;
	this.adjSal = adjSal;
	this.bonus = bonus;
}
//function to convert object into array
empBonus.prototype.convertToArray = function(){
	var array = [];
	array[0] = this.name;
	array[1] = this.bonusPer;
	array[2] = this.adjSal;
	array[3] = this.bonus;
	return array;
}
//create objects
var Atticus = new Employee("Atticus", "2405", "47000", 3);
var Jem = new Employee("Jem", "62347", "63500", 4);
var Boo = new Employee("Boo", "11435", "54000", 3);
var Scout = new Employee("Scout", "6243", "74750", 5);
//place objects into array
var empArray = [Atticus, Jem, Boo, Scout];
var bonusArray = [];
var objArray = [];
//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < empArray.length; i++){
	bonusArray[i] = empArray[i].calculateSTI();
	objArray[i] = bonusArray[i].convertToArray();
 	newEl = document.createElement('li');
	newText = document.createTextNode(objArray[i].join(', '));
	newEl.appendChild(newText);
	position.appendChild(newEl);
}
console.log(bonusArray);
