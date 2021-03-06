# Overview
This is the main codebase for the JKW Woodworks website. The code here is made open-source
under MIT license and you are free to look at the code to either add any suggestments to
improve the code or to copy it and use it as the base template for your website. The purpose
of this website is to sell woodworks created by the client for this website. It include a
basic admin page for the client to manage the products listed in the website and basic
navigation for any users to lookup products produced by the client. The users can also
message the client through the contact form page. This website includes features such 
cookie session and image uploads. The website is designed to run through
[Heroku](https://www.heroku.com/).
This website is designed to run on Nodejs version 16.13.1.

# Installing
To install the website for running on your computer, you can clone the codebase either by
using the GitHub website or through git. Once it is on your computer, to get the website
running you must create an .env.process which contains the enviroment variable for
MONOGDB_URL, SESSION_SECRET, GMAIL_USER, and GMAIL_PASS. Once that file, you can install all 
the needed libraries using the npm package manager.
```
npm install
```
Once it is done installing, you can startup the website on your machine using this command.
```
npm start
```

# Development Environment
I used [VS code](https://code.visualstudio.com/) as the main IDE for creating the source 
code. I used a version of node.js which was provided by
[nodesource.com](https://nodesource.com/) for the
[Raspberry Pi Computer](https://www.raspberrypi.org/). I used
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as the database.

# Libraries Used
Some of the key libraries that I used for this website include

* [Express](https://expressjs.com/) - The main web framework.
* [Express Session](http://expressjs.com/en/resources/middleware/session.html) - Used to make logging in possible.
* [Express Validator](https://express-validator.github.io/docs/) - Used to validate and sanitize user inputs.
* [Csurf](http://expressjs.com/en/resources/middleware/csurf.html) - Provide CSRF protection to the website.
* [Bcypt](https://www.npmjs.com/package/bcrypt) - Used to encrypt passwords and compare hashes.
* [Mongoose](https://mongoosejs.com/) - The library used to control the MongoDB.
* [Multer](https://www.npmjs.com/package/multer) - Used to process images submitted to the webite.
* [Nodemailer](https://nodemailer.com/about/) - Used in the contact form to send an email to myself.
* [Nunjucks](https://mozilla.github.io/nunjucks/) - The main templating engine used in the project.
* [Nunjucks Date](https://www.npmjs.com/package/nunjucks-date) - Provides a date filter for the templating engine.
* [Sharp](https://sharp.pixelplumbing.com/) - The library used to process the images when received.
* [Nodemon](https://nodemon.io/) - Used in developing the web app as it restarts the app every time you make a change.
* [Normalize.css](https://necolas.github.io/normalize.css/) - The CSS normalizer that I chose to use for the webiste.

# Useful Websites
These were a few website that I found to be very helpful in building this website

* [NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)](https://www.udemy.com/course/nodejs-the-complete-guide/)
* [Upload and Retrieve Image on MongoDB using Mongoose](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)
* [Create Pagination with Node.js, MongoDB, Express and EJS Step by Step from Scratch](https://evdokimovm.github.io/javascript/nodejs/mongodb/pagination/expressjs/ejs/bootstrap/2017/08/20/create-pagination-with-nodejs-mongodb-express-and-ejs-step-by-step-from-scratch.html)
* [Mongoose Count](https://kb.objectrocket.com/mongo-db/mongoose-count-726)
* [How To Process Images in Node.js With Sharp](https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp)
* [Templating](https://mozilla.github.io/nunjucks/templating.html)
* [Node.js Send an Email](https://www.w3schools.com/nodejs/nodejs_email.asp)
* [ExpressJS Tutorial](https://www.tutorialspoint.com/expressjs/index.htm)

# Website Link
This is the link to active website deployed.

[JKW Wood Works](https://www.jkwwoodworks.com/)