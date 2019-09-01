# React NodeGUI Boilerplate

## Quick Start

#### Setup

```bash
npm install
```

#### for Development

```bash
npm run dev
# new window
npm run start
```

#### for Production

```bash
npm run build
```

#### Other Commands

```bash
npm run debug
npm run build:dev
npm run lint
npm run lint:fix
```

## Setup Instructions

To setup your own project, you will need to copy the contents of this project into a new repo.
You will need to update the content in these files to names of your project and yourself:

* package.json: name, version, description, repository, author, bugs, homepage,
* LICENSE: (update to your preferred license)
* this README.md

This is also a good time to go through the included libraries to add or remove features that you want.

After this you can commit the files into a new repository and push up to your github.
You can now start updating files in your client to begin working on your own project!

## Features

* Webpack 4 conveniently bundles your code for you.
* Babel lets you use ES6/7 features.
* ESLint helps you maintain a high level of code quality.

## Code Structure

```
- config
- scripts
- client
  - assets
    - images
    - icons
  - components
    - atoms
    - molecules
    - organisms
    - templates
    - pages
    - environment
  - hooks
  - utils

```

Component Heirarchy:

Environment > Pages > Templates > Organisms > Molecules > Atoms

This is based on atomic design. Learn more about [atomic design](http://bradfrost.com/blog/post/atomic-web-design/).

## Todo

* Implement Testing Suite
* Deployment
* Hot Reloading

## Technologies

[Node GUI](https://nodegui.github.io/nodegui/) - Desktop GUI Framework

[React](https://facebook.github.io/react/) - View Library

[Redux](http://redux.js.org/) - State Manager

[Webpack](https://webpack.github.io/) - Module Bundler

[Ramda](http://ramdajs.com/) - Functional Library

[date-fns](https://date-fns.org/) - Date Functions Library

[ESLint](http://eslint.org/) - Code Linter
