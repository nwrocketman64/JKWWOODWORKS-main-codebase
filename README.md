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
* Express
* Express Session
* Express Validator
* Bcypt
* Mongoose
* Multer
* Nodemailer
* Nunjucks
* Sharp

# Useful Websites
These were a few website that I found to be very helpful in building this website
* [Upload and Retrieve Image on MongoDB using Mongoose](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)
* [ExpressJS Tutorial](https://www.tutorialspoint.com/expressjs/index.htm)

# Website Link
This is the link to active website