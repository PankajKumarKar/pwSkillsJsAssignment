/*
4. Employee Class Challenge.
Create a class called Employee with three properties: name, position, and salary. The class should have a
method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
call the getSalary method.
*/

//class

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  //Member Function
  getSalary() {
    return this.salary;
  }
}

const Employee1 = new Employee("Pankaj", "Web Developer", 80000);

console.log(Employee1.getSalary());
