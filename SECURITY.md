# Security Guidelines

## API Key Management

This repository has been updated to prevent API key leaks. Please follow these guidelines:

### For Weather App
- **Never** commit your API keys directly in the code
- Use the `config.example.js` template provided
- Create your own `config.js` file (which is gitignored)
- See `javascript/weather-app/README.md` for detailed setup instructions

### For Firebase Applications
- **Never** commit Firebase configuration with real credentials
- Use the `firebase.example.js` template provided
- Create your own `firebase.js` file with your credentials (which is gitignored)
- See `firebase/README.md` for detailed setup instructions

### General Best Practices
1. Always use environment variables or configuration files for sensitive data
2. Never hardcode API keys, tokens, or credentials in your source code
3. Use `.gitignore` to exclude configuration files with secrets
4. Provide example/template files (e.g., `.example.js`) for other developers
5. Review commits before pushing to ensure no secrets are included

### Files That Should Never Be Committed
- `config.js` files containing real API keys
- `.env` files with environment variables
- Any file containing passwords, tokens, or secret keys

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly by:
1. Not creating a public issue
2. Contacting the repository maintainer directly
3. Providing detailed information about the vulnerability
