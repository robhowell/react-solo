# React Solo

### For developing one React component at a time

## How to use
1. ```yarn add -D react-solo```
2. ```npx react-solo```
3. Use arrow keys to select the component
4. Press enter
5. Your browser will open and load the component

## How to specify which component to load from the command line
1. ```npx react-solo src/App/App.js```
2. Your browser will open and load the component

## Tips
- React Solo is optimised for projects using create-react-app (it uses create-react-app for rendering). Most components from other React projects should  still work, but if you discover any compatibility problems then please raise an issue.
- If you use non-default exports on a component then you can pass in a second argument to specify the export name, e.g. to load the DropdownUnstyled export from the Dropdown.js file: ```npx react-solo src/Dropdown/Dropdown.js DropdownUnstyled```

## MVP
- No menu to select components, component file must be specified on command line instead
- If it is easier, use a custom Webpack and Babel config, switching to create-react-app/react-scripts later

## Task list: stuff that should happen on install
- [x] Create .react-solo folder if it doesn't already exist
- [x] Use cross-spawn to run "cd .react-solo" command
- [x] Copy all runtime dependencies from root package.json (if on second run, do a one-way sync from root to .react-solo directory)
- [x] Create package.json file with the necessary dependencies + react-scripts + react + react-dom
- [x] Use cross-spawn to run "cd .react-solo" command
- [x] Use cross-spawn to run npm install (or yarn install if installed)
- [ ] Use console.log and chalk to give user updates
- [ ] Replace App.js with file that imports the target component and puts it in render function
- [ ] Run npm/yarn start in that directory
