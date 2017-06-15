$location = "West Europe"
$AppServicePlan = "EdgeIEWorkTogether"
$myResourceGroup = "EdgeIEWorkTogether"

$webappnames = Get-Content AzureLinks.txt 
foreach ($webappname in $webappnames)
{
     New-AzureRmWebApp -Name $webappname -Location $location -AppServicePlan $AppServicePlan -ResourceGroupName $myResourceGroup
}
# The deployments are not scripted. The strict minimul is to deploy:
# - indexAzure.html as index.html
# - Cookie.js









