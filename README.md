# Football Club Player Overview 

Brief project description goes here.

## Purpose

This API is written in Nodejs and is designed to assist football clubs in obtaining an overview of their players. It simplifies the process of managing player information and provides key insights to club management.

## Features

- **Player Management**: view player information.
- **Data Validation**: Ensures that all player details are complete and valid before storing in the database.
- **Integration Tests**: Validates the proper functioning of API endpoints.
- **Unit Tests**: Checks the correctness of individual functions and helpers.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend API.
- **Express**: Web framework for Node.js.
- **PostgreSQL**: Relational database for storing player and club data.
- **Docker**: Containerization for consistent development and deployment environments.
- **Jest**: Testing framework for unit and integration tests.
- **Supertest**: Library for testing Node.js HTTP servers.

## Quick start 

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/EHB-MCT/portfolio-tweede-zit-v2-SabriImnadine.git
    cd football-club-player-overview
    ```

2. Copy the `.env.template` file to a new file called `.env` and update the environment variables as needed:
    ```sh
    cp .env.template .env
    ```

3. Run the following command to build and start the project using Docker Compose:
    ```sh
    docker-compose up --build
    ```

4. The API will be available at `http://localhost:3000`.

## Status 

The project is done.

## Questions and Support

If you have any questions or need assitance, feel free to open a support
ticket.

## License

This project is licensed under the [MIT License](LICENSE).

## Sources and References

The development of this project was supported by the following resources:

1. **Course Materials**: [Cursus and Videos by Professor](https://canvas.ehb.be/courses/33618)
2. **ChatGPT Assistance**: Utilized for creating the structure of the project, including the README, changelog, code of conduct, and contribution guidelines. Additionally, provided help with coding such as:
Setting up the initial Express server.
Configuring Docker and Docker Compose files for development and production.
Developing integration and unit tests.
Debugging common issues and providing best practices.
(https://chatgpt.com)