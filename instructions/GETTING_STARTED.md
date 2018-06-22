# Getting Started

## Table of Contents

* [Contributing](#contributing)
* [Cloning this Repository](#cloning-this-repository)
* [Installing Node & npm](#installing-node-&-npm)
* [How To Contribute](#how-to-contribute)
* [Heroku](#heroku)
* [mLab](#mlab)

## Contributing

You must be a Collaborator on this repository to contribute officially.
An Administrator (the VP of Marketing or the Director of Technology) must you as a Collaborator via the BerkeleyPSE GitHub account.

1.  As Administrator, log into the BerkeleyPSE GitHub account.
2.  Click on the `Settings` tab in the navigation bar.
3.  Click on the `Collaborators` option in the side bar.
4.  Add a Collaborator by their username.

This new Collaborator must accept access to contribute to this repository -- they will then have "push access".

Collaborators should contribute to this repository using their personal GitHub account rather than the BerkeleyPSE account. This allows all repository Collaborators to easily track who made which changes, and build out their own GitHub profile as they contribute to this project.

## Cloning this Repository

To clone this repository, open a terminal window and run

```bash
git clone https://github.com/BerkeleyPSE/berkeleypse.git
```

This will create a folder named `berkeleypse` that contains this git repository.

## Installing Node & npm

Node and npm are required to contribute to this repository.

You can download them both [here](https://nodejs.org/en/download/).

After download, ensure installation. Open a new terminal window, then run:

```bash
node -v # Confirm node is installed
npm -v  # Confirm npm is installed
```

## How to Contribute

Open a terminal and navigate to where you cloned the repository. Then, run:

```bash
cd berkeleypse
npm install # install the package dependencies for the server
cd client
npm install # install the package dependencies for the client
cd ..
npm run dev # this starts the server and client concurrently
```

A new browser window (ideally, Google Chrome) should open `localhost:3000`. Do this manually, if necessary.

## Heroku

[Heroku](#https://heroku.com) is used to deploy this website live at [berkeleypse.org](http://berkeleypse.org).

You must be a Collaborator on the Heroku application to deploy it. An Administrator must add a Collaborator via the BerkeleyPSE Heroku account.

1.  As Administrator, log into the BerkeleyPSE Heroku account.
2.  Click on the `Access` tab.
3.  Click `Add a Collaborator`.
4.  Add a Collaborator by their email.

Collaborators must use their personal Heroku accounts.

Once you are given access a Collaborator, open a terminal and navigate to where you cloned this repository. Then, run:

```bash
cd berkeleypse
git remote add heroku https://git.heroku.com/berkeleypse.git
```

Ensure this new remote was added:

```bash
git remote
# heroku
# origin
```

You must now download the Heroku command line interface. You can find the instructions to do so [here](https://devcenter.heroku.com/articles/heroku-cli). This will make it simple to deploy to Heroku via your terminal.

Once installed, navigate to where you cloned this repository. Then, run:

```bash
cd berkeleypse
heroku login
# Enter your Heroku username
# Enter your Heroku password
```

These must be the credentials given Collaborator access.

## mLab

In order to transact with the databases in development, you must be a Database User on the corresponding [mLab](https://mlab.com) MongoDB databases.

There are four mLab MongoDB databases.

1.  `pse-website` -- The **production** database for `Applications` and `Regforms`.
2.  `pse-website-dev` -- The **development** database for above.
3.  `pse-website-static` -- The **production** database for `Brothers`, `Fulltime` careers, and `Internship` careers.
4.  `pse-website-static-dev` -- The **development** database for above.

**You should never grant anyone User access to the production databases.** The only Users for the production databases should be those corresponding to Heroku configuration variables.

To grant/gain access to the _development_ databases

1.  As an Administrator, log into the mLab account.
2.  Click on the a development database deployment.
3.  Click on the `Users` tab.
4.  Click on `Add database user`.
5.  Enter a `USERNAME` and `PASSWORD` for the new Database User.
6.  Share these credentials with the new Database User.

The new Database User must new create a file `dev.js` in the `config` directory.

In `dev.js`, copy and paste the following code EXACTLY as follows:

```javascript
module.exports = {
  // corresponds to the `pse-website-dev` database.
  mongoAppURI:
    'mongodb://USERNAME:PASSWORD@ds113736.mlab.com:13736/pse-website-dev',
  // corresponds to the `pse-website-static-dev` database.
  mongoStaticURI:
    'mongodb://USERNAME:PASSWORD@ds121999.mlab.com:21999/pse-website-static-dev'
};
```

Replace `USERNAME` and `PASSWORD` with your personal user credentials.

For example, if your username is `rahul` and your password is `lovesPSE`, your `dev.js` file will look like:

```javascript
module.exports = {
  mongoAppURI:
    'mongodb://rahul:lovesPSE@ds113736.mlab.com:13736/pse-website-dev',
  mongoStaticURI:
    'mongodb://rahul:lovesPSE@ds113736.mlab.com:13736/pse-website-dev'
};
```

Once you've created `dev.js`, **NEVER ADD IT TO THE GITHUB REPOSITORY**. This would compromise the private key, necessitating every database user change their password. `dev.js` should **not** be added to the repository by default -- the file is included in `.gitignore`.
