# EdgeIEWorkTogether
Edge and IE11 work together in the Enterprise

## Enterprise Mode
To fine control how Edge and IE work together on the same machine, we use the Enterprise mode. Since IE11 on Windows 7, Enterprise mode allows us to tell how to render Web apps base on the full url.
With Windows 10, we introduced Edge as the default navigator. To deal with legacy Web Apps, we can still use IE11 as we used too on Windows 7. In order to control the Web Apps that have to be opened in Edge or IE, we configure IE with Enterprise Mode but also Edge.

*Note:* Enteprise list can be configured using GPO or registry directly.

As an exemple, you will find in this project the **ActivateEnterpriseMode(Azure)?.reg** file that creates the 2 needed registry keys for activating the Enterprise mode both for IE and Edge.

### Sitelist(Azure)?.xml
The **sitelist(Azure)?.xml** provided create entries for subdomains of localhost.com. Each subdomain name is a self-description of the entry itself. 

*For exemple:* enterprisemode_ie8_openinie.localhost.com means that the sitelist.xml entry is configured for this url to Enterprise Mode IE8 with open-in IE.

### index(Azure)?.html
The sample **index(Azure)?.html** just contains all links to facilitate navigation between urls. The file just have to be hosted on a local web server on the TCP port 80.

### Intranet Zone
All urls starting with "intranet" have to be added to the IE Intranet zone.

## Local scenario
For local usage, the **hosts** file allow tests for browsing all urls *.localhost.com. You can copy/paste the content of the file in the one located in C:\Windows\System32\drivers\etc\.

##Azure scenario
Extra steps have to be done for using the indexAzure.html on Azure Web Apps: 
- Create a ressource group named "EdgeIEWorkTogether"
- Create all Web Apps using the CreateAllWebAppsInAzure.ps1
- Deploy the IndexAzure.html on these Web Apps (This step is not automatised)
