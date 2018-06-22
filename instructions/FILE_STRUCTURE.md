# File Structure

This project is structured as such

```
berkeleypse
  instructions/
  client/
    src/
      actions/
      containers/
      reducers/
      stylesheets/
      index.css
      index.js
    public/
      images/
      index.html
    package.json
    static.json
  config/
  databases/
  models/
  routes/
  index.js
  package.json
  README.md
  .gitignore
```

`berkeleypse` is the top-level directory and name of this GitHub repository.

The `instructions` directory contains information on this project, including how to get started, contribute to this website, and make changes. All files in this directory are markdown (`.md`) and easily viewable in GitHub.

## The `client` Directory

**The `client` directory and its sub-directories and files contain all code for the front-end.**

* `package.json` contains all dependencies and scripts for the front-end.
* `static.json` contains a set-up script necessary to connect the front-end routes via `react-router`.

### The `src` Directory

_The `src` directory contains all dynamic code bundled by webpack._

* The `actions` and `reducers` directories contain the Redux actions and reducers. Redux is used to communicate with the mLab MongoDB databases.
* The `containers` directory contains all components used to build this website. The majority of your changes will be made in this directory's files.
* The `stylesheets` directory contains `CSS` styles needed to modify third-party components.
* `index.css` declares global variables and CSS resets. It is incorporated into `index.js`, and therefore throughout the entire front-end.
* `index.js` is the root of the front-end of this application.

### The `public` Directory

_The `public` directory contains all assets public to users._

* The `images` directory contains all images used throughout this website. It is in better practice to host the sites images via [Cloudinary](https://cloudinary.com/) rather than on the front-end itself.
* `index.html` contains website metadata, as well as any non-npm libraries (e.g. FontAwesome, Google Fonts) used.

## The Implicit `server` Directory

**The following files and directories consist of the back-end of this website.**

* `index.js` is the root of the back-end of the website. All page changes, endpoint requests, etc. are routed through this file.
* `package.json` contains all dependencies and scripts for the back-end.
* `.gitignore` contains files that should be ignored when pushing to this GitHub repository.

### The `config` Directory

_The `config` directory contains logic to determine which keys to use to transact with the MongoDB database._

* If in development, the front-end is hosted on `localhost:3000` and the back-end is hosted on `localhost:5000`. The keys in `dev.js` -- a file unique to each developer -- will be used.
* If in production, the website is live at [berkeleypse.org](http://berkeleypse.org). The keys are stored as configuration variables in the Heroku application and are accessible via `process.env.[KEY]`. `prod.js` contains the logic to make use of the configuration variables.
* `keys.js` determines whether or not the application is in `production` to use the corresponding keys. You should **never** need to modify this file.

### The `databases` Directory

_The `databases` directory contains files which connect to the `pse-website` and `pse-website-static` MongoDB databases. Each connection must be made separately to prevent overwriting the a previous connection, and allows for easy scaling (addition of more databases, if necessary)._

### The `models` Directory

_The `models` directory contains files which link the MongoDB databases with the data schemas declared in the node module [`berkeleypse-schemas`](https://www.npmjs.com/package/berkeleypse-schemas)._

### The `routes` Directory

_The `routes` directory contains endpoints for the entire website._

* `api.js` declares the actual endpoints.
* `applicationRoutes.js` and `regformRoutes.js` each contain a single endpoint for `POST`ing new form submissions to the `pse-website` MongoDB database.
* `brotherRoutes.js`, `fulltimeRoutes.js`, and `internshipRoutes.js` each contain a single endpoint for `GET`ting information from the `pse-website-static` MongoDB database into the front-end `DataReducer` Redux store.
