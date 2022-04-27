//uc1
/*const IS_ABSENT=0;
console.log(Math.random()*10);
let empCheck=Math.floor(Math.random()*10)%2;

if(empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}*/

//UC2

/*const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;

let empCheck=Math.floor(Math.random()*10)%3;

switch(empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;

    case IS_FULL_TIME:
          empHrs=FULL_TIME_HOURS;
          break;
    default:
        empHrs=0;

}

let empWage=empHrs*WAGE_PER_HOUR;
console.log("EmpWage:"+empWage);*/

//uc3
/*
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;

function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME:
        return PART_TIME_HOURS;

    case IS_FULL_TIME:
          return FULL_TIME_HOURS;
    default:
        return 0;

}
}
let empCheck=Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
let empWage=empHrs*WAGE_PER_HOUR;
console.log("EmpWage:"+empWage); 
*/

//uc4
/*
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME:
        return PART_TIME_HOURS;

    case IS_FULL_TIME:
          return FULL_TIME_HOURS;
    default:
        return 0;

}
}
const NUM_OF_WORKING_DAYS=2;

let empHrs=0;

for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck);
}

let empWage=empHrs*WAGE_PER_HOUR;
console.log("Total Hrs:" +empHrs+"EmpWage: "+empWage);
*/

//UC5
/*
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME:
        return PART_TIME_HOURS;

    case IS_FULL_TIME:
          return FULL_TIME_HOURS;
    default:
        return 0;

}
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS =20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() *10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC5 - Total Days: " + totalWorkingDays +
    "Total Hrs: " +totalEmpHrs +" Emp Wage: " +empWage);
    */

    //UC6
    //Store the Daily Wage along with the Total Wage
    /*
const IS_PART_TIME = 1;      const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;   const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0, empWorkingDays=0;
let dailyWageArray=new Array();         //UC6- store daily wage
let empWage=0, dailyWage=0;
//Calculate Wages till a condition
while(totalEmpHrs<=MAX_HRS_IN_MONTH && empWorkingDays<MAX_WORKING_DAYS)
{
    empWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;  //gives 0,1 or 2
    let workingHrs = GetEmpWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs +  workingHrs ;  //function call
    empWage = totalEmpHrs * WAGE_PER_HOUR;   //calculate from returned value
    //for wage per day
    dailyWage = workingHrs * WAGE_PER_HOUR;
    dailyWageArray.push(dailyWage);
}

console.log("\nTotal working Days : "+empWorkingDays+" | Total working hours : "+totalEmpHrs+" | Month's Total Employee Wage : "+empWage);
console.log("Daily wage : "+dailyWageArray)

function GetEmpWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;   //4
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;   //8
        default:
            return 0;
    }
}
*/

//UC7 RG
/*
console.log("Welcome to EmpWage Calculation Program in JS")
//CONSTANTS
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAY_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;

//Variables
let monthlyEmpWage = 0;
let dailyWorkingHrs = 0;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;
//Daily EmpWage in Array
let dailyEmpWageArray = new Array();

while(totalWorkingDays < MAX_WORKING_DAY_PER_MONTH && totalWorkingHrs < MAX_WORKING_HRS_PER_MONTH){
    dailyWorkingHrs = GetWorkingHrs();
    dailyEmpWageArray.push(GetDailyWage(dailyWorkingHrs));
    totalWorkingHrs += dailyWorkingHrs;
    totalWorkingDays++;
}
//UC7A
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
dailyEmpWageArray.forEach(sum);
function TotalEmpWages(totalEmpWage,dailyWage){
    return totalEmpWage+dailyWage;
}
console.log("UC7A:- TotalEmpWage by Reduce Method :" +dailyEmpWageArray.reduce(TotalEmpWages,0));
//UC7B
let dailyCounter = 0;
function MapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter +"=" +dailyWage;
}
let mapDayWithWageArray = dailyEmpWageArray.map(MapDayWithWage);
console.log("UC7B Wage with Day " + mapDayWithWageArray);
console.log("Employee wage for this month is "+ monthlyEmpWage+ " Total hrs & days worked are "+totalWorkingHrs+ ", "+totalWorkingDays);
//UC7C
function FullTimeWage(dailyWage){
    return dailyWage.includes(160);
}
let fullDayWageArray = mapDayWithWageArray.filter(FullTimeWage);
console.log("UC7C:- Daily Wage filter when fullWage earned "+ fullDayWageArray);

//UC7D
function FindFirstOccurenceOfFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D:- First Occurence of Full Time Wage: " + mapDayWithWageArray.find(FindFirstOccurenceOfFullTimeWage));

//UC7E 
function IsAllTimeFullWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E:- Check all elements have full time wage: "+ fullDayWageArray.every(IsAllTimeFullWage));

//UC7F
function IsAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F:- If any part time wage is there: "+mapDayWithWageArray.some(IsAnyPartTimeWage));

//UC7G
function NoOfDaysEmployeePresentOrPartTime(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G:- No of days employee present or part time: "+dailyEmpWageArray.reduce(NoOfDaysEmployeePresentOrPartTime,0));

//Method to get Work Hours
function GetWorkingHrs(){
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}
function GetDailyWage(dailyWorkingHrs){
    return dailyWorkingHrs * WAGE_PER_HR;
}
*/
//UC8 RG
/*
console.log("Welcome to EmpWage Calculation Program in JS")
//CONSTANTS
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAY_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;

//Variables
let monthlyEmpWage = 0;
let dailyWorkingHrs = 0;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;
//Daily EmpWage in Array
let dailyEmpWageArray = new Array();
//Daily EmpWage in Map
let dailyEmpWageMap = new Map();

while(totalWorkingDays < MAX_WORKING_DAY_PER_MONTH && totalWorkingHrs < MAX_WORKING_HRS_PER_MONTH){
    dailyWorkingHrs = GetWorkingHrs();
    dailyEmpWageArray.push(GetDailyWage(dailyWorkingHrs));
    totalWorkingHrs += dailyWorkingHrs;
    totalWorkingDays++;
    dailyEmpWageMap.set(totalWorkingDays,GetDailyWage(dailyWorkingHrs));
}
console.log(dailyEmpWageMap);
console.log("UC8A:- Total EmpWage by Map: " +Array.from(dailyEmpWageMap.values()).reduce(TotalEmpWages,0))
//UC7A
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
dailyEmpWageArray.forEach(sum);
function TotalEmpWages(totalEmpWage,dailyWage){
    return totalEmpWage+dailyWage;
}
console.log("UC7A:- TotalEmpWage by Reduce Method :" +dailyEmpWageArray.reduce(TotalEmpWages,0));
//UC7B
let dailyCounter = 0;
function MapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter +"=" +dailyWage;
}
let mapDayWithWageArray = dailyEmpWageArray.map(MapDayWithWage);
console.log("UC7B Wage with Day " + mapDayWithWageArray);
console.log("Employee wage for this month is "+ monthlyEmpWage+ " Total hrs & days worked are "+totalWorkingHrs+ ", "+totalWorkingDays);
//UC7C
function FullTimeWage(dailyWage){
    return dailyWage.includes(160);
}
let fullDayWageArray = mapDayWithWageArray.filter(FullTimeWage);
console.log("UC7C:- Daily Wage filter when fullWage earned "+ fullDayWageArray);

//UC7D
function FindFirstOccurenceOfFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D:- First Occurence of Full Time Wage: " + mapDayWithWageArray.find(FindFirstOccurenceOfFullTimeWage));

//UC7E 
function IsAllTimeFullWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E:- Check all elements have full time wage: "+ fullDayWageArray.every(IsAllTimeFullWage));

//UC7F
function IsAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F:- If any part time wage is there: "+mapDayWithWageArray.some(IsAnyPartTimeWage));

//UC7G
function NoOfDaysEmployeePresentOrPartTime(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G:- No of days employee present or part time: "+dailyEmpWageArray.reduce(NoOfDaysEmployeePresentOrPartTime,0));

//Method to get Work Hours
function GetWorkingHrs(){
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}
function GetDailyWage(dailyWorkingHrs){
    return dailyWorkingHrs * WAGE_PER_HR;
}
*/

//UC9

console.log("Welcome to EmpWage Calculation Program in JS")
//CONSTANTS
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAY_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;

//Variables
let monthlyEmpWage = 0;
let dailyWorkingHrs = 0;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;
//Daily EmpWage in Array
let dailyEmpWageArray = new Array();
//Daily EmpWage in Map
let dailyEmpWageMap = new Map();

while(totalWorkingDays < MAX_WORKING_DAY_PER_MONTH && totalWorkingHrs < MAX_WORKING_HRS_PER_MONTH){
    dailyWorkingHrs = GetWorkingHrs();
    dailyEmpWageArray.push(GetDailyWage(dailyWorkingHrs));
    totalWorkingHrs += dailyWorkingHrs;
    totalWorkingDays++;
    dailyEmpWageMap.set(totalWorkingDays,GetDailyWage(dailyWorkingHrs));
}
console.log(dailyEmpWageMap);
console.log("UC8A:- Total EmpWage by Map: " +Array.from(dailyEmpWageMap.values()).reduce(TotalEmpWages,0))
//UC7A
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
dailyEmpWageArray.forEach(sum);
function TotalEmpWages(totalEmpWage,dailyWage){
    return totalEmpWage+dailyWage;
}
console.log("UC7A:- TotalEmpWage by Reduce Method :" +dailyEmpWageArray.reduce(TotalEmpWages,0));
//UC7B
let dailyCounter = 0;
function MapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter +"=" +dailyWage;
}
let mapDayWithWageArray = dailyEmpWageArray.map(MapDayWithWage);
console.log("UC7B Wage with Day " + mapDayWithWageArray);
console.log("Employee wage for this month is "+ monthlyEmpWage+ " Total hrs & days worked are "+totalWorkingHrs+ ", "+totalWorkingDays);
//UC7C
function FullTimeWage(dailyWage){
    return dailyWage.includes(160);
}
let fullDayWageArray = mapDayWithWageArray.filter(FullTimeWage);
console.log("UC7C:- Daily Wage filter when fullWage earned "+ fullDayWageArray);

//UC7D
function FindFirstOccurenceOfFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D:- First Occurence of Full Time Wage: " + mapDayWithWageArray.find(FindFirstOccurenceOfFullTimeWage));

//UC7E 
function IsAllTimeFullWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E:- Check all elements have full time wage: "+ fullDayWageArray.every(IsAllTimeFullWage));

//UC7F
function IsAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F:- If any part time wage is there: "+mapDayWithWageArray.some(IsAnyPartTimeWage));

//UC7G
function NoOfDaysEmployeePresentOrPartTime(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G:- No of days employee present or part time: "+dailyEmpWageArray.reduce(NoOfDaysEmployeePresentOrPartTime,0));

//UC9A
const findTotal = (totalvalue,dailyvalue) =>{
    return totalvalue+dailyvalue;
}
let count = 0;
let totalSalary = dailyEmpWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);
console.log("UC9A: EmpWage with Arrow : "+ " Total Wages: "+ totalSalary);

//UC9B
let nonWorkingDays = new Array();
let noOfPartTimeDays = new Array();
let noOfFullTimeDays = new Array();
dailyEmpWageMap.forEach((value,key,map) => {
    if (value == 160) noOfFullTimeDays.push(key);
    else if (value == 80) noOfPartTimeDays.push(key);
    else nonWorkingDays.push(key);
})
console.log("Full working days are : "+ noOfFullTimeDays);
console.log("Part Time  Working days are : "+ noOfPartTimeDays);
console.log("Non Working days are : "+nonWorkingDays);
//Method to get Work Hours  
function GetWorkingHrs(){
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}
function GetDailyWage(dailyWorkingHrs){
    return dailyWorkingHrs * WAGE_PER_HR;
}