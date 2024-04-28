# Employee Management System

This project is an Employee Management System built using Spring Boot for the backend, Angular for the frontend, MySQL for the database, and Docker for containerization.

## Setup Instructions

### Prerequisites

Make sure you have Docker installed on your system. Also, I recommend setting up Postman to test API's.

### Setting Up MySQL Database

1. **View Current Volume:** Run the following command to view current volumes:
    ```
    docker volume ls
    ```

2. **Create Volume:** If not already created, create a volume for MySQL data:
    ```
    docker volume create mysql_vol
    ```

3. **Run MySQL Container:** Start a MySQL container with the following command:
    ```
    docker run --name mysql_container -p 3333:3306 -d -e MYSQL_ROOT_PASSWORD=root -d -v mysql_vol:/var/lib/mysql mysql_db
    ```

4. **Access MySQL Container:** Access the MySQL container in interactive mode to run SQL commands:
    ```
    docker exec -it mysql_container /bin/bash
    ```

5. **Connect to MySQL:** Once inside the container, run the following command to connect to MySQL:
    ```
    mysql -u root -p
    ```
    Enter the password when prompted.

6. **Create Database:** Create a new database named `employee_database`:
    ```
    CREATE DATABASE employee_database;
    ```


### Running the Application

1. **Start Docker:** Make sure Docker is running on your system.

2. **Start MySQL Container:** Start the MySQL container if not already running:
    ```
    docker start mysql_container
    ```

3. **Run Spring Boot Application:** Run the Spring Boot main application to start the backend server.

4. **Run Angular Application:** Navigate to the Angular folder and run the following command to start the frontend:
    ```
    cd angular
    docker-compose up -d -V
    ```

5. **Access Angular Container:** To make changes to the Angular application, access the Angular container:
    ```
    docker exec -it <angular_container_name> /bin/bash
    ```

### Additional Notes

- **Test MySQL Connection:** You can test the MySQL connection from outside the container using the following command:
    ```
    mysql -uroot -p -P3333 -h127.0.0.1
    ```

- **Stopping and Starting Containers:**
  - To stop the MySQL container: `docker stop mysql_container`
  - To start the MySQL container: `docker start mysql_container`


### Common bugs
 - Angular container module may be missing `bootstrap`
 - Depending on your MySQL installation, you may need to update MySQL dialect in `application.properties`
 - Typescript initialization errors can be configured in `tsconfig.json`
   - May need to restart Typescript Interpreter 


## Order of Operations

1. Start Docker.
2. Start the MySQL container.
3. Run the Spring Boot main application.
4. Navigate to the Angular folder and run `docker-compose up -d -V` to start the Angular frontend.
5. Enter the Angular container to make changes using CLI commands.
