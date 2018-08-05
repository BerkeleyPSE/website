# Berkeley Pi Sigma Epsilon

The website for UC Berkeley's marketing & business fraternity Pi Sigma Epsilon, Zeta Chi Chapter.

Visit us at [berkeleypse.org](http://berkeleypse.org).

---

## Table of Contents

- [Development](#development)
- [Terminology](#terminology)
- [Infrastructure](#infrastructure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [File Structure](#file-structure)
- [Contributors](#contributors)

---

## Development

After cloning this website repository and the [api repository](https://github.com/berkeleypse/api) [(see here for instructions)](#cloning-repositories), run the following.

In the api directory:

```bash
yarn install # install the node modules/packages necessary to develop the api
yarn run dev # start the local development server at http://localhost:8000
```

In this website directory:

```bash
yarn install # install the node modules/packages necessary to develop the website
yarn run start # start the local development server at http://localhost:3000
```

---

## Terminology

The following terms are used throughout this documentation.

- **repository** (repo): [GitHub](https://github.com) is a platform used to store code in a one area, a _repository_. Netlify and Heroku -- our hosting/deployment services -- connect to our GitHub repositories.

- **viewer** (audience): those who visit our website to learn about our fraternity, apply for membership, etc.

- **administrator**: refers to the _Vice President of Marketing_ or the _Director of Technology_, who both have all-access to make and deploy changes to the website, and allow other developers to do the same. As most accounts were created with the Vice President of Marketing email, they may have to grant access to the Director of Technology and others.

- **developer** (contributor, collaborator): anyone who makes changes to code for the website or api, and may not necessarily have access to deploy.

- **local development**: changes made on a developer's computer but _not_ in production.

- **production** (live, like _alive_): the website or api as they are when visiting [berkeleypse.org](http://berkeleypse.org) or [api.berkeleypse.org](http://api.berkeleypse.org), respectively. When a developer deploys code, it goes from in _development_ to in _production_.

- **website** (frontend, client): what viewers see and interact with. Our website is http://berkeleypse.org.

- **api** (API, backend, server): what viewers do _not_ see. The website makes requests for data (or gives data) to the API. The API takes the data from the database and gives it to the website for viewers to interact with. Our code for the API is located in a separate GitHub repository, [berkeleypse/api](https://github.com/BerkeleyPSE/api). Our API is http://api.berkeleypse.org.

- **database**: where our data is stored. We use a NoSQL MongoDB database, hosted by mLab. In development, we use the database `pse-website-dev` with fake data to make changes. In production, the database `pse-website` is used. Data changes in the development database do _not_ affect data in the production database. Our databases store data on our Brothers and Careers pages, as well as the submissions for our Registration Form and Prospective Member Applications.

---

## Infrastructure

### Git & GitHub

Our code is stored in GitHub repositories. Git is a version control system used to track different versions of our code. In example, our _production_ code is on the `master` git branch of our repository, while our _development_ code should be developed on their own separate branches. GitHub makes for easy collaboration between developers. [Here's a great guide](https://git-scm.com/book/en/v1/Getting-Started) to understanding and using Git.

### GoDaddy

The website's domain (berkeleypse.org) is hosted by [GoDaddy](https://www.godaddy.com/).

### Heroku

[Heroku] is used to deploy our [API](http://api.berkeleypse.org). More on that in the [API repository](https://github.com/BerkeleyPSE/api).

### Netlify

The [website](http://berkeleypse.org) is deployed on [Netlify](https://www.netlify.com/). Any code pushed to the `master` branch in our website repository (this repository) is reflected in production. Any code pushed to the `staging` branch in this repository is reflected on the website http://staging.berkeleypse.org. As a developer, you should use this site to view the website with the data in the production database.

---

## Getting Started

Several steps are needed before you can actively develop the website.

### Environment Variables

Environment variables are those whose values differ based on whether the website/api are being run in _development_ or in _production_. In development, each developer must have their unique set of environment variables. These allow the developer to interact with the development database and use the Google OAuth 2.0 sign in for the API. You need a `variables.env` file in your local development directory of the API. More on this at the end of the section.

### GitHub

You must be a Collaborator on this repository **and** the [API](https://github.com/BerkeleyPSE/api) repository to contribute and develop.
The Administrator (VP of Marketing) or the Director of Technology must add you as a Collaborator via the BerkeleyPSE GitHub account.

1.  As Administrator, log into the BerkeleyPSE GitHub account.
2.  For the [website](https://github.com/berkeleypse/website) and [API](https://github.com/berkeleypse/api) repositories, perform steps 3 to 5.
3.  Click on the **Settings** tab in the navigation bar.
4.  Click on the **Collaborators** option in the side bar.
5.  Add a Collaborator by their GitHub username.

The new Collaborator must accept access to contribute to this repository via the email connected to their GitHub account -- they will then have "push access".

Developers should contribute to this repository using their personal GitHub account rather than the BerkeleyPSE account. This allows all repository Collaborators to easily track who made which changes, and build out their own GitHub profile as they contribute to the project.

### Cloning Repositories

You may clone and make changes to the repositories without being a Collaborator, but you will not be able to push your changes to these repositories.

You will want to have a directory (folder) on your computer dedicated to PSE code and development.

Open up a terminal window. Navigate into your PSE directory.

Run the following commands:

```bash
git clone https://github.com/BerkeleyPSE/website.git # clone the website repo
git clone https://github.com/BerkeleyPSE/api.git # clone the api repo
```

Respectively, these will create directories name **website** and **api**.

### Node & npm

Node and npm (node package manager) are required to contribute to these repositories.

You can download Node and npm [here](https://nodejs.org/en/download/). I recommend using [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) as an alternative for npm. If you have a Mac, you can easily install it using [Homebrew](https://brew.sh/).

After download, ensure installation. Restart your terminal, open a window, and then run:

```bash
node -v # Confirm node is installed
npm -v # Confirm npm is installed
yarn -v # Confirm yarn is installed (not required)
```

Your node version should be >= 8.9.3.
Your npm version should be >= 5.8.0.
Your yarn version should be >= 1.7.0.

### mLab

In order to transact with the development database, you must be a Database User on the corresponding [mLab](https://mlab.com) MongoDB database.

There are two databases.

1.  `pse-website-dev` -- The _development_ database.
2.  `pse-website` -- The _production_ database.

To grant/gain access to the _development_ database:

1.  As Administrator, log into the mLab account.
2.  Click on the development database deployment, `pse-website-dev`.
3.  Click on the **Users** tab.
4.  Click on **Add database user**.
5.  Enter a `USERNAME` and `PASSWORD` for the new Database User.
6.  Share these credentials with the new Database User.

Further instruction is at the end of the Getting Started section.

### Heroku

_The steps in this section are not necessary if you are **only** developing/making changes to the website and **not** the API._

[Heroku](#https://heroku.com) is used to deploy the API live at [api.berkeleypse.org](http://api.berkeleypse.org).

You must be a Collaborator on the Heroku application to deploy it. An Administrator must add a Collaborator via the BerkeleyPSE Heroku account.

1.  As Administrator, log into the BerkeleyPSE Heroku account.
2.  Click on the **Access** tab.
3.  Click on **Add a Collaborator**.
4.  Add a Collaborator by their email.

Collaborators must use their personal Heroku accounts.

Once you are given access a Collaborator, open a terminal and navigate to where you cloned the API repository, likely in the `PSE/api` directory created earlier in **Cloning Repositories** section. Then, run:

In the `api/` directory, run the command:

```bash
git remote add heroku https://git.heroku.com/berkeleypse.git
```

Ensure this new remote was added:

```bash
git remote
# heroku
# origin
```

You must now download the Heroku command line interface. You can find the instructions to do so [here](https://devcenter.heroku.com/articles/heroku-cli). This will make it simple to deploy to Heroku via your terminal.

Once installed, navigate to the `api/` directory. Then, run:

```bash
heroku login
# Enter your Heroku username
# Enter your Heroku password
```

These must be the credentials given Collaborator access.

### Netlify

_Not all developers should have access to the Netlify account_.

An Administor (Vice President of Marketing or Director of Technology) may log into the Netlify account by signing in via the BerkeleyPSE GitHub account.

### variables.env

Your final `variables.env` file should be located at the root (top-level) of the `api/` directory. It should contain the following key/values. Anything in brackets [] require your action to complete.

- The `USERNAME` and `PASSWORD` are your personal Database User credentials, created in the mLab section above.
- The `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` can be found in the `Accounts Information` Google Sheet located in the Google Drive of the Vice President of Marketing and Director of Technology.
- The `COOKIE_KEY` is a random alphanumeric string you create. It can literally be `sjalfajsdlkfsjadh1223lkj2l3kjwlkfjwlerjty5lk5j2434sdkla31`.

When finished, your `variables.env` file should look as such:

```
NODE_ENV=development
MONGO_URI=mongodb://[USERNAME]:[PASSWORD]@ds113736.mlab.com:13736/pse-website-dev
GOOGLE_CLIENT_ID=[GOOGLE_CLIENT_ID]
GOOGLE_CLIENT_SECRET=[GOOGLE_CLIENT_SECRET]
COOKIE_KEY=[COOKIE_KEY]
NEW_RELIC_NO_CONFIG_FILE=true
```

---

## Contributing

### Trello

[Trello](https://trello.com/) is used to develop the website in an organized manner. The board for this website development can be found [here](https://trello.com/b/cCC0n7Ib). An Administrator must add you to both the PSE Trello team and the board for you to view it.

### Git & GitHub

To develop the website, you must run the website _and_ the API simultaneously.

Open two terminal windows.

In the first, navigate to your `PSE/api` directory and run:

```bash
npm install # install the node_modules necessary
yarn install # alternative to above if using yarn instead of npm

npm run dev # start development on the api/server
yarn run dev # alternative to above if using yarn instead of npm
```

This will start the API at http://localhost:8000. Navigate to this URL in your browser (i.e. Google Chrome).

In the second, navigate to your `PSE/website` directory and run:

```bash
npm install # install the node_modules necessary
yarn install # alternative to above if using yarn instead of npm

npm run start # start development on the website/client
yarn run start # alternative to above if using yarn instead of npm
```

This will start the website at http://localhost:3000. Navigate to this URL in your browser.

You should see data in the Fulltime table on the /careers page and brother headshots on the /brothers page.

There are 2 branches in the [website repo](https://github.com/berkeleypse.website) that should always remain, `master` and `staging`. As mentioned earlier, code in the `master` branch is deployed live to http://berkeleypse.org via Netlify, and code in the `staging` branch is deployed to http://staging.berkeleypse.org.

As you contribute to the website, use Git and GitHub as follows.

If you're making simple one-time updates -- changing Links, opening/closing the application, fixing minor bugs or spelling/grammar errors -- work directly on the `staging` branch. When you are finished, navigate to your `PSE/website` directory in your terminal, and run the following:

```bash
git status # you should be on the staging branch and see a list of new/modified/deleted files
git add -A # add all the changes
git commit -m "[message about the changes you've made]" # commit the changes to the repo
git push origin staging # push your changes to GitHub on the staging branch
```

Then, go to http://staging.berkeleypse.org. Ensure the website is not broken and your changes have been made.

If everything checks out, run the following in your terminal:

```bash
git status # you should be on the staging branch with no file changes
git merge master # merge the master branch into the staging branch

# resolve any merge conflicts, if necessary

git checkout master # switch onto the master branch
git merge staging # merge the staging branch into the master branch
git push origin master # push the changes made on your local repo master branch to the GitHub repo master branch -- this will also update the production site
```

**The `staging` and `master` branches should always mirror each other.**

If you're spending more than a day making improvements (from the [Trello board](https://trello.com/b/cCC0n7Ib)) -- creating a new page, converting the website layout to CSS Grid, or making a loader icon while data is being fetched -- work on a branch separate from `staging`.

To create a new branch:

```bash
git checkout staging # ensure you are on the staging branch
git pull origin staging # ensure your staging branch is up-to-date
git checkout -b NEW_BRANCH # create a new branch stemming from staging
```

Your new branch should be named after the feature you're developing -- i.e. `history-page`, `grid-layout`, `loader`.

Commit your changes to this new branch as necessary. When this feature is finished and looks great in local development on your branch, create a pull request from your development branch into the `staging` branch via the [GitHub repository](https://github.com/berkeleypse/website/pulls) in your browser. Merge your branch into the `staging` branch and close the pull request. Then:

```bash
git checkout staging
git pull origin staging
```

Run the `staging` branch website at http://staging.berkeley.edu, ensuring everything works. Then, use the method above to merge the `staging` branch into the `master` branch. Alternatively, you can submit a pull request from the `staging` branch into the `master` branch, and merge it.

---

## Contributors

**Rahul Rangnekar**

- B.A. Computer Science & B.A. Economics, UC Berkeley 2018
- Vice President of Marketing, PSE Zeta Chi, 2016-2017
- [GitHub](https://github.com/rahrang)
- [LinkedIn](https://linkedin.com/in/rahrang)
- [Website](http://rahulrangnekar.com)
