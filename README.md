# Relentless
Relentless is an app helps the users achieve their goals using three principals: clarity, hyperfocus, and discipline.

## Relentless Summary
The app asks the user to define annual goals and set micro-goals underneath each annual pillar (both monthly and weekly).
The user can then track progress by marking the weekly, monthly, annual goals that have been completed.
A summary of the progress is provided to the user in a dashboard in the user page.

### Live App
Home Page: https://relentless-app.now.sh/
User Page: https://relentless-app.now.sh/user1

### Documentation of API
All CRUD operations are available for the following API endpoints.

/api/annualGoals - endpoint for annual goals table
/api/monthlyGoals - endpoint for monthly goals table 
/api/weeklyGoals - endpoint for weekly goals table

Note: API deployed at https://fast-hollows-95993.herokuapp.com

Please refer to the README of the API for additional documentation.

The API repo is linked below:
https://github.com/johlee92/relentless-server

### Screenshots of App

#### Landing Page
![](https://user-images.githubusercontent.com/52260646/79395178-58067080-7f36-11ea-9fcc-db14d0a2648f.png)
Please click one of the skyblue Try for Free buttons to enter the user page with app functionalities

#### Middle Section of Landing Page
![](https://user-images.githubusercontent.com/52260646/79680538-f19b7f80-81cd-11ea-896a-26bc91ac6637.png)
This section explains the main principles behind the app and the three actions or benefits for the user.

#### Sample User Page
![](https://user-images.githubusercontent.com/52260646/79395392-c21f1580-7f36-11ea-9165-c62e60d39f2c.png)
This is the main user page. Some notes from top to bottom:
The user sees the current week as a header with buttons below it to navigate to other weeks
Below that is a gray navigation panel to toggle between weekly, monthly, and annual goals
Then there's a dashboard that calls out action on the user's part (e.g. please enter weekly goals) and shows progress to date.
The last section is the specific goals that the user has set.
There's also an "add goal" button for the user to add new goals.
Please note that the concept of the app is to create additional accountability to achieve defined goals.
Therefore, once a goal is created, it cannot be deleted (it can be updated).

### Technology Used
Please see below the technologies used for this app.
Client: React, JavaScript, CSS, moment, enzyme
API: Node, JavaScript, PostgreSQL, Express, mocha, chai, nodemon

### `npm start`
start the application

### `npm test`
launches the test runner in the interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder