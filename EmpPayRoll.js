//Uc14 RG----
class EmployeePayRollData{
    //Properties
    id;
    salary;

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
    get gender() {return this._gender};
    set gender(gender){
        let genderPattern = new RegExp('^[F,M]{1}');
        if (genderPattern.test(gender)) this._gender = gender;
        else throw 'Gender Pattern is incorrect';
    }
    get startDate() {return this._startDate};
    set startDate(startDate){
        if (startDate <= new Date()) this._startDate = startDate;
        else throw 'Date can not be of future';
    }

    //Method
    toString(){
        const options = {year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "ID = "+ this.id + " Name = "+ this.name + " Salary = " + this.salary + " Gender : "+ this.gender+ " StartDate : "+ this.startDate;
    }
}
let employeeObject1 = new EmployeePayRollData(1,'Vikky',200000,'M',new Date());
console.log(employeeObject1.toString());
try{
    let employeeObject = new EmployeePayRollData(2,'Viney',200000,'S',new Date());
    console.log(employeeObject.toString());
}
catch (ex){
    console.error(ex);
}
finally{
    try{
        let newEmployeeObject = new EmployeePayRollData(3,'Vishu',200000,'F',new Date(2022,3,7,12,12,12,12));
        console.log(newEmployeeObject.toString());
    }
    catch (ex){
        console.error(ex);
    }
}