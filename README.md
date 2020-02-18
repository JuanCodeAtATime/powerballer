# Project 3 - Powerball-Pro
# Harvard Extension School
# Authors: 
# Juan Rivera Role: Developer
# Lisa Michael Role: Developer 

Powerball Pool Application 

Application functionality: 
Create an application that will use an API to display drawn Powerball numbers for a group of 17 people who participate in a lottery pool.
The application should calculate if the numbers drawn have won and how much the winnings are. 
The winnings should be stored in a database. 


One Powerball Season is equal to 13 weeks or 26 draws. 

A summary of drawn numbers and winnings should be displayed in a table when the season ends. 
It would be nice to have a table that displays current winnings during an existing season.
Mobile application : notfications sent out if winnings exceed XXX amount.  The end user can set the parameters.

We have 17 different sets of numbers 
- Numbers are Season Tickets, which are static numbers that are always the same. 
-  Normally 17 different numbers.  - Occasionally a user or two will drop, and we pick up new members. 

We would like to use a Mongo database. The db will store.  
- member names 
winning numbers 
winnings per season
- photo images of active season tickets
- photo of checks (winnings) 
- member payment status - boolean 
- store previous seasons' history 



Other items we can display on: 
Misc / Fun Facts page 
- small applet or game ie) one arm bandit , poker 
-current events  
- any big wins, interesting lottery wins or facts.

- display realtime jackpot amount 
- Random number generator , which will generate a random lottery number, 
A  field that will search  the database of history of lottery winning numbers and display number history. 
