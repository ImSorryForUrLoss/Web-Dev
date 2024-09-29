# Reqs:

* Must include design plans
* Must have a clear purpose and clear "customer"
* Must be written in a combination of HTML, JS, and CSS
* Must include documentation, comments, and good programming best practices
* Awesome Final Project

# Customer:

Users visit this website when trying to get a better, easier to work with way to search for Magic: the Gathering cards.

Currently, users have no way of searching through results of Scryfall searches. They also must input a large amount of parameters when trying to perform simple tasks like excluding cards result in illegal cards.

Upon visiting this website, the user must do the following:

* Enter a search using Scryfall syntax with additional custom search params
* Check/Uncheck boxes to include/exclude certain cards
* Thin down search results further by searching the results
* Sort the resulting list of cards with the sort options

# Min Viable Product:

v1: the user will be presented with checkboxes that can be used to filter down a list of cards

v2: the user will be able to sort results

v3: the user will be able to enter a scryfall search to fetch results

# v1 Demo

1. Open Firefox Dev Edition
1. Open HTML file
1. Load cardlist
1. Fetch card image_uris:normal
1. Display cardlist as grid of MTG cards
1. Display checkboxes
1. User checks boxes
1. Box checks changes cardlist
1. User adds cards to "cart"
1. User save/copies list of cards in cart

# Sprint 1

1. Feature 1: Blank page
1. Feature 2: Grid of cards with one card on row two