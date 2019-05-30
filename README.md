## install jquery and save to project dependencies
install jquery and save to project dependencies
npm install jquery --save

## install typings for jquery, used by typescript. save to dev dependencies

npm install @types/jquery --save-dev
## include jquery in tsconfig types array
...
"types": [
  "jquery"
]
...

## include jquery and the plugin script in .angular-cli.json as global scripts
...
"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "<path-to-plugin-script-file>"
]
...
