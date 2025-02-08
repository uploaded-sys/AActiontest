# Geometric Optics Calculator

A JavaScript calculator for geometric optics calculations with comprehensive test coverage.

## Features

- Angle calculations between objects
- Reflection computations
- Support for:
  - Infinite cases (0° angles)
  - Symmetric object positions
  - Asymmetric object positions
  - Edge cases (360° and 180°)

## Prerequisites
- Node.js 14 or higher
- npm 6 or higher
- Required packages:
  - jest
  - @types/jest

## Installation

### Using the Installer (Recommended)

1. Download the latest installer from the releases page:
   - Windows: `see releases`
   - macOS: `not made`
   - Linux: `not made`

2. Run the installer:
   - Windows: Double-click the `.exe` file and follow the wizard
   - macOS: not made
   - Linux: not made

### Manual Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mical.git
cd mical
```

2. Install dependencies:
```bash
npm install
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

## Usage

### Basic Setup
1. Create your test files in the test directory
2. Run tests with:
```bash
npm test
```

### Advanced Options
- `--coverage` : Generate coverage report
- `--watch` : Watch mode
- `--verbose` : Detailed output

## Examples

1. Basic test run:
```bash
npm test
```

2. With coverage:
```bash
npm test -- --coverage
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

## Test Cases

Our test suite covers:

1. Angle Calculations
   - Basic angle measurements
   - Reflection angles
   - Mirror symmetry

2. Position Calculations
   - Object distance from mirror
   - Image formation
   - Symmetric positions

3. Special Cases
   - Perpendicular rays
   - Parallel rays
   - Zero-angle cases

4. Edge Cases
   - 360° rotations
   - 180° reflections
   - Negative angles
   - Boundary conditions
