# PIZZA PARTY

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Pizza Party** is a full stack application where users can login in and submit their Chicago restaurant that's viable for having the best pizza in Chicago. Users can login and state what side of Chicago they are from as well as their associated neighborhood.The entry will provide details about the restaurant's location, neighborhood and track likes.
Inspired by Do312(https://do312.com/) and every Chicagoan having a different opinion on pizza!


<br>

## MVP


### Goals

- User will have the ability to login, register, and create a profile
- User can submit an entry.
- Other users see an index of all available restaurants (sort and filter).
- Pizza Details page that can show more details about the pizza (only the user who posted the user can delete).

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Create front end user experience. |
|   React Router   | Provide links and routers to organize app elements. |
|  React-Responsive-Carousel   | Create image carousel used on landing page. |
|   Rails  | Create backend database. |

<br>

### Client (Front End)

#### Wireframes

[Desktop & Mobile Wireframes](https://lucid.app/lucidchart/e4f115e8-449f-4948-83c5-8d9523d269ff/edit?page=0_0#)


#### Component Tree

![Component Tree](https://i.imgur.com/MuQSAcv.png)

#### Component Architecture
``` structure

src
|__ components
    |__ Carousel
        |__ ImageCarousel
            |__ ImageCarousel.jsx
            |__ ImageCarousel.css
    |__ Shared
        |__ Layout
           |__ Layout.jsx
        |__Nav
           |__ Nav.jsx
           |__ Nav.css
|__ containers
    |__ PizzaContainer
        |__ PizzaContainer.jsx
|__ screens
    |__ PizzaCreate
        |__ PizzaCreate.jsx
        |__ PizzaCreate.css
    |__ PizzaEdit
        |__ PizzaEdit.jsx
        |__ PizzaEdit.css
    |__ PizzaDetail
        |__ PizzaDetail.jsx
        |__ PizaDetail.css
    |__ Pizzas
        |__ Pizzas.jsx
        |__ Pizzas.css
|__ services/
      |__api-Config
      |__auth.js
      |__pizzas.js
      |__neighborhoods.js

```


#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic App Structure (Links and Routers)    |    H     |     4 hrs      |   4 hrs     |    4 hrs    |
| Creating React Screens and Components | H | 4 hrs | 4 hrs | 4 hrs |
| Basic CSS Layout |    H     |     4 hrs      |  5 hrs    |     5 hrs     |
| Create Backend CRUD Actions |    H     |     4 hrs      |   5 hrs      |     5 hrs     |
| Create Auth and User Implementation |    H     |     4 hrs      |   3 hrs       |     3 hrs     |
| Create Frontend CRUD Actions |    H     |     4 hrs      |  3 hrs       |     3 hrs     |
| Create Seed Data | H | 2 hrs | 3 hrs | 3 hrs |
| Advanced CSS / Responsiveness |    H     |     8 hrs      |    7 hrs     |     7 hrs    |
| Deploying Frontend to Netlify | H | 2 hrs | 1 hr | 1 hr |
| Deploying Backend to Heroku | H | 2 hrs | 1 hr | 1 hr |
| Testing, Debugging, and Troubleshooting | M | 5 hrs | 6 hrs | 6 hrs|   
| TOTAL               |          |     43 hrs      |  36 hrs   |    36 hrs     |

<br>

### Server (Back End)

#### ERD Model


![ERD Model](https://i.imgur.com/tKX1p76.png)
<br>

***

## Post-MVP

Create dark mode.
Expand app for users to create events.
Data tracking to provide insights on neighborhood - pizza likes correlation.
Geolocation to show restaurant's location

***

## Code Showcase


## Code Issues & Resolutions
