# Playwright Tests Repository

This repository contains end-to-end tests written using Playwright. The project follows best practices, including the Page Object Model, linting with ESLint, and code formatting with Prettier. Husky is used for pre-commit hooks.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** This project requires Node.js. [Download and install Node.js](https://nodejs.org/).

## Table of Contents

- [Installation](#installation)
- [Run Tests](#run-tests)
- [Folder Structure](#folder-structure)
- [Test Reporting](#test-reporting)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sergey-mario/unity-task.git
    cd unity-task
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Run Tests

Execute the following command to run the Playwright tests:

```bash
npm test
```

Execute the following command to run the specific tests

```bash
npm test
```

To run tests in headful mode, use the following command:

```bash
npm run test user.login.negative.spec.js
```

To run specific project (e.g. chromium), use the following command:

```bash
npm run test -- --project=chromium
```

## Folder Structure

The project structure follows the Page Object Model for better organization and maintainability.

```
|-- pageobject/
|   |-- folder_1_feature_1/
|   |   |-- page_1_feature_1.js
|   |   |-- page_2_feature_1.js
|   |-- widgets/
|   |   |-- widget_1.js
|   |   |-- widget_2.js
|   |-- app.js
|   |-- page_3_feature_2.js
|-- playwright.config.js
|-- package.json
```

The `app.js` file is main class that receives the page and passes it to each page object class.
`App` class pass the page fixture and through it, so we can access the page objects we have defined for our application.
It provides a way to use this `app` object directly in our tests without needing to instantiate it manually in every test, 
thus reducing even more the verboseness.

`widgets` folder contains reusable components (like the header, footer, navigation bar, and other recurring UI elements) that can be used across multiple pages.

## Test Reporting

Repository uses Playwright for test reporting.

Playwright report generated automatically as html file after each test run.

The generated reports can be found in the `playwright-report` folder.

To show report, use the following command:

```bash
npm run show:report
```

## Contributing

Contributions are welcome! If you have improvements or suggestions, please open an issue or create a pull request.

# Test cases
## Login feature
**User can log in with valid credentials**
1. Navigate to the login page http://44.201.148.182:3000/admin/login
2. Enter valid email address
3. Enter valid password
4. Click on the login button
5. User should be redirected to the Admin page

**User can't log in with invalid credentials**
1. Navigate to the login page http://44.201.148.182:3000/admin/login
2. Enter invalid email address
3. Enter invalid password
4. Click on the login button
5. User stays on the login page

**User can not log in if enter credentials as empty string**
1. Navigate to the login page http://44.201.148.182:3000/admin/login
2. Leave email address field empty
3. Leave email password field empty
4. Click on the login button
5. User stays on the login page

**User can not log in if enter email as empty string**
1. Navigate to the login page http://44.201.148.182:3000/admin/login
2. Leave email address field empty
3. Enter valid password
4. Click on the login button
5. User stays on the login page

**User can not log in if enter password as empty string**
1. Navigate to the login page http://44.201.148.182:3000/admin/login
2. Enter valid email
3. Leave password address field empty
4. Click on the login button
5. User stays on the login page

## Logout feature
**User can log out**
1. Login to the system
2. Hover over the user icon in the top right corner
3. Click on the [Logout] button
4. User should be redirected to the login page

## Publisher feature
**User can create new Publisher and then see it on Publisher table**
1. Login to the system
2. Navigate to the Publisher page Happy Folder -> Publisher
3. Click on the [Create new] button
4. Fill in the email form with valid data
5. Click on the [Save] button
6. User should redirect to Publisher list page see the new publisher in the list

## Profile feature
**User can create new Profile and then see it on Profile table**
1. Login to the system
2. Navigate to the Profile page Happy Folder -> Profile
3. Click on the [Create new] button
4. Fill in the bio form and choose publisher from the dropdown
5. Click on the [Save] button
6. User should redirect to Profile list page see the new Profile in the list

## Post feature
**User can create new Post and then see it on Post table**
1. Login to the system
2. Navigate to the Post page Happy Folder -> Post
3. Click on the [Create new] button
4. Fill in the Title form
5. Click on the [Add new item] button in Some Json block
6. Fill in Json forms: Json Number, Json String, Json Boolean, Json Date
7. Select status from the dropdown
8. Check "published" checkbox
9. Choose publisher from the dropdown
10. Click on the [Save] button
11. User should redirect to Post list page see the new Post in the list

# Test cases that was not covered
1. User can remove Profile, Post
2. User can filer Publisher, Profile, Post
3. User can edit Publisher, Profile, Post
4. User can see all details for Publisher, Profile, Post
