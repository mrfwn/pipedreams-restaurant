<head>
	<h1>  PipeDreams - Restaurant Work Schedule </h1>
</head>
<body>
<div>
  
  ##  Description:  
   - This application is a work schedule for the cooks and waiters of a restaurant, where when accessing a web application it is possible to see which employees are allocated to work on a certain day of the week. 
   
  ##  Running in Docker: 
	
   - Clone code: `git clone <url_repository> .`
  
   - Inside the project folder, run: `docker-compose up --build -d`
  
  ## Running locally:
  
   - Clone code: `git clone <url_repository> .`

   - Run `npm install` inside frontend and backend folders
   
   - Create an `.env` file from `.env.example` inside frontend and backend folders
  
   - Create a mongo database locally or run `docker run --name mongodb -d -p 27017:27017 mongo`
  
   - Run `npm start` inside frontend and backend folders

  ## Automated tests:
  
   - Unit and Integration tests were implemented for the entire backend with 100% coverage.
  
   - For execution use command `npm run test` or command `npm run test-coverage` to show coverage

  ![Screen Shot 2023-04-26 at 2 12 01 AM](https://user-images.githubusercontent.com/13460706/234485125-bb91fd88-fd21-4a9b-85b7-7097e51b7911.png)

  
  ## BackEnd Features:
  - Get the cooks week work schedule
  - Get the waiters work week work schedule

  ## Routes:
  - Default Path: {host}/api/v1/{entity}:
    - GET: `/GetCooks`
    - GET: `/GetWaiters`

  ## Frontend Features:
  - Navigation between pages
  - Employee list display
  - Display limitation between Monday and Friday
  - Persistence in Local Storage
  - Responsive pages
  
  ![navegate](https://user-images.githubusercontent.com/13460706/234490853-18cc9b41-7b63-4686-bea2-b4410594c4ca.gif)

  ![resize](https://user-images.githubusercontent.com/13460706/234491272-37de4aec-ba79-4bd0-af37-5d2e90f8fda9.gif)
  
  ##  Pages:
   - /Cooks
   - /Waiters
   
  ## Backend code Flow:
  
  <img src="https://user-images.githubusercontent.com/13460706/234496624-2779912c-16ba-42b0-baf3-6cd49e299811.png" title="backend flow" width="500" height="400">

  ## Frontend component Flow:
	
  <img src="https://user-images.githubusercontent.com/13460706/234499657-d7a0107c-f37f-4d52-9b18-4735c39d7129.png" title="frontend flow" width="400" height="550">
  
</div>

</body>
