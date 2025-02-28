# Yes No Query

Yes or No Query is a simple web application that interacts with an API to provide yes/no answers to user queries. The application allows users to type a question and receive a yes/no answer with an accompanying image.

## Project Structure

```
index.html
script.js
```

### index.html

This file contains the HTML structure of the web application. Key elements include:
- An input field (`#input`) where users can type their questions.
- A button (`#button`) that users click to submit their questions.
- A paragraph (`#error`) to display error messages.
- A div (`#answer`) to display the API response.

### script.js

This file contains the JavaScript logic for the web application. Key functions include:
- **Selectors**: Selecting HTML elements using `document.querySelector`.
- **API Endpoint**: The URL of the API (`https://yesno.wtf/api`) that provides yes/no answers.
- **Flags**: Managing the state of the request (`isRequestInProgress`).
- **Functions**:
  - `setIsRequestInProgress`: Sets the request state.
  - `setDisableButtonState`: Disables/enables the button based on the request state.
  - `cleanupResponse`: Clears the response and resets the input field after a delay.
  - `showAnswer`: Displays the API response (an image) and calls `cleanupResponse`.
  - `fetchAnswer`: Fetches the answer from the API and calls `showAnswer`.
  - `showError`: Displays an error message if the input field is empty.
  - `getAnswer`: Validates the input and initiates the API request.
  - `handleKeyEnter`: Handles the Enter key press to trigger `getAnswer`.

## How to Use

1. Open `index.html` in a web browser.
2. Type a question in the input field.
3. Click the "Get Answer" button or press Enter.
4. The application will fetch a yes/no answer from the API and display it along with an image.

## License

This project is licensed under the MIT License.