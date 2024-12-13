# Web-Dev
code for the web development class

# Activity Log

## 2024-09-06 Friday - Setup GitHub
* Created/refreshed accounts
* Created WebDev repo

## 2024-09-07 Saturday - GitHub Collaboration
* Practice collaborating on files in GitHub
* Merged pull request

## 2024-09-08 Sunday - Added readme to filemaker
* Added a README.md file to the filemaker project

## 2024-09-15 Sunday - Added web_scaper_v1 and v2
* Created conda env
* Testing from cmd line
* Created web_scraper v1 and 2 from the web scraping tutorial

## 2024-09-22 Sunday - Discuss project ideas
* Review semester project ideas
  * Something for Magic the Gathering
  * Bulk card data download available from scryfall.com
  * Deck builder and search available from archidekt.com
  * Scryfall also provides an API to query from your own website
* Started project plan document with problem statement and user motivation

## 2024-09-29 Sunday - Mature Awsome Final Project
* Discussed v1 demo
* Decomposed into features
* Selected two features for sprint number 1
* Named project "surveil descend" as omage to skryfall
* Created initial files: main html file and changelog file

## 2024-10-05 Saturday - Work on features
* Research how to display a dynamic grid of cards
* Display a dynamic grid of cards

## 2024-10-13 Sunday - Start Sprint 2
* Discuss features for Sprint 2
* Identify features for Sprint 2 and sequence them
* Added feature to v2 as future challenge
* Downloaded small set of card images to support Sprint 2 features
* Using oracle_id to uniquely identify cards
* scryfall_uri combines set and collector_number in a URL
* The oracle_id is unique to scryfall
* Magic site uses set and collector_number (and card name)
* Added feature to backlog - a utility that scans each list of cards ensuring the corresponding image is in the cimg directory and downloading if not
* Using size normal (98k) instead of size large (149k) for images
* The card "Plains" has one oracle_id but 74 printings - handle in future version
* Use the Oracle Cards download for now, e.g., https://data.scryfall.io/oracle-cards/oracle-cards-20241013090207.json

## 2024-10-19 Saturday - Create Personas
* Calum has Persona homework. He is to create at least 2 personas for the users of his ScryFall enriched site-- including at least 1 type of user who is not so computer savvy. 

## 2024-10-26 Saturday
* Create checkbox for filtering cards (still need to connect to something)
* Draw layout for website (2 page views)

## 2024-11-03 Sunday
* Still no feedback on the website layouts
* Work on checkboxes
  * Filter on last character in GUID

## 2024-11-09 Saturday
* Figuring out Git
* Figuring out how to download images from scryfall website without getting rate limited or banned
* Started working on a script to download all images to hard drive

## 2024-11-30 Saturday
* Did not log prior November sessions
* Completed a utility to download card images
* Most card images are downloaded, but some may be missing
* Utility is in the_downloader folder
* Today, created short script in the_cardfinder
* Script uses scryfall search API
* Parse results and get first 10 card GUIDs
* Integrate into main code to display cards
* Change checkbox search functionality

## 2024-12-13 Friday
* Scryfall search is hard coded - first n white cards with mana=1
* Added search button
* Determined images for double sided cards had not been downloaded
* Revisited downloader, modified to download card images instead of art crop images
* Need to finish debugging downloader and then run
