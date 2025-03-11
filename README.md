
# Practicing useForm
## Overview

This is a simple React form built using [React Hook Form](https://react-hook-form.com/). The form includes validation, error handling, and submission with a simulated asynchronous request.

## Features

- Uses `useForm` from `react-hook-form` for form handling.
- Validates inputs such as email, password, confirm password, and a select dropdown.
- Displays error messages based on validation rules.
- Implements an async submission function with a loading state.
- Resets the form after successful submission.

## Form Fields

- **Email:** Required and must contain `@`.
- **Password:** Minimum length of 6 characters.
- **Confirm Password:** Must match the password field.
- **Select:** Must have a selected value.


## Installation & Setup
### Install Dependencies:
```bash
npm install react-hook-form

