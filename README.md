
# Lap 2 Challenge: Telegraph clone 
  

## Installation & Usage
### Installation

* Clone or download the repo.

* Open terminal and cd to `Lap2-Challenge` folder.

* Run Docker-Compose up to start all services
  

### Usage

* Run `**bash _scripts/teardown.sh** to stop all services, remove volumes and containers


## Bugs
* Unique posts are displayed based on the hash change event, so when the same route with a given hash is searched back to back, the post information is removed and the form reappears.
  

## Wins & Challenges

  

### Wins

* We have the posts saving to the database with each post 

* We managed to get the show route working to display every post


### Challenges

* Struggled to understand how to redirect to the show path until we learned about window.location.hash 
