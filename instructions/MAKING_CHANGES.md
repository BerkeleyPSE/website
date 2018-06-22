# Making Changes

## Table of Contents

* [Git & GitHub](#git-&-github)
* [Immediate Changes](#immediate-changes)
* [Changes within a Semester](#changes-within-a-semester)
* [Changes between Semesters](#changes-between-semesters)
* [Future Changes](#future-changes)

## Git & GitHub

As you contribute to this website, use Git and GitHub as follows.

If you're making simple one-time updates -- changing Links, opening/closing the application, fixing minor bugs, etc. -- work directly on the `master` branch.

If you're spending more than a day or two [designing new features](https://trello.com/b/cCC0n7Ib) -- adding brother profiles for the new class, improving the home landing page, converting to CSS Grid, etc. -- work on a branch separate from master.

To create a new branch:

```bash
git checkout master # ensure you're on the master branch

git pull origin master # ensure your master is up-to-date

git checkout -b new-branch # create a new branch separate from master
```

Your new branch should be named after the feature you're designing -- e.g. `mu-profiles`, `home-redesign`, `css-grid`.

To commit and push to the repository:

```bash
git status # ensure you're on the correct branch and changes have been made

git add -A # add all changed files to the commit -- you may want to add files individually

git commit -m "made changes" # commit your changes with a message describing the changes since the most recent commit

git push origin BRANCH # push your changes to your branch (e.g. `master`, `new-branch`)
```

## Immediate Changes

Check out the [Trello Board](https://trello.com/b/cCC0n7Ib) for features that always need improvement.

* Add the newly-crossed class members' headshots & biographies
* Update existing brother profiles, if necessary
* Convert `About Us` page into `History` page. `About Us` page will become more about brotherhood statistics & what we do throughout a semester (projects, PMT, etc.)
* Convert `Why PSE?` page into testimonials page -- get more brothers to write testimonials
* Add more information about PMT on the `Recruitment` information page
* Use native CSS transitions & remove `react-animations`

## Changes within a Semester

* When the Facebook recruitment application goes live, update the `FB_EVENT_LINK` in the `AppBanner` component
* Modify the recruitment application `ApplicationForm` in the `berkeleypse-schemas` module as per the discretion of Recruitment directions, Prospective Member Trainers, and the Executive Board
* Open & close the recruitment application as necessary, in the `Application` component
* When the recruitment application is closed, be sure to update the `PreregistrationForm` component and mLab MongoDB database with the next semester's information

## Changes between Semesters

* Update the [Recruitment](https://github.com/BerkeleyPSE/BerkeleyPSE.github.io/blob/5923f9a479e63f94b6e41fe3b523f4928b0788f3/client/src/components/Recruitment/Recruitment.jsx) timeline
* Update the [Brotherhood](https://github.com/BerkeleyPSE/BerkeleyPSE.github.io/blob/5923f9a479e63f94b6e41fe3b523f4928b0788f3/client/src/components/Brothers/Brotherhood.jsx) page with the newly-crossed class members
* Update the [Executives](https://github.com/BerkeleyPSE/BerkeleyPSE.github.io/blob/5923f9a479e63f94b6e41fe3b523f4928b0788f3/client/src/components/Brothers/Executives.jsx) page with the new members (if necessary)

## Future Changes

* An "Experiences" table should be added to each brother's profile in the `Brother` component
* An "Internships" table should be added to the `Careers` page
* The landing page should utilize [fullpage.js](https://github.com/alvarotrigo/fullPage.js) for the slides rather than `react slick` if the design is to remain
