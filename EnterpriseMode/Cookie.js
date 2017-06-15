function CreateCookie()
{
    document.cookie = "username=SSO_sbovo; expires=Thu, 29 Dec 2022 12:00:00 UTC; path=/"; 
}

function ReadCookie()
{
    var x = document.cookie;
    document.getElementById("cookieText").innerHTML = x;
}