# projabo

## Requirements

- [node.js](https://nodejs.org/en/)
- TypeScript: Install via the terminal with the command `npm install -g typescript`

## Development

With TypeScript installed, execute `tsc ts/<FILE>.ts --out js/<FILE>.js` to transpile a TypeScript file named <FILE>.  
To start a simple webserver to host the files at localhost:8000 just run "python3 -m http.server [PORT]" when in the repo root dir. This is needed because simply visiting the index.html file in your browser will not run the .js because of security reasons.
