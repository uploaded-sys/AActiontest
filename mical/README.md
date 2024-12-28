# Geometric Optics Calculator Tests

This project contains tests for a geometric optics calculator using Jest testing framework.

## Installation

1. Make sure you have Node.js installed on your system
2. Clone this repository
3. Install dependencies by running:
```bash
npm install
npm install --save-dev jest
```

## Configuration

1. Add the following to your package.json:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Running Tests

To run the tests, use one of the following commands:

```bash
npm test
```

or

```bash
npx jest
```

## Test Coverage

To get test coverage report, run:

```bash
npx jest --coverage
```

## Test Structure

The tests verify various scenarios for the geometric optics calculator:
- Infinite cases (0° angle)
- Symmetric object positions
- Asymmetric object positions
- Odd and even division results
- Negative angles
- Special cases (360° and 180°)
