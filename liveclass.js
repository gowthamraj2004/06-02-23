var name = "gowtham";
var a = 19;
var bo={
    fname: "gowtham",
    lname: "raj",
    age: 89
};
bo.city="karur";
console.log(bo.fname);
console.log(bo["fname"]);
console.log(bo);

let{fname:f,lname:l,collname:clg="krishna"} = bo;//assignment of variable for accessing property it is called object destructoring it can be also used to create a new property also
console.log(f);
console.log(l);
let{fname,lname}=bo;//property can also act as a variable
console.log(lname);



var per={};
per.name="geetha";
per.age=30;

var per1={};
per1.name="vishnu";
per1.age=17;

function print(state){
    console.log(this.name+" "+this.age+" "+state);

}

print.call(per,"tamilnadu");//call keyword is used to perform a function for many objects.
print.apply(per1,["karnataka"]);//apply is also used for same as call the only difference is the square bracket used to separate object and arguement
let pr1= print.bind(per1,"tamilnadu");//bind is used to assign the function call or apply to a variable and it is accessed through the variable name when needed
console.log(pr1);
pr1();


var sum1 = {
    num1:10,
    num2:5
}

var sum2={
    num1:20,
    num2:30
}

function add(){
    console.log(this.num1+this.num2);
}

add.call(sum1);
add.call(sum2);
