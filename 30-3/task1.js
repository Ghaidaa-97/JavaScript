/*function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}*/


const Cname = /^[A-Za-z]/g;
const Cbdate = /^\d{2}\/\d{2}\/\d{4}$/ ;
const Cmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const Cpass = /^(?=.*\d{2,})(?=.*[$-/:-?{-~!"^_`\[\]]{1,})(?=.*\w).{8,}$/;


function sub1()
{
var fname = document.getElementById('first').Value;
var lname = document.getElementById('last').Value;
var birth = document.getElementById('birth').Value;
var mail = document.getElementById('mail').Value;
var mail1 = document.getElementById('mail1').Value;
var pass = document.getElementById('pass').Value;
var pass1 = document.getElementById('pass1').Value;

    name(fname , lname);
    birth(birth);
    mail(mail , mail1);
    pass( pass , pass1);
}


function name(fname , lname)
{
    if(fname.match(Cname) && lname.match(Cname))
    {
        window.alert("iam work")
    }
    else {
        window.alert("name should be letters only")}
}

function birth(birth)
{
    if(birth.match(Cbdate))
    {}

    else{ alert("BirtDate format should be (MM/DD/YYYY)")}
}

function mail(mail , mail1)
{
    if(mail.match(Cmail) && mail1.match(Cmail) && mail === mail1)
    {}

    else {alert("Email is invalid")}
}

function pass( pass , pass1)
{
    if(pass.match(Cpass) && pass1.match(Cpass) && pass === pass1)
    {}

    else {alert("password is invalid or do not match")}
}