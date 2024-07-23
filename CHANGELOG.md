# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
- Add features that are implemented but not yet released.
- Fix bugs or issues that have been resolved but not yet released.
- Make other changes or improvements that are completed but pending release.

## [0.0.9] - 2024-07-22
### Added
- **Healthchecks in Docker Compose**: Added healthchecks for both the `api` and `store` services to ensure proper startup and readiness of services.
### Updated
- **README**: Adjusted README file with the final configuration.

## [0.0.8] - 2024-07-21
### Added
- **GitHub Actions Workflow Enhancements**: Updated the GitHub Actions workflow to properly build and test Docker containers, including the addition of `.env` file creation and verification steps.

### Updated
- **Tests**: Modified and added integration and unit tests to cover new functionality and ensure data integrity.
- **Helper Functions**: Improved helper functions to handle new data structure validations.

## [0.0.7] - 2024-07-20
### Added
- **Dockerfile Modifications**: Modified the Dockerfile to streamline the build process and ensure proper startup using `wait-for-it.sh`.

### Updated
- **Docker Compose Configuration**: Adjusted Docker Compose setup to ensure proper environment variable usage and service dependency management.
- **API Enhancements**: Updated API endpoints to join players and clubs tables and display player information along with club names.

## [0.0.6] - 2024-07-19
### Added
- **Integration with GitHub Actions**: Set up initial GitHub Actions workflow for CI/CD pipeline.

## [0.0.5] - 2024-07-17
### Added
- **Club and Player Management**: Implemented player management with club association to provide an overview of players along with their respective clubs.
- **Database Migrations**: Added new migration scripts for clubs and players tables, including relationships.
- **Seeding Data**: Created seed scripts to populate clubs and players tables with sample data.
Enhanced API: Updated API endpoints to join players and clubs tables and display player information along with club names.

### Updated
- **Tests**: Modified and added integration and unit tests to cover new functionality and ensure data integrity.
- **Helper Functions**: Improved helper functions to handle new data structure validations.
- **Docker Compose Configuration**: Adjusted Docker Compose setup to ensure proper environment variable usage and service dependency management.

## [0.0.4] - 2024-07-15

### Added
- **Unit Tests**: Added unit tests for player management endpoints and validation functions.

## [0.0.3] - 2024-07-14

### Added
- **Player Management Endpoints**: Added endpoints for managing player data including routes for adding and retrieving players.
- **PostgreSQL Integration**: Configured PostgreSQL integration and added environment variable template for database configuration.
- **Helper Functions**: Created helper functions for endpoint validation to ensure data integrity.

### Updated
- **Docker Compose Configuration**: Updated Docker Compose configuration to orchestrate API and PostgreSQL services.

## [0.0.2] - 2024-05-12  

### Added
- **README**: Added a README file to provide an overview of the project, its purpose, how to set it up, and the current development stage.
- **Contributing Guidelines**: Created CONTRIBUTING.md to outline how potential contributors can participate in the project, detailing steps for submitting changes, coding style requirements, and testing procedures.
- **License**: Added a LICENSE file to clarify the usage rights and restrictions for the project.
- **Code of Conduct**: Implemented a Code of Conduct to ensure a respectful and inclusive environment for all contributors and participants.

### Updated
- **Documentation**: Updated existing documentation to reflect changes in project setup and development practices.

## [0.0.1] - 2024-05-11

### Added
- **Initial Express Setup**: Set up the initial Express server to handle basic API requests.
- **Docker Support**: Created Docker configuration files to facilitate development and deployment using Docker containers.

### Updated
- **Documentation**: Updated documentation to reflect the new setup and deployment instructions.
