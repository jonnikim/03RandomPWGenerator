# 03RandomPWGenerator
![Project license badge](https://img.shields.io/badge/license-MIT-brightgreen)

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


# Table of Contents
  * [User Story](#User-Story)
  * [Deployed App](#Deployed-App)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Questions](#Questions)

## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```
## Deployed App
GitHub: [Random Password Generator](https://jonnikim.github.io/03RandomPWGenerator/)

## Installation
```
i. Fork the Github repository.
ii. Clone the forked repo into your local machine
iii. open index.html in browser
```

## Usage

Notable Technologies Used:
- Javascript

Password character length is prompted and saved as the possible generated password's max character length.

Possible values for the password's characters (numbers, upper/lower-case, etc.) were determined using confirms which were then saved. Then if (confirm), add those characters as possible options in the password generator.

Then using a for loop, Math.floor(), and Math.random(), I would get the index value of the possible password characters and randomly push that into the final password's value.

Then utilized DOM manipulation to post the results onto the page.

## Contributing
[Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## License 
[MIT](https://github.com/jonnikim/03RandomPWGenerator/blob/master/LICENSE) | Copyright © 2020 Jonathan Kim

## Questions  
Have questions? Contact me at:
##### Email: jonathan213kim@gmail.com
##### Github: https://github.com/jonnikim
##### Porftolio: https://dry-springs-76393.herokuapp.com/
##### LinkedIn: https://www.linkedin.com/in/jonathan-h-kim/

