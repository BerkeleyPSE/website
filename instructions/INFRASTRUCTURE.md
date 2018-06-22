# Infrastructure

## Table of Contents

* [React](#react)
  * [Redux](#redux)
* [Node](#node)
* [MongoDB](#mongodb)
  * [Dashboard](#dashboard)
  * [berkeleypse-schemas](#berkeleypse-schemas)
  * [Zapier](#zapier)
* [Cloudinary](#cloudinary)
* [Heroku](#heroku)
* [GoDaddy](#godaddy)
* [Git & GitHub](#git-&-github)
* [Trello](#trello)

## React

React -- [a JavaScript library](https://reactjs.org/) -- is used as front-end of this website. It combines regular HTML to structure components and JavaScript for logic to render the components. The website's creator (Rahul Rangnekar) chose React for quite a few reasons:

1.  He learned React during a summer internship and decided that migrating code from separated HTML, CSS, and JavaScript to the React blend would make the website easier to develop for himself and future contributors.
2.  React is easier to scale with a library than with regular HTML, CSS, and JavaScript individually. Components are reusable, making for far less repetitive code.
3.  React is widely used in industry -- developing this website gives brothers experience with React.
4.  React is maintained by Facebook, and it has a wonderful developer community.

### Redux

[Redux](https://redux.js.org/) is a "predictable state container". It is used to transact with the `pse-website` database to store applications submitted via the website, and to hold static data used throughout the website.

## Node

Our simple back-end server is built on [Node](https://nodejs.org/en/) via [Express](https://expressjs.com/).

## MongoDB

We use a [MongoDB](https://www.mongodb.com/) database hosted by [mLab](https://mlab.com) to store dynamic (application) and static data.

### Dashboard

The website's static data -- specifically concerning careers & brother information -- is stored in the `pse-website-static` MongoDB database. To add, update, or delete static information from the website, an Administrator (the VP of Marketing or the Director of Technology) must interface with our [content management dashboard](http://berkeleypse-dashboard.herokuapp.com). More information about how to do so can be found in [its repository](https://github.com/berkeleypse/dashboard).

### berkeleypse-schemas

As the two MongoDB databases `pse-website` and `pse-website-static` are common to both this website and the content management dashboard, the corresponding [data schemas](http://mongoosejs.com/docs/guide.html) are declared in a separate node module [`berkeleypse-schemas`](https://www.npmjs.com/package/berkeleypse-schemas) hosted via [npm](https://www.npmjs.com). This ensures the schemas between the website and dashboard are constant, preventing errors in mismatching and extra work in copy/pasting the same schemas in both applications separately. For information on the actual schema declarations, visit the [`berkeleypse-schemas` repository](https://github.com/berkeleypse/schemas).

### Zapier

[Zapier](https://zapier.com/) is used as a connection between the `pse-website` MongoDB database and Google Sheets. It allows for simple viewing and sharing of application responses between PSE brothers,directors, and executives.

## Cloudinary

[Cloudinary](https://cloudinary.com) is used to store images on the website. As of now, only brothers' headshots are stored on the site. Eventually our Cloudinary account should store all website images to prevent a visitor's computer from loading extra data in their browser.

## Heroku

[Heroku](https://heroku.com) is used to deploy our website to [berkeleypse.org](http://berkeleypse.org). It's free, easy-to-use via its command line interface, and supports dynamic websites. The final reason is why we migrated from GitHub Pages to Heroku -- we needed a server to receive application responses. Heroku was the best choice.

## GoDaddy

The website domain is hosted by [GoDaddy](https://www.godaddy.com/).

## Git & GitHub

Git is a version control system. It tracks different versions of our code, synchronizes them across machines, and makes for easy collaboration with others.
[Here's a great guide](https://git-scm.com/book/en/v1/Getting-Started) to Git. GitHub hosts Git as a service.

## Trello

[Trello](https://trello.com/) is used to develop the website in an organized manner. The board for this website development can be found [here](https://trello.com/b/cCC0n7Ib). An Administrator must add you to the board for you to view it.
