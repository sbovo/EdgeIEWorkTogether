function CreateCookie()
{
    document.cookie = "SSO_cookie created at " + (new Date()).toUTCString() +
     "; expires=Thu, 29 Dec 2022 12:00:00 UTC;"; 
}

function ReadCookie()
{
    var x = document.cookie;
    document.getElementById("cookieText").innerHTML = x;
    alert(x);
}