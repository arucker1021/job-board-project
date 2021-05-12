# Description

This is a simple job board React app that allows a user to edit job listings and add more within a simple screen

I used emotionJS to go with the css in JS route since it was recommended and enzyme for testing with jest since it was what I was most comfortable with.

For implementing the design I went with a design system approach to make the development of css a little more streamlined and implement standardized colors and use rem values globally within the project. I did change one of the colors from figma to a slightly darker gray because of the text not being WCAG AA compliant on the light gray background. I also used less colors over all since there were a few that were very close to each other and I did not feel it was necessary to have the full color gamut of what was effectively black.

In terms of functionality one of the major questions I ended up having was when editing a job whether or not to update the date field. I think it made the most sense to update a Job's Posted date to whatever date is today and still the outstanding question of `Month/Day/Year` or `Day/Month/Year` and think it could have benefited from being standardized to a full string but left this out since it was a dev project and wanted to follow designs as closely as possible.

On the JobForm Page there is questionable padding in a few places so I opted to keep it generic for each section so everything feels centered within their boxes.

For the Individual Job Rows for the Job table I used a css grid so it's not 100% pixel perfect to the design but this allowed for the headers to match up with the individual field values without actually using a table (went down that rabbit hole and styling tables is ROUGH).

I tried to keep accessibility in the forefront of my design/architecture to make sure that if a user is using a screen reader or keyboard to navigate the app, that the user experience is still great and everything makes sense in context. Future Enhancements would include screen readers reading out full dates regardless of what format they're in, Reading out state names when a state code is used (e.g. 'TX' as 'Texas'). I didn't implement these things becuase these were user edited fields but something of a workaround could be a City field with a State dropdown to mitigate this use case.

# How to Run This Project

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

# Final Thoughts

There is currently a space within the Job Board Form where I used an `any` type on a couple of things to get what I needed to work. I know this isn't ideal but with the data I'm working with I wanted to get it working first and this would be a good enhancement going forward

Another future enhancement would be to add proper routing. It wasn't fully necessary since it was 2 screens with 1 screen having dynamic text and them being directly related.
