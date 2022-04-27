class EmployeePayRollData{
    //Properties
    id;
    salary;
    gender;
    startDate

    //Constructor
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //Getter & Setter Methods
    get name() {return this._name};
    set name(name) {
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (namePattern.test(name)) this._name = name;
        else throw 'Name Pattern is incorrect';
    }

    //Method
    toString(){
        const options = {year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "ID = "+ this.id + " Name = "+ this.name + " Salary = " + this.salary + " Gender : "+ this.gender+ " StartDate : "+ this.startDate;
    }
}
let employeeObject = new EmployeePayRollData(1,'Viney',200000);
console.log(employeeObject.toString());
try{
    let newEmployeeObject = new EmployeePayRollData(2,'vishal',200000,'M',new Date());
    console.log(newEmployeeObject.toString());
}
catch(ex){
    console.error(ex);
}
let newEmployeeObject = new EmployeePayRollData(2,'Vishal',200000,'M',new Date());
console.log(newEmployeeObject.toString());