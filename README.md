# Assignment 2 - Vue app - Automated development process.

Name: Jiyuan Mao

Student No.: 20082259

## Overview.

This is an online library web application.Its audience can be divided into users and admin.
Visitor can see the details of book but if you want to comment on books, you need to register
or login. Also, admin can add,modify and delete books.

## E2E Testing.

. . . A listing of the output generated locally from running ONE of your spec test files (choose the best one). The command to produce this is similar to the following:

     C:\Users\123\Desktop\LocalGit\onlineLibraryView>npm run cypress -spec cypress/in
     tegration/admin_page.spec.js

     > libraryview@1.0.0 cypress C:\Users\123\Desktop\LocalGit\onlineLibraryView
     > cypress run "cypress/integration/admin_page.spec.js"


     ================================================================================


       (Run Starting)


     ────────────────────────────────────────
     ────────────────────────────────────────



       Running: admin_page.spec.js...                                       (1 of 3)



       The Admin Page Test
         √ Go Admin Page without login (1635ms)
         √ Redirect to home (70ms)
         √ Do Admin Login (1326ms)
         √ Go Admin Page (8333ms)
         √ Test Add Books (8275ms)
         √ Check add results (98ms)
         √ Test filter function (4780ms)
         √ Click to  modify results (3266ms)
         √ Check modify results (79ms)
         √ Delete results (1496ms)


       10 passing (30s)


       (Results)

       ┌──────────────────────────────────┐
       │ Tests:        10                 │
       │ Passing:      10                 │
       │ Failing:      0                  │
       │ Pending:      0                  │
       │ Skipped:      0                  │
       │ Screenshots:  0                  │
       │ Video:        true               │
       │ Duration:     29 seconds         │
       │ Spec Ran:     admin_page.spec.js │
       └──────────────────────────────────┘


## Continuous Integration.

. . . URL of the Travis build page for the Vue app, e.g.

https://travis-ci.org/JiyuanMao/OnlineLibraryVue

## Automated Deployment.

.... Specify the URL of the auto-deployed Vue app, e.g.

http://onlinelibrary.surge.sh/

## Extra features.

. . . . Briefly state any extra aspects of your automation process that you feel should be high-lighted . . . . .

authentication

## Appendix.

. . . .  A listing of the output generated from running locally all of your spec test files. The command to produce this is:

     C:\Users\123\Desktop\LocalGit\onlineLibraryView>npm run cypress

     > libraryview@1.0.0 cypress C:\Users\123\Desktop\LocalGit\onlineLibraryView
     > cypress run


     Warning: We failed to remove old browser profiles from previous runs.

     This error will not alter the exit code.

     [object Object]

     ================================================================================


       (Run Starting)

       ┌──────────────────────────────────────
     ──────────────────────────────────────┐
       │ Cypress:  3.1.3
     │
       │ Browser:  Electron 59 (headless)
     │
       │ Specs:    3 found (admin_page.spec.js, home_page.spec.js, login_page.spec…
      │
       └──────────────────────────────────────
     ──────────────────────────────────────┘


     ────────────────────────────────────────
     ────────────────────────────────────────



       Running: admin_page.spec.js...                                       (1 of 3)



       The Admin Page Test
         √ Go Admin Page without login (1635ms)
         √ Redirect to home (70ms)
         √ Do Admin Login (1326ms)
         √ Go Admin Page (8333ms)
         √ Test Add Books (8275ms)
         √ Check add results (98ms)
         √ Test filter function (4780ms)
         √ Click to  modify results (3266ms)
         √ Check modify results (79ms)
         √ Delete results (1496ms)


       10 passing (30s)


       (Results)

       ┌──────────────────────────────────┐
       │ Tests:        10                 │
       │ Passing:      10                 │
       │ Failing:      0                  │
       │ Pending:      0                  │
       │ Skipped:      0                  │
       │ Screenshots:  0                  │
       │ Video:        true               │
       │ Duration:     29 seconds         │
       │ Spec Ran:     admin_page.spec.js │
       └──────────────────────────────────┘


       (Video)

       - Started processing:   Compressing to 32 CRF
       - Finished processing:  C:\Users\123\Desktop\LocalGit\onlineLibraryView\cypres
     s\videos\admin_page.spec.js.mp4 (1 second)


     ────────────────────────────────────────
     ────────────────────────────────────────



       Running: home_page.spec.js...                                        (2 of 3)



       The Home Page Test
         √ successfully loads (3486ms)
         √ home page h1 text (176ms)
         √ nav online library link (45ms)
         √ start btn (85ms)
         √ click btn (197ms)
         √ check go to books (90ms)


       6 passing (4s)


       (Results)

       ┌─────────────────────────────────┐
       │ Tests:        6                 │
       │ Passing:      6                 │
       │ Failing:      0                 │
       │ Pending:      0                 │
       │ Skipped:      0                 │
       │ Screenshots:  0                 │
       │ Video:        true              │
       │ Duration:     4 seconds         │
       │ Spec Ran:     home_page.spec.js │
       └─────────────────────────────────┘


       (Video)

       - Started processing:   Compressing to 32 CRF
       - Finished processing:  C:\Users\123\Desktop\LocalGit\onlineLibraryView\cypres
     s\videos\home_page.spec.js.mp4 (0 seconds)


     ────────────────────────────────────────
     ────────────────────────────────────────



       Running: login_page.spec.js...                                       (3 of 3)



       The Login and Register Page Test
         √ successfully loads (2671ms)
         √ login page card (131ms)
         √ check login button (71ms)
         √ click to register (111ms)
         √ check login and register visible (57ms)
         √ back to login (100ms)
         √ input the username and password (2063ms)
         √ check is login success (152ms)


       8 passing (6s)


       (Results)

       ┌──────────────────────────────────┐
       │ Tests:        8                  │
       │ Passing:      8                  │
       │ Failing:      0                  │
       │ Pending:      0                  │
       │ Skipped:      0                  │
       │ Screenshots:  0                  │
       │ Video:        true               │
       │ Duration:     6 seconds          │
       │ Spec Ran:     login_page.spec.js │
       └──────────────────────────────────┘


       (Video)

       - Started processing:   Compressing to 32 CRF
       - Finished processing:  C:\Users\123\Desktop\LocalGit\onlineLibraryView\cypres
     s\videos\login_page.spec.js.mp4 (0 seconds)


     ================================================================================


       (Run Finished)


           Spec                                    Tests  Pass…  Fail…  Pend…  Ski
     p…
       ┌──────────────────────────────────────
     ──────────────────────────────────────┐
       │ √ admin_page.spec.js              00:29     10     10      -      -      -
      │
       ├──────────────────────────────────────
     ──────────────────────────────────────┤
       │ √ home_page.spec.js               00:04      6      6      -      -      -
      │
       ├──────────────────────────────────────
     ──────────────────────────────────────┤
       │ √ login_page.spec.js              00:06      8      8      -      -      -
      │
       └──────────────────────────────────────
     ──────────────────────────────────────┘
         All specs passed!                 00:40     24     24      -      -      -

