# UserView

UserView is a React component that displays a list of users fetched from an API. It includes a search functionality to filter the users by their first names.

## Features

- Fetches user data from the [reqres.in](https://reqres.in) API.
- Allows users to search for specific users by their first names.
- Displays user information, including their ID, avatar, and first name.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git


2. Navigate to the project directory:

  cd your-repository

3. Install the dependencies:
  npm install

4. Start the application:
  npm start

## Usage
Enter a search term in the search input field to filter the users based on their first names.
The user list will dynamically update as you type, showing only the users whose first names match the search term.
Technologies Used
1. React
2. axios
3. react-unicons
API Reference
The UserView component fetches user data from the reqres.in API. Specifically, it uses the following endpoint:

GET https://reqres.in/api/users?page=2

This endpoint retrieves a paginated list of users. The UserView component extracts the relevant user data from the API response.

License
This project is licensed under the MIT License.

Feel free to customize the README file as needed, and make sure to update the license section with the appropriate license information for your project.
