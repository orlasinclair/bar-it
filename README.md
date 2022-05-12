# bar-it

An App....
## Installation & Usage
# Installation

    Clone or download the repo using git clone --recurse-submodules <repo> (this clones the client and server submodules too)

# Usage

    Navigate to the root directory of this repository
     - Client side:
        cd into client
        run npm install
        run npm run dev
        Webpage should start up automatically on localhost:8081/
     - Server side:
        cd into server
        run pipenv shell
        run pipenv install
        run pipenv run dev
        Django API will be running on localhost:5000/
     
## Technologies

    Client side: React, CSS, Quagga, Axios, Semantic UI, Javascript, Html

        Dependencies: refer to the package.json file within the client folder for the full list of dependencies
    Server side: Python, Gunicorn
        Dependencies: django, django-cors, pytest

## Process

    Choose the idea for our app
    Design the basic idea of our user interface using Figma
    Use the GitHub project board to split up the required tasks and assign to team members
    Set up the file structure using git submodules, initialised database
    Create the relevant pages and components for React front end
    Implement logic on the backend to retreive and send back relevant information to the front end
    Test with pytest and react testing library
    Debugging and fine tuning our app
    Deploy server on Heroku and client on Netlify

## Wins & Challenges
# Wins

    Good git flow and communication between team members to avoid conflicts,
    Use Quagga,
    Style React with new libraries.


# Challenges

    Coming up with ideas for our app which would be feasible in the given timeframe,
    Difficulties with sending and retrieving information with a Python backend and React frontend,
    Deploying the app,
    Cors errors,
    Quagga,
    Styling with material UI,
    Couldn’t create own user fields using the django-rest framework,
    Implement Google app
    

## Bugs

    

## Future Features
   Display shops on maps
   See previous search
   Return more details about product

## Licence
