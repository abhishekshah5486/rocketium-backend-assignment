# Rocketium Backend Assignment

## Overview
This project is a Node.js backend service that provides various API endpoints to manage and interact with user data. It includes functionality for fetching, filtering, sorting, and searching user data. 

## Project Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/abhishekshah5486/rocketium-backend-assignment.git
    ```

2. **Navigate to the Project Directory**
    ```bash
    cd rocketium-backend-assignment
    ```

3. **Install Dependencies**
    ```bash
    npm install
    ```

4. **Environment Variables**
   - Create a `.env` file in the root directory of the project.
   - Add the following line to specify the port:
     ```plaintext
     PORT=8081
     ```

### Running the Project

1. **Start the Server**
    ```bash
    npm start
    ```
    Alternatively, for development with auto-reloading:
    ```bash
    npm run dev
    ```

2. **Access the API**
   - The server will run on `http://localhost:8081` or the port specified in your `.env` file.

## API Endpoints

### General Information
- **Base URL**: `http://localhost:8081/api/users`

### Endpoints

1. **Get All Users**
    - `GET /`
    - Description: Retrieves a list of all users.

2. **Get User by ID**
    - `GET /:id`
    - Description: Retrieves a user by their unique ID.

3. **Filter Users by Name**
    - `GET /search/name/:name`
    - Description: Searches for users with a specific name.

4. **Fetch All Users for a Specific Language**
    - `GET /filter/language/:language`
    - Description: Retrieves users who speak a specific language.

5. **Sort Users by Name**
    - `GET /sort/name/:order`
    - Parameters:
      - `order` (asc or desc)
    - Description: Sorts users by name in the specified order.

6. **Sort Users by Version**
    - `GET /sort/version/:order`
    - Parameters:
      - `order` (asc or desc)
    - Description: Sorts users by version in the specified order.

7. **Fetch Users with a Keyword in Their Bio**
    - `GET /search/bio/:keyword`
    - Description: Searches for users with a specific keyword in their bio.

8. **Fetch Users Within a Version Range**
    - `GET /version/range/:min/:max`
    - Parameters:
      - `min` (minimum version)
      - `max` (maximum version)
    - Description: Retrieves users whose version falls within the specified range.

9. **Fetch Users Within a Version Range and Sort**
    - `GET /version/range/:min/:max/sort/:order`
    - Parameters:
      - `min` (minimum version)
      - `max` (maximum version)
      - `order` (asc or desc)
    - Description: Retrieves users within a version range and sorts them by version.

10. **Retrieve Latest Users by Version**
    - `GET /latest/:limit`
    - Parameters:
      - `limit` (number of users to retrieve)
    - Description: Retrieves the latest users based on the highest version number.

11. **Retrieve Users by Name Initial**
    - `GET /name/initial/:initial`
    - Parameters:
      - `initial` (initial letter of the name)
    - Description: Retrieves users whose names start with a specific initial.

12. **Retrieve Users by Name Initial and Sort**
    - `GET /name/initial/:initial/sort/:order`
    - Parameters:
      - `initial` (initial letter of the name)
      - `order` (asc or desc)
    - Description: Retrieves users whose names start with a specific initial and sorts them by name.

## Error Handling
- Returns appropriate HTTP status codes and error messages for various failure scenarios.

## Documentation
- For testing the APIs, use tools like [Postman](https://www.postman.com/) to send requests and view responses.

## Contribution
- Feel free to fork the repository and submit pull requests for improvements.

## License
- This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
