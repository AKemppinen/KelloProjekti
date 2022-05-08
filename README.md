# watchproject

## Beware!

**Adding content to the database will disrupt the web-page at it`s current state!**

The rendering of images from the database is not ready and a watch from database has to have a cover image and a brand image inside assets to work.


### Setup
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

Main-site: http://localhost:8081/

Admin-site : http://localhost:8080/admin/



