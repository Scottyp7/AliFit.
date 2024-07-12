# React + Vite

Connect to your instance using its Public DNS:
ec2-13-211-204-27.ap-southeast-2.compute.amazonaws.com or 
alifit.com.au


Version History

Version 1.1 - Completed 09/07/2024 
    Includes all front end applications.

Version 1.2 - Branch Created for CRUD Operations. 

Version 1.3 - Crud Branch Merged to Main Branch.


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

2. Locate your private key file. For Example the key used to launch this instance is ScottParker-ImmersionDay.pem
    Run this command, if necessary, to ensure your key is not publicly viewable.
        chmod 400 "ScottParker-ImmersionDay.pem"

3. run 
ssh -i "ScottParker-ImmersionDay.pem" ec2-user@ec2-13-211-204-27.ap-southeast-2.compute.amazonaws.com



Steps to update code from the local machine to the AWS Instance. 
    Steps 1 and 2 are ran on you local machine.
    Steps 3, 4 and 5 are ran inside of a terminal that is connected to the AWS Instance. 

1. docker build -t scottparker960/alifitfrontend .
2. docker push scottparker960/alifitfrontend  
3. sudo docker ps -a 
4. sudo docker stop 97780a6c36d7
5. sudo docker pull scottparker960/alifitfrontend
6. sudo docker run -d -p 80:5173 scottparker960/alifitfrontend