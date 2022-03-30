


function submitt()
{

    localStorage.setItem('name' ,document.getElementById('name').value);

    localStorage.setItem('age' , document.getElementById('age').value);
    
    localStorage.setItem('Birth' , document.getElementById('Birth').value);

    localStorage.setItem('gender' , document.getElementById('gender').value);

    localStorage.setItem('brief' , document.getElementById('brief').value);

    localStorage.setItem('major' , document.getElementById('major').value);

    localStorage.setItem('uni' , document.getElementById('uni').value);

    localStorage.setItem(getbase64(im) , document.getElementById('im').value);

    localStorage.setItem('bro' , document.getElementById('bro').value);

    localStorage.setItem('lang' , document.getElementById('lang').value);

};

document.getElementById('ca').innerHTML = 
"your name is: "+localStorage.getItem('name') +"<br/>" 
"your age is: "+ localStorage.getItem('age') +"<br/>" 
    "Birth Date : "+ getItem('Birth');