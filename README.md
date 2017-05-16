# EdgeIEWorkTogether
Edge and IE11 work together in the Enterprise

## Enterprise Mode
To fine control how Edge and IE work together on the same machine, we use the Enterprise mode. Since IE11 on Windows 7, Enterprise mode allows us to tell how to render Web apps base on the full url.
With Windows 10, we introduced Edge as the default navigator. To deal with legacy Web Apps, we can still use IE11 as we used too on Windows 7. In order to control the Web Apps that have to be opened in Edge or IE, we configure IE with Enterprise Mode but also Edge.

*Note:* Enteprise list can be configured using GPO or registry directly.

As an exemple, you will find in this project the **ActivateEnterpriseMode.reg** file that creates the 2 needed for activating the Enterprise mode both for IE and Edge.

## Sitelist.xml
The **sitelist.xml** provided create entries for subdomains of localhost.com. Each subdomain name is a self-description of the entry itself. 

*For exemple:* enterprisemode_ie8_openinie.localhost.com means that the sitelist.xml entry is configured for this url to Enterprise Mode IE8 with open-in IE.

## Host file
In order to test browsing all urls *.localhost.com, you can copy/paste the content of the **hosts** file in the one located in C:\Windows\System32\drivers\etc\.

## index.html
The sample **index.html** just contains all links to facilitate navigation between urls. The file just have to be hosted on a local web server on the TCP port 80.