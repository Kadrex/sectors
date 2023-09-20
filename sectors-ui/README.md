# SectorsUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Task

General:
-Create a simple web application. Use the provided index.html as base.
-Create separate frontend and backend.
-Store the sectors for selectbox to database.
-User must be able to select multiple sectors and save the selection and other fields data to database.
-After refresh the data and selection must be restored.
-Add additional simple administrative view where user can edit (add/remove/update) sectors.
-Make it runnable in docker.

Tasks:
1.	Create a responsive single page application using Angular or React
    a.	Use index.html as the basis
    b.	NB! Index.html has deficiencies
    c.	Make it look as good as you can visually in a reasonable time
2.	"Sectors" selectbox:
    a.	Add all the entries from the "Sectors" selectbox to database
    b.	Compose the "Sectors" selectbox using data from database
3.	Perform the following activities after the "Save" button has been pressed:
    a.	Validate all input data (all fields are mandatory)
    b.	Store all input data to database (Name, Sectors, Agree to terms)
    c.	Refill the form using stored data
    d.	Allow the user to edit his/her own data
4.	Create a separate view to edit "Sectors" contents
    a.	Link the two views together
    b.	Both views need to be responsive
5.  Create docker script(s) to run the solution with single Compose

Write us Your best code!
1.	After completing the tasks, please provide us with:
1. Full database dump (structure and data - this can be a script used by docker image creation, no need to send separate SQL files)
2. Source code with docker scripts.

