# watchproject

## Setup
In case of dependency problems
```
yarn install
```
```
npm install expess
```
```
npm install body-parser
```
```
npm install express-handlebars
```
```
npm install cors
```


### Building
For building the tailwind output.css
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```


### Running
**First** run server (port 8080)
```
node server.js
```
**Then** run website (port 8081)
```
npm run serve
```

