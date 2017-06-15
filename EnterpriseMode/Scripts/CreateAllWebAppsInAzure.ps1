$location = "West Europe"
$AppServicePlan = "EdgeIEWorkTogether"
$myResourceGroup = "EdgeIEWorkTogether"

$webappnames = Get-Content AzureLinks.txt 


foreach ($webappname in $webappnames)
{
     New-AzureRmWebApp -Name $webappname -Location $location -AppServicePlan $AppServicePlan -ResourceGroupName $myResourceGroup
}









