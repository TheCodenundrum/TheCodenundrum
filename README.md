# TheCodenundrum
## Project Overview
TheCodenundrum is a dynamic web application hosted on the Azure Web Application service. It was made using Node.js and Express. 

The primary function of this web application is to provide guides on specific programming languages that I personally make. These guides are made with the intent to provide me an easy reference to concepts that I may use throughout my career. TheCodenundrum currently features a homepage with login functionality and one Python guide that can be navigated to.

## Current Features
- Azure Web Application Deployment
- Authentication Using Google Authentication
- Continuous Deployment using Azure-GitHub Integration
- 1 Python Guide

## Access
TheCodenundrum can be accessed by navigating to [TheCodenundrum](thecodenundrum.com)

## TheCodenundrum Project
### Operating System and Commercial Platform
TheCodenundrum is hosted and deployed using the Azure Web Application service. I chose to deploy using a Linux operating system for my server. This Linux server was setup with a Node.js 20-LTS runtime environment to allow me to build my web application.

### Demonstration and Deployment
TheCodenundrum can be accessed using the link above. This custom domain is connected to the default domain [thecodenundrum.azurewebsites.net](thecodenundrum.azurewebsites.net). This allows users to access the site using a more professional domain. This was done by creating a custom DNS record that fowards the thecodenundrum.com to my default domain. In addition to this, I used GitHub Actions to setup continuous deployment on my application. Any push into the main branch on the repository will automatically deploy the changes to my application deployment. 

While the inner workings of the cloud deployment cannot be easily demonstrated, you can navigate to one of the two links above to see the web application deployment. You will be redirected to the home page. From here, you can chose to sign in with a Google account by clicking the sign in button. You can also navigate to the one Python guide by clicking 'Python' in the navbar.

### Key Stores
Currently, TheCodenundrum does not deploy a database as there is no function to logging in. 

My key stores for Google Authentication are stored on the Azure Server and a seperate Google API server. The secret key used by Google is stored on a seperate server from my deployment. This server is owned by Azure and secured by them. All other keys are managed by Azure themselves, and they only way for an attacker to access them is to access Azure servers themselves or have access to my Azure dashboard. I have implemented multi-factor authentication for my Microsoft account so that attackers have a more difficult time accessing my Azure account.

### Deploying the Cloud
The first step to deploying my cloud web application was to compare the offerings on the market. AWS, Google Cloud, and Azure all had great options, but Azure ultimately won due to the cost to deploying my project being extremely low. Once I made an Azure account, I navigated to their Web App tool. Once here, I followed the on-screen prompts to create a cloud hosted Web App and linked a GitHub repository to allow for continuous deployment. The GitHub repo was populated with an initial Express app for Node.js and I continued development to get a home page and one Python guide. This allowed me to test the automatic deployment, which was successful.

### Securing the Cloud
The first issue of security is the fact that I use a custom domain that points to my default domain. If my custom domain is attacked, then the link to my site could be used to redirect users to a malicious server. I have mitigated this threat by using an ASUID-CNAME authentication when my server recieves a redirect from my personal domain. This combination ensures that the connection is secure and can only redirect to my Azure deployment. In addition to this, my application will only launch using HTTPS ensuring that requests and responses are encrypted and signed. I also utilized the Azure App Service Managed Certificates to generate a managed TLS/SSL certificate that can be used with HTTPS. These certificates are managed by Azure itself and does not require storage on my deployment, increasing its security.

The second issue would be the potential access to this repository itself. If an attacker were to gain access to the repository, then they would be able to deploy attacks on the users of TheCodenundrum automatically due to my continuous deployment setup. I have mitigated this vulnerability by ensuring that the repository is locked down. I am the only person able to commit to the main branch, and my account is setup with multi-factor authentication, including Authy, an authentication application that generates verification tokens every 30 seconds.

Another issue is the access to all the accounts that I used to make TheCodenundrum. If an attacker could access my GitHub, Azure, or even my personal development computer, they would be able to use that to change the settings and code themselves. I have taken measures to protect my accounts through multi-factor authentication, so the real vulnerability would be my personal computer. If this was a true business application, I would need to take extra steps to ensure that my development platform is more secure. 

Finally, my web application uses multiple different secret keys to allow for all of the functionality it implements. The secret key for my custom DNS is kept on my Azure account and my Squarespace account. These are both locked down by multi-factor authentication. Similarly, my GitHub and Google Cloud accounts use multi-factor authentication. The secret key that is used for Google Authentication is stored on a seperate Azure server that I cannot access. In order for me to create a new authentication key, I would need to delete the previous one and setup a new service entirely.

### The Future

I plan on continuously updating TheCodenundrum. Some features that I would like to have implemented are listed below. I did not have the time to implement these features, but they were part of the original design.
- The ability to have custom home pages when signing in. This is where the database would have been implemented.
- More guides on different languages.
- A better visual aesthetic and design.
- Other functions to make it a true homepage for myself.
