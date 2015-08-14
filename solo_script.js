
//object constructor for beginning object
var Employee = function(name, empNum, sal, rat, nameOut, bonus, bonusPer, adjSal){
	this.name = name;
	this.empNum = empNum;
	this. sal = sal;
	this.rat = rat;
	this.nameOut = "Name: " + this.name;
	this.bonus = this.calculateBonus();
	this.bonusPer = ("Bonus percentage: " + this.bonus * 100 + "%");
	this.adjSal = ("Adjusted salary: $" + (Math.round(this.sal * (1.0 + this.bonus))).toLocaleString());
	this.bonus = ("Bonus dollars: $" + (Math.round(this.sal * this.bonus)).toLocaleString());
}
//prototype to calculatebonus
Employee.prototype.calculateBonus = function(){
  this.bonus = this.getBaseSTI(this.rat) + this.getYearAdjustment(this.empNum) - this.getIncomeAdjustment(this.sal);
  if(this.bonus > 0.13){
    this.bonus = 0.13;
	}
		return this.bonus;
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
//create objects
var Atticus = new Employee("Atticus", "2405", "47000", 3);
var Jem = new Employee("Jem", "62347", "63500", 4);
var Boo = new Employee("Boo", "11435", "54000", 3);
var Scout = new Employee("Scout", "6243", "74750", 5);
//empArray and bonusArray hold objects, objArray contains the final obeject converted into an array.
var empArray = [Atticus, Jem, Boo, Scout];
//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');
//Loop the array of objects and insert data into the DOM
for(var i = 0; i < empArray.length; i++){
 	newEl = document.createElement('li');
	newText = document.createTextNode(empArray[i].nameOut + ', ' + empArray[i].bonusPer + ', ' + empArray[i].adjSal + ', ' + empArray[i].bonus);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}
console.log(empArray);
