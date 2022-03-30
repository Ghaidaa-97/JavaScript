console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
let arr1=[1,7,9,45];
let arr2=["str","alex","moh"];
let arr3=['the','fox','over','lazy','dog'];

console.log(arr1 , arr2 , arr3);


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf('Tomato') , fruits.indexOf('Banana'));

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let food=['food1','food2','food3','food4','food5'];
let sport=['sport1','sport2','sport3'];
let movie=['movie1','movie2','movie3','movie4'];
console.log(food,sport,movie);


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
var first=['g','h','i','d','a'];
firstOfArray.apply(this,first);

function firstOfArray()
{
  console.log(first[0]);
}


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
var last=['g','h','i','d','a'];
lastOfArray.apply(this,last);

function lastOfArray()
{
  console.log(last[last.length-1]);
}


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
edit.apply(this,array);
function edit()
{
    for(i=0;i<3;i++)
    {
      array.shift();
    }
    array.unshift(1,3,4,6,8);
    array.push(10);
    console.log(array);

}

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [0,5,7,9];
edit2.apply(this,array2);
function edit2()
{
  array2.shift();
  array2.pop();
  array2.push('g');
  array2.unshift('o');
  console.log(array2);
}


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

let q=[1,'a',3];
let w=[1,2,3,4];

function middle(x)
{
  l=parseInt(x.length /2);
  
  if(x.length % 2==0)
  {
   console.log(x[l-1],x[l]);
  }
  else
  {
  console.log(x[l]);
  }
}
middle(q);
middle(w);


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']

animals[0]='Zebra';
animals[1]='elephant';
animals.pop();
console.log(animals);

var nums= [1,2,3,8,9]

nums[0]=5;
nums[1]=-22;
nums[2]=3.5;
nums[3]=44;
nums[4]=98;
nums[5]=44;
console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(s,d)
{
  return s[d];
}
var num= [1,2,3,8,9];
console.log(indexOfArray(num,4));
console.log(indexOfArray(num,2));
console.log(indexOfArray(num,0));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(z)
{
  z.pop();
  return z;
}
var zz=[1,2,3];
console.log(arrayExceptLast(zz));


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(n,m)
{
  n.push(m);
  return n;
}
var nn=[1,2,3];
var mm= 10;
console.log(addToEnd(nn,mm));


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(b)
{
  var sum2=0;
  for(i=0; i<b.length ; i++)
  {
    sum2=sum2+b[i];
  }
  return sum2;
}
  var nu=[1,2,3,4];
  console.log(sumArray(nu));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var min=0;
function minInArray(f)
{
  min = f[0];
  for(i=0;i<f.length;i++)
  {
    if(f[i]<min)
    {
     min = f[i];
    }
  }
  console.log(min);
}
var rr=[9,6,4,2,-3];
minInArray(rr);

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr , e)
{
  for( i = 0; i < arr.length; i++){ 
                                   
    if ( arr[i] === e) { 
        arr.splice(i, 1); 
        i--; 
    }
    
}
return arr;
}
ms= [1,2,3,8,9]
console.log(removeFromArray(ms,8));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(ar)
{
  for( i = 0; i < ar.length; i++)
      {
        if ( ar[i] % 2 ==0) 
        { 
          ar.splice(i, 1); 
          i--; 
        }
      }  
          return ar;
    }
   console.log(oddArray([1,2,3,8,9]));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(sh)
{
  summ = 0;
  for( i = 0; i < sh.length; i++)
  {
    summ = summ + sh[i];
  }
  return summ/sh.length;
}
sh= [1,2,3,8,9,77];
console.log(aveArray(sh))

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(ar5)
{
  v=[];
  for( i = 0; i < ar5.length; i++)
  {
    if( ar5[i] % 2 ==0 && i % 2 ==0)
    {
      v[i]=  ar5[i]
    }
  }
  return v;
}
arr5 =[2,1,3,4,4,5,6];
console.log(evenNumberEvenIndex(arr5));