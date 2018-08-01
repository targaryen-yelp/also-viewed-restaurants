# also-viewed-restaurants
Also Viewed Restaurants module in bottom sidebar

# Create fake data in mongoDB
STEP 1 - Start mongoDB process
- In terminal type:
mongod
- If permission error, type:
sudo mongod

STEP 2 - Start server
- Change terminal directory to module's folder. Then in terminal type:
npm run start

STEP 3 - Create fake data in mongoDB
- In client/src/PlaceList.jsx, scroll to bottom and uncomment:
/* <button onClick={(e) => {this.createData(e)}}>Click To Create Fake Data</button> */
- In browser, type:
localhost:9001
- On localhost:9001 site, scroll to bottom of the page.
- Click on "Click To Create Fake Data" button. This will send 100 post requests to server. For each post request, Controller will create 1 fake restaurant data using faker.js and save the fake data to the mongoDB.
- Now that the database has data, refresh the site in your browser. The site will then pull data of similar nearby restaurants from the database.

STEP 4 - Hide the button again
- In client/src/PlaceList.jsx, scroll to bottom and comment out:
<button onClick={(e) => {this.createData(e)}}>Click To Create Fake Data</button>
- Refresh the site in your browser. It should no longer have the "Click To Create Fake Data" button.




