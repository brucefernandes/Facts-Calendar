# Fun Fact Calender with React & Tyepscript

A small & fun project developed for Kinaxis's Coding Challenge. It allows users to select days on a calendar and receive fun facts about dates.
Users can save their fun facts into a table showing the fact along with the corresponding date

## Web App Link

You can find the application here : https://brucefernandes.github.io/Facts-Calendar/

## CORS issue with numbersAPI

The application uses the http://numbersapi.com/#42 to get facts about dates. Since the API does not support CORS policies (it uses http) I had to find a proxy
that allowed me to use it. I decided to use https://cors-anywhere.herokuapp.com/corsdemo. I added this proxy just before my GET request url. To enable this to work, visit the link https://cors-anywhere.herokuapp.com/corsdemo and click the "Request temporary access to the demo server", which should then allow you to visit the web link for my app and receive data. 

The local version of the app does not require this.

### Stack 

The requirements mentioned using React and Typescript to develop the project. Along with this, I used Material-UI to help style components and Github webpages to host the application

### Installation

 - Clone the repo
 - Run 'npm install' within the facts-calendar directory
 - Run 'npm start'
 - Open a web browser
 - visit 'http://localhost:3000/' to view and play with application


