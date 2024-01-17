# Rooster Regulation (Javascript Testing) Project

## Overview

This project serves as a demonstration of using Mocha, a JavaScript test framework, to test a simple Rooster module. The module provides functions to regulate rooster behavior, specifically related to dawn announcements and timekeeping.

## Usage

To explore how Mocha is used for testing JavaScript code, follow these steps:

1. Download the project:

```bash
    git clone  https://github.com/Olakunleniola/Rooster-Regulation-Javascript-Testing-.git
```

2.. Install the project dependencies using the following command:

```bash
    npm install
```

3.. Run the tests to observe how the Rooster module functions are tested using Mocha:
```bash
    npm test
```

## Rooster Module
`announceDawn`
* Returns a Rooster call.

```javascript
    const Rooster = require("rooster-regulation-project");

    const result = Rooster.announceDawn();
    console.log(result); // Expected output: "moo!"
```

`timeAtDawn`
+ Returns its argument as a string.
- Throws an error if passed a number less than 0 or greater than 23.

```javascript
    const Rooster = require("rooster-regulation-project");

    const result = Rooster.timeAtDawn(4);
    console.log(result); // Expected output: "4"

    // Throws an error if passed a number less than 0
    Rooster.timeAtDawn(-1); // Throws a RangeError

    // Throws an error if passed a number greater than 23
    Rooster.timeAtDawn(24); // Throws a RangeError
```

## Testing with Mocha

This project utilizes Mocha as the testing framework to validate the functionality of the Rooster module. The tests are located in the test directory and can be executed using the following command:

```bash
npm test
```

## Dependencies
+ [Mocha]() - A feature-rich JavaScript test framework

## License
This project is licensed under the ISC License. See the [LICENSE]() file for details.