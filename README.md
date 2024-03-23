# Playwright Tests Repository

This repository contains end-to-end tests written using Playwright.

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

To run tests in headful mode, use the following command:

```bash
npm run test -- --headed
```

To run specific project (e.g. chromium), use the following command:

```bash
npm run test -- --project=chromium
```

## Folder Structure

The project structure follows the Page Object Model for better organization and maintainability.

NOTE: inside page folder also stored frames as part of page object.

```
|-- pageobject/
|   |-- page1/
|   |-- page2/
|-- playwright.config.js
|-- package.json
```

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

**NOTE:** This test case covered by API and has a bug on backend side. Request returns 200 status code, but we expect 401 (Unauthorized)

**User can not log in if enter email as empty string**
1. Navigate to the login page http://44.201.148.182:3000/admin/login
2. Leave email address field empty
3. Enter valid password
4. Click on the login button
5. User stays on the login page

**NOTE:** This test case covered by API and has a bug on backend side. Request returns 200 status code, but we expect 401 (Unauthorized)

**User can not log in if enter password as empty string**
1. Navigate to the login page http://44.201.148.182:3000/admin/login
2. Enter valid email
3. Leave password address field empty
4. Click on the login button
5. User stays on the login page

**NOTE:** This test case covered by API and has a bug on backend side. Request returns 200 status code, but we expect 401 (Unauthorized)

## Publisher feature
**User can log in with valid credentials**
1. Login to the system
2. Navigate to the Publisher page Happy Folder -> Publisher
3. Click on the [Create new] button
4. Fill in the email form with valid data
5. Click on the [Save] button
6. User should redirect to publisher list page see the new publisher in the list

# Test cases that was not covered
1. User can create new Profile
2. User can create new Post
3. User can log out
4. User cant create new Publisher with empty email field
5. User cant create new Profile with empty publisher option
6. User cant create new Post with empty title, status and publisher field
7. User can remove Publisher, Profile, Post
8. User can filer Publisher, Profile, Post
9. User can edit Publisher, Profile, Post
10. User can see all details for Publisher, Profile, Post
