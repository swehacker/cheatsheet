# Cheat Sheets
Collect all notes in one place using handlebars for templating and json for data.

## Project setup
### Frameworks used
- normalize.css for differences between browsers and platforms
- masonry.js for layout
- handlebars.js for templating
- node.js for running the server
 - express for handling the http request and routing

### Setup
Install the node dependencies
```bash
npm install
```

### Start
Node will use port 9000 by default.
```bash
node server.js
```
If you want it to run in another port you can set an env variable PORT to something else.
```bash
PORT=80 node server.js
```
