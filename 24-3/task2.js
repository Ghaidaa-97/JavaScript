/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
var Me = [
  {name: {first: "Ghaida", last: "Obeidat"},age: 21,dob: "24.2.1997",favFood: ["food1", "food2r", "food33"], favMovies: ["movie1", "movie2", "movie3", "movie4", "movie5"]}];
console.log(Me);




/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

    function firstName() {
        let x = [];
        for (i = 0; i < persons.length; i++) {
            x[i] = (person[i].name.first);
        }
        return x;
    }
     
    const person = Object.create(persons)
    console.log(firstName());



/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
function averageAge() {
  let x= 0;
  for (i = 0; i < persons.length; i++) {
      x += (avg[i].age);
  }

  return x / persons.length;
}

const avg = Object.create(persons)
console.log(averageAge());

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson() {
  
  let x= 0;
  let y="";
  for (i = 0; i < persons.length; i++) {
      if (old[i].age > x ) {
          x = old[i].age;
          y=old[i].name;
      }
  }
  return y;
}

const old = Object.create(persons)
console.log(olderPerson());

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"

*/

function longestName(){
  
  let c=0;
  let d="";
    
  for(i=0; i<persons.length ;i++ )
  {
    let a=long[i].name.first+long[i].name.last;
    
  if( a.length > c)
  {
    c= a.length ;
    d= long[i].name.first+ " " +long[i].name.last;
  }
}
  return d;
}

const long = Object.create(persons)
console.log(longestName());



//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
var sentence="my name is ghida my last name is obeidat my age is 25";

function repeatWord(sen) {
  var array = sen.split(' ');
  var object1 = {};

  for (i = 0; i < array.length; i++) {
    if (object1.hasOwnProperty(array[i])) {
      object1[`${array[i]}`]++;
    }

    else
      object1[`${array[i]}`]=1;
  }
  return object1;
}

console.log(repeatWord(sentence));


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
var sr="aabbbbcdddddd";

function repeatChar(s)
{
    var object2 = {};
    for(i = 0 ; i < s.length; i++)
    {
      if(!object2.hasOwnProperty(s[i])){ 
        object2[`${s[i]}`] = 1;
     
   }else{
    object2[`${s[i]}`]++;
   }
}
return object2;
}

console.log(repeatChar(sr));



//9
//Create a function called selectFromObject
//that accept an object and an array
//and return an object have the key that inside the array

//Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
//=>  {a: 1, cat: 3}

/*function selectFromObject(ob , arr)
{
  for(i=0 ; i<arr.length ; i++)
  {
    if(ob.keys(arr[i]))
    {
      
    }
    
  }
}
console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));*/

function selectFromObject(obj , arr){
  ob = {};
  for(i = 0; i < arr.length ; i++)
  {

      for (const [a , b] of Object.entries(obj)) {
            if(a== arr[i])
           ob[`${arr[i]}`] = b;
      
  }
}

  return ob;

}
console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));
