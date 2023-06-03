<h1>Express.js API Example</h1>
This is a Express.js API that using CRUD to manage a list of items.

<h2>Getting Started</h2>

Please make sure the following softwares are installed on your computer:
<ul>
<li>Node. js</li>
<li>NPM(Node Package Manager)</li>
</ul>

<h2>Running the application</h2>
<ul>
<li>Open a terminal and navigate to the project directory</li>
<li>Run the command 'npm start' to start the server</li>
<li>The server will listen on 3000</li>
</ul>


<h2> API Endpoints</h2>
<ul>
<li>GET /items: Returns a list of items</li>
<li>POST /items: Adds a new item to the list</li>
<li>GET /items/:id: Returns a item with a specific id</li>
<li>PUT /items/:id: Updates the item with a specific id </li>
<li>DELETE /items/:id: Deletes the item with a specific id</li>
</ul>

<h2> How to Use API</h2>
<ul>
<li>To get a list of items: send a GET request to http:localhost:3000/items</li>
<li>To add a new item: send a POST request to http:localhost:3000/items with a JSON body containing "name" and "price" fields  </li>
<li>To get an item by id: send a GET request to http:localhost:3000/items/:id and replace ":id" with specific id </li>
<li>To update an item by id: send a PUT request to http:localhost:3000/items/:id and replace ":id" with specific id. Include a JSON body with the updated "name" and "price" fields</li>
<li>To delete an item by id: send a DELETE request to http:localhost:3000/items/:id and replace ":id" with specific id</li>
</ul>

<h2>Testing the API</h2>
<ul>
<li>To test the API, please use a tool like Postman or cURL</li>
</ul>

<h2>Error Handling</h2>
<ul>
  <li>If an item with a given ID does not exist, an error message will be returned</li>
  <li>If the provided "name" or "fields are missing or invalid, an error message will be returnd</li>

</ul>


