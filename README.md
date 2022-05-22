# FoodInesta React App for Restaurant Table Booking & Cancellation For Dinner Only.

## Responsive React Application with API Integrated Dummy Json Server & Unit Tested Using JEST

## Problem Statement :

### - The restaurant has 10 dining tables with 5 of them having seating capacity for 4 people each, and the remaining 5 tables will have a seating capacity of 2 people each. Based on the booking request the table should be assigned automatically to the user.

### - Design a React application to book a table for dinner only and design the relavant Entities. The booking will be accepted only for the current day and online booking should work only till 8pm.Once a table is booked, it is booked for the whole evening.

---

## Resources

https://reactjs.org/docs/getting-started.html

https://docs.npmjs.com/

https://testing-library.com/docs/

https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md

## TASK Details :

- 1 : Creation of React App and Installing Various Pacakages.

- 2 : Creating Source Folder for Components and Apis.

- 3 : Creating Server Folder for the Dummy Json Server.

- 4 : Creating Tests Folder for Code Unit Testing using JEST.

- 5 : Creating Api Folder for the several required Api Methods & Axios is used.

---

## 1. Getting Started

npx create-react-app --foodinesta

---

## 2. Source Folder contains Components Folder & Api Folder

      Create Component Folder as Components and add your components for the react app inside it.
      - Booking Form
      - Cancel
      - Homepage
      - Navbar
      - Thankyou

      Create TEST Folder as __test__ and add your test files for the react app inside it.
      - Booking Form
      - Cancel
      - Homepage
      - Navbar
      - Thankyou

      Create API Folder as Api and add your Api file which holds the endpoint and all methods used in the react app.
      - Booking Form
      - Cancel
      - Homepage
      - Navbar
      - Thankyou

---

## 3. Server Folder contains Dummy Json

      Create Dummy Json as tableData for the table & booking details made through the Api in the React app.

      Table Data for Booked Tables with capacity of two runs at : http://localhost:5000/table2

      Table Data for Booked Tables with capacity of four runs at : http://localhost:5000/table4

---

## 4. Unit Testing

    The main benefit of unit testing is that it makes your project more agile. Whenever you add a new feature, you may have to change the old code. Changing a code that’s been tested already is costly and risky. However, if you run unit tests on the new code, you’ll be confident that the new code won’t break any old feature.

### JEST Tool

    Jest was the most popular JavaScript unit testing framework in 2020. For web apps that are based on React, Jest is the preferred framework. Apart from React, Jest supports unit testing of Angular, VueJS, NodeJS, and others.

### Advantages:

It’s easy to learn.
It requires zero setup.
Managing large test cases is relatively easy because of a snapshot capturing feature.

---

## Commands required

### For Starting Json Server : npm run start-server

    - Runs the server at port 5000.

### For Starting The App : npm run start

    - Runs the App at port 3000.

### For Testing The App : npm run test

    - Runs multiple unit testcases and gives it's output.

## Topics :

HTML, CSS, JavaScript, JSON, npm, Unit Testing, JEST, Api, Axios.

---

## Tools used

- Visual Studio Code
- React framework
- HTML, CSS and Javascript
- JEST
- Testing Library
- Json Server
- Axios
- Npm

---

### Author :

        Sai Sarthak Mohapatra
