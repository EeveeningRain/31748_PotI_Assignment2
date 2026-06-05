# Expense Tracker App Prototype v2
# For 31748 Programming On The Internet Assessment 2 Autumn 2026 UTS
This prototype webpage permits a user to log in (use admin@example.com / admin) and modify and expense list, and view stats as well, just like in assignment 1. This version has some new functionality, primarily cleaning up issues with assignment 1 but also with the addition of the rudimentary login/logout system and a fully functional search bar. This group assessment has been completed individually by me. The aim of this assignment was to add multi-user functionality, an admin account, authentication, and a search feature.

# Technical stack:
Frontend: HTML+CSS / React
API: FastAPI
Backend: MySQL in python
Database: SQL relational database

*please note that the database was created by using the 'mysql' utility from the command line. everything else is done in code*


# Major features:
---Filter expenses with a real-time search bar---
Weighted fuzzy-search search bar to filter expenses by title, category, or description (in that order). This dynamically updates a list which is stored as a form of drop-down menu that can be hidden with a button. This has been accomplished with react/jsx and the Fuse.js library (which handles the searching itself).

---Style improvements and mobile-friendly interface---
Website now has a consistent and unique style. Using a gradient emerald green as background with complimentary gold and navy colours for other elements. Header now has a plaque image behind it for some style. The interface now can dynamically change with different screen sizes while staying stylistically and functionally the same. A new mobile-friendly version of the interface now loads on sufficiently thin screens, using the @media flag in the .css file.

---Input error handling and contextual alerts---
Numerics outputs now refuse non-numeric input and will appropriately alert the user. Several contextual alerts have been added to give the user more information during failure states.


---Basic login/logout functionality---
Webpage now loads in to a login screen by default which prompts the user to enter a username and password. "Users" are currently stored as a string in the python code - insecure and inflexible. Meant to be a demonstration of future development. Once a user has successfully logged in, the page loads the expense tracker app, updating the title to the user's username. A logout button is present that clears the stored username/password and returns the user back to the login screen. Being logged in persists between reloading the page.


# Folder structure:
Folders structures in two main categories, backend (python / mysql) and frontend (html+css / react)

- 31748_PotI_Assignment2
    - backend/
        - to_do_app_crud.py
        - to_do_app.py
        - .venv
    - frontend/
        - .vite
        - node_modules
        - src/
            - ExpenseTrackerApp.css
            - ExpenseTrackerApp.jsx
            - Login.css
            - Login.jsx
            - main.jsx
        - index.html
        - package-lock.json
        - package.json
    - README.md

# Challenges:
Continued inability to attend labs, and being unable to find a group partner, posed significantly challenges in this assignment. I was proud of being able to build a search bar, but it took far longer than I had, and as such the other planned features are either missing or not where I would want them to be. The labs have also moved towards MongoDB whereas my website is built with MySQL, which made it harder to understand how to adapt the available learning material to my own work.