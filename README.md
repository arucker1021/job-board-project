# Description
This is a simple job board React app that allows a user to edit job listings and add more within a simple screen

For the Add/Edit functionality I went with a Modal window to bypass routing since the entire application is 3 screens total (for now).

I used emotionJS to go with the css in JS route since it was recommended and enzyme for testing with jest since it was what I was most comfortable with 

# How to Run

Clone this repo to your preferred location using whichever github cloning command you're comfortable with

After `git clone`-ing the repo open a terminal and navigate to where you put the folder and `cd` into `job-board-project`

Here you will need `npm install` to get all the packages used up to date and installed to run
(if node isn't installed, install using directions from [here](https://www.npmjs.com/get-npm))


Once it is installed you will be able to run the following commands to interact with the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.