# React + Vite

About:

AliFit. is a personal training business operating out of Sydney. It is a solely online business that has been growing by attracting new users through instagram.
The purpose of this website is to create a more professional and enticing UI to attract clients from further afield.
Built with Alison's specifications in mind, the website has a clear a simple layout. Fluidity was the most import design aspect as Alison gets most of her clients from mobile.


GitBranch - Crud 
    This is part of future development which queries the backend application to create, update and delete.

Git Branch - Workout Log
    This is part of future development which allows users to login and track their workout progress and favourite workouts. The stakeholder enters all workout information through a form. 
    


How to run the application on your local machine. 
1. Open a terminal in VS Code
3. Navigate to the file path that you want to install the application in using: cd "filename"
2. Paste the following command into the terminal:
    git clone https://github.com/Scottyp7/AliFit..git
3. Change to the source code folder on your machine using: cd AliFit. 
4. The app uses several npm packages to work. You will need to install them to run the application:
    npm install cors node mongoose dotenv
5. Use cd AliFit. to change to the application folder.
6. Next we need to start the front end and the back end inside of 2 terminals. 
    Terminal 1 Use: cd alifit > npm start
    Termianl 2 Use: cd AliFitmongoDB > npm start.
7. This will start the vite + react app on port 5173. You can use the link in the termianl to navigate to the page.



How to connect your local terminal to the AWS Server.

Instance ID
i-072bdcb12e4576789 (Alifit)
1. Open an SSH client.

2. Locate your private key file. For Example the key used to launch this instance is {YOUR OWN PEM FILE}.pem
    Run this command, if necessary, to ensure your key is not publicly viewable.
        chmod 400 "YOUR OWN PEM FILE.pem"

3. run 
ssh -i "YOUR OWN PEM FILE.pem" ec2-user@{YOUR AWS PUBLIC DNS}


Steps to update code from the local machine to the AWS Instance. 
    Steps 1 2 and 3 are ran on you local machine.
    Steps 4, 5, 6, 7 and 8 are ran inside of a terminal that is connected to the AWS Instance. 

1. docker build -t {YOUR DOCKER USERNAME}/alifitfrontend alifit
2. docker push {YOUR DOCKER USERNAME}/alifitfrontend  
3. Run Steps 1 and 2 again but change alifitfrontend to alifitmongodb and change alifit to AliFitMongoDB.

Steps 4 and 5 are only for updating alifit. If you are installing it for the first time skip these steps. 
4. sudo docker ps -a 
5. sudo docker stop {YOUR CONTAINER ID}


6. sudo docker pull {YOUR DOCKER USERNAME}/alifitfrontend
7. sudo docker run -d -p 80:5173 {YOUR DOCKER USERNAME}/alifitfrontend
8. Run Steps 5 and 6 again but change alifitfrontend to AliFitMongoDB and change the port number from 80:5173 to 8080:8080
