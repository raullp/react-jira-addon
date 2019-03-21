# How to create a Jira Atlassian add-on

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Create a development Atlassian account

1. Go to `http://go.atlassian.com/cloud-dev` and register your instance.

## Update your app to be installed as Atlassian add-on

1. Create an `attlasian-connect.json` descriptor file that should be available at your project like https://yourdomain.com/attlasian-connect.json
You can use bellow file as template but make sure to update the key, and other extra information. The `baseUrl` should point to your domain (we will use ngork as a proxy for dev).
Feel free to validate your descriptor file at https://atlassian-connect-validator.herokuapp.com/validate

```json
{
 "name": "Hello World",
 "description": "Atlassian Connect app",
 "key": "com.example.myapp",
 "baseUrl": "https://<placeholder-url>",
 "vendor": {
     "name": "Example, Inc.",
     "url": "http://example.com"
 },
 "authentication": {
     "type": "none"
 },
 "apiVersion": 1,
 "modules": {
     "generalPages": [
         {
             "url": "/index",
             "key": "index",
             "location": "system.top.navigation.bar",
             "name": {
                 "value": "Greeting"
             }
         }
     ]
 }
}
```

1. Add the `Atlassian Connect JavaScript API` to your `index.html` file. If you don't add this file, the app will lunch in Jira but you will get an error message _App is not responding. Wait or cancel?_.

```html
<script src="https://connect-cdn.atl-paas.net/all.js"></script>
```

1. Add the `@atlaskit` (based on [Atlaskit](https://atlaskit.atlassian.com/)) react components in order to use the components that follow the Jira styling. *Note* The typs are not available for TypeScripts. Atlaskit packages https://atlaskit.atlassian.com/packages.

```sh
yarn add @atlaskit/code
```

1. Start your application using yarn.

```zh
yarn start
```

1. Serve your localhost and make it available to the web using ngrok localhost tunnel.

```sh
npm install -g ngrok
ngrok http 3000
ngrok by @inconshreveable                                       (Ctrl+C to quit)
                                                                                
Session Status                online                                            
Session Expires               7 hours, 59 minutes                               
Version                       2.3.18                                            
Region                        United States (us)                                
Web Interface                 http://127.0.0.1:4040                             
Forwarding                    http://d0511e80.ngrok.io -> http://localhost:3000 
Forwarding                    https://d0511e80.ngrok.io -> http://localhost:3000
                                                                                
Connections                   ttl     opn     rt1     rt5     p50     p90       
                              0       0       0.00    0.00    0.00    0.00 
```

Update the `baseUrl: 'https://d0511e80.ngrok.io'` in the descriptor `atlassian-connect.json`.
Make sure the `https://d0511e80.ngrok.io` and `https://d0511e80.ngrok.io/atlassian-connect.json` are served by ngrok.

## Deploy and install your app

1. Navigate to Jira in your Atlassian Cloud instance, then choose *Jira settings* (cog icon) > *Apps* > *Manage apps*.
1. Click *Upload app*.
1. In the *From this URL* field, provide a link to your app descriptor. This URL is the same as the hosted location of your `atlassian-connect.json` descriptor file. Our example uses the following URL: `https://d0511e80.ngrok.io/atlassian-connect.json`
1. Click *Upload*. Jira displays the *Installed and ready to go* message when the installation is complete.
1. Click *Close*.
1. Verify that your app appears in the *User installed apps* list. For example, if you used Hello World for your app name, then Hello World will appear in the list.
1. Navigate to the Jira home page. A new item labeled Greeting appears in the sidebar.
1. Click `Greeting` (1). The Hello World message displays (2).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
