function CreateCookie(domainName)
{
    document.cookie = "SSO_cookie=" + domainName + " created at " + (new Date()).toUTCString()
    + "; expires=Thu, 29 Dec 2022 12:00:00 UTC"
    + "; path=/"
    + "; domain=" + domainName;
    ReadCookie();
}

function ReadCookie()
{
    var x = document.cookie;
    document.getElementById("cookieText").innerHTML = x;
    //alert(x);
}