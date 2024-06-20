![https://yk-website-images.s3.eu-west-1.amazonaws.com/LogoV4_TRANSPARENT.png](https://yk-website-images.s3.eu-west-1.amazonaws.com/LogoV4_TRANSPARENT.png)

# Youverse Passwordless web

[![License](https://img.shields.io/github/license/dev-yoonik/youverse-passwordless-web)](https://github.com/dev-yoonik/youverse-passwordless-web/blob/master/LICENSE)
[![Version](https://img.shields.io/github/v/release/dev-yoonik/youverse-passwordless-web?display_name=tag)](https://github.com/dev-yoonik/youverse-passwordless-web)

## Overview

**Youverse Passwordless web** is a JavaScript class designed to handle user enrollment and verification processes through HTTP requests. It supports both inline and modal presentation types, allowing for flexible integration into various web applications.

## Features

- **Initialization** with a specified URL and presentation type (inline or modal).
- **Success and Error Handling** by setting custom functions.
- **Dependency Loading** to dynamically include additional scripts.
- **User Management** including setting user IDs and toggling new user status.
- **Custom Payloads** to include additional data in POST requests.
- **Modal Handling** to toggle the visibility of modal dialogs.

## Integration via CDN

Add the script to your project

```html
<script src="https://cdn.jsdelivr.net/gh/dev-yoonik/youverse-passwordless-web@latest/js/youverse.js"></script>
```
## Usage

### HTML Setup

Add a div container to your HTML:

```html
<div id="youverse"></div>
```

### JavaScript Initialization

Initialize the Youverse class in a `<script>` tag or an external JavaScript file:

```javascript
const success = (response) => {
  console.log("Success ", response);
};

const error = (response) => {
  console.log("Something went wrong");
};

const youverse = new Youverse("API_ENDPOINT");

youverse.setSuccessFunction(success);
youverse.setErrorFunction(error);
youverse.start();
```

## Class Methods

### Constructor

`Youverse(url, isModal = false)`

- **url**: The endpoint URL for HTTP requests.
- **isModal**: A boolean indicating whether to use modal presentation (default is `false`).

### Methods

- **start()**: Starts the application and loads dependencies.
- **setSuccessFunction(func)**: Sets the function to be called on a successful request.
- **setErrorFunction(func)**: Sets the function to be called on a failed request.
- **getUrl()**: Returns the current URL.
- **setUrl(url)**: Sets a new URL for HTTP requests.
- **getUser()**: Returns the current user ID.
- **setUser(user, isNewUser = false)**: Sets the user ID and new user status.
- **setNewUserToggle(status)**: Sets the new user toggle status.
- **getNewUserToggle()**: Returns the new user toggle status.
- **isModal()**: Returns the modal status.
- **toggleModal()**: Toggles the modal visibility.
- **setCustomPayload(payload)**: Sets a custom payload for POST requests.
- **getCustomPayload()**: Returns the custom payload.

## Example

Here is a complete example of using the Youverse class in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.jsdelivr.net/gh/dev-yoonik/youverse-passwordless-web@latest/js/youverse.js"></script>
</head>

<body>
  <div id="youverse"></div>

  <script>
    const success = (response) => {
      console.log("Success ", response);
    };

    const error = (response) => {
      console.log("Something went wrong");
    };

    const youverse = new Youverse("API_ENDPOINT");
    
    youverse.setSuccessFunction(success);
    youverse.setErrorFunction(error);
    youverse.start();
  </script>
</body>

</html>
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
