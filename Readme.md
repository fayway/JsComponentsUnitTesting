#Launch App
```
npm run dev
```

#Launch Tests
```
npm run devtest
```

#Webpack Recap

##Installing Webpack
```
npm install webpack -g
```

##Run Webpack with watch mode enabled
```
webpack --watch
```

##Webpack Dev Server
Webpack has a web server called webpack-dev-server. From the command line, install webpack-dev-server globally:

```
npm install webpack-dev-server -g
```

From the command line, run the following command:

```
webpack-dev-server
```

To enable hot-loading and remove the App Ready status bar at the top, terminate the webpack-dev-server and rerun webpack-dev-server with the inline flag:

```
webpack-dev-server --inline
```

#Sources
1- https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460