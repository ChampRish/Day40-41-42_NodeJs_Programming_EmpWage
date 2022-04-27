//UC11 Creating Employee Payroll Class
class EmployeePayRollData{
    //Properties
    id;
    salary;

    //Constructor
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary
    }

    //Getter & Setter Methods
    get name() {return this._name};
    set name(name) {
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (namePattern.test(name)) this._name = name;
        else throw 'Name is incorrect';
    }

    //Method
    toString(){
        return "ID = "+ this.id + " Name = "+ this.name + " Salary = " + this.salary;
    }
}
let employeeObject = new EmployeePayRollData(1,'Viney',200000);
console.log(employeeObject.toString());