# React, Redux, Socket and Stock Chart App

## Prerequisite

Node `v12.19.0`
npm `6.14.8`

## Setup Instructions

In the project directory, you can run:

### `npm install`

To install the the dependency.<br /><br />

### `npm run build`

Build the app.<br /><br />

### ```npm install serve -g```

Install static server globaly.<br /><br />

### ````serve -s build````

Run the app on static server.<br />
vist [http://localhost:5000/](http://localhost:5000/)<br /><br />

Run integration test from another shell, application should be running to run integration test.

### `npm run cypress`

Launches the integration test list.<br />
click on `integration-test.spec.js` to start running automated integration test.<br />
verify scrrenshot in `cypress/screenshot` folder <br /><br />

### `npm test`

Launches the test runner in the interactive watch mode.<br /><br />

Alternativly you may run dev build as well by running

### ```npm start```

Visit [http://localhost:3000/](http://localhost:3000/)<br />
Please Note: if you are running application in dev mode, Please chage application url to http://localhost:3000/ in `cypress/integration/integration-test.spec.js` line number 5 before running integration test.

<br />
