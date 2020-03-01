# League of Loadouts

## What is League of Loadouts? 
League of Loadouts is a League of Legends companion web app that allows players to plan out a loadout for their champion of choice  a head of games.

A user can create a loadout for any champion of their choosing, and add and delete items to that loadout.

### Motivation

As an avid gamer/MOBA player I wanted to create an app that would help players like myself plan out their matchs and create based on their playstyle accordingly.

### Front-end

League of Loadouts is built using React as its front end frame work and using Redux to contain majority of it's state.

Images are stored on the front end but were originally sourced through [Riot Games: League of Legends API](https://developer.riotgames.com/) . 


### Back-end

League of Loadouts API is built with Ruby on Rails.  For authentication, authorization and security it uses Bcrypt and JWT, and PostgresSql for its database.

To see more information about the api please see below:

[League of Loadouts Api](https://github.com/kmarks2013/league-of-loadouts-api)


### Demo

[League of Loadouts Demo](https://youtu.be/FIUhRvYNhzo)

### Installation

    Clone the repo and CD inside of the directory
    npm install
    npm start

Be sure to visit the repo for the [backend](https://github.com/kmarks2013/league-of-loadouts-api) and follow those instructions!

### Technologies Used

1. React
2. React-Redux
3. React-Router
4. Redux-Thunk
5. CSS

### Future Updates

1. User Profiles
2. Copy feature for other users loadouts
3. Loadout descriptiosn and playstyle instructions.
4. Champion Abilities
5. Items impact on player stats.

### Special Thanks

I would like to thank Riot Games for allwoing me access to their api to create this app. Without them this applicaiton would not exist. 