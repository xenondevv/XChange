# Currency Converter

A simple web-based currency converter application that allows users to convert amounts between different currencies using real-time exchange rates.

## Features

- **Real-Time Exchange Rates**: Fetches the latest exchange rates from an API.
- **Dynamic Dropdowns**: Automatically populates currency options in dropdown menus.
- **Flag Updates**: Displays country flags dynamically based on the selected currency.
- **Validation**: Ensures valid input for the amount to be converted.
- **Responsive Design**: Styled for a clean and user-friendly interface.

## Project Structure

```
Currency-Converter/
├── CurrencyC/
│   ├── 

App.js

          # Main JavaScript logic for the application
│   ├── 

country.js

      # Contains a list of country codes and their corresponding currency codes
│   ├── 

index.html

      # Main HTML file for the application
│   ├── 

style.css

       # Styling for the application
│   └── img/            # Folder for background images (if any)
└── 

README.md

           # Project documentation
```

## How It Works

1. **Dropdown Population**: The dropdown menus for "From" and "To" currencies are dynamically populated using the `country.js` file.
2. **Flag Updates**: When a currency is selected, the corresponding country flag is displayed next to the dropdown.
3. **Conversion**: On clicking the "Get Exchange Rate" button, the app fetches the exchange rate from the API and calculates the converted amount.
4. **Validation**: If the input amount is invalid, the app prompts the user to enter a valid amount.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the application.
- **JavaScript**: For dynamic functionality and API integration.
- **Fetch API**: For making HTTP requests to fetch exchange rates.
- **Flags API**: For displaying country flags dynamically.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Currency-Converter/CurrencyC
   ```
3. Open the `index.html` file in your browser to run the application.

## API Used

- **Exchange Rate API**: [https://latest.currency-api.pages.dev/v1/currencies/](https://latest.currency-api.pages.dev/v1/currencies/)
- **Flags API**: [https://flagsapi.com](https://flagsapi.com)

## Screenshots

![Currency Converter Screenshot](path/to/screenshot.png)

## Future Enhancements

- Add support for more currencies.
- Improve error handling for API failures.
- Add a feature to display historical exchange rates.
- Make the application fully responsive for mobile devices.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [MDN Web Docs](https://developer.mozilla.org/) for JavaScript and Fetch API documentation.
- [Flags API](https://flagsapi.com) for providing country flag images.
```

Replace `path/to/screenshot.png` with the actual path to your screenshot if you have one. You can also update the repository URL and license information as needed.