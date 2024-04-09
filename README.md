

Note Keepeing REST API with Node.js, Express.js, and MongoDB
Endpoints:

    - **`GET /notes`**: Retrieve all notes, you can pass a limit and page to perform the pagination with notes list **`GET /notes?limit=Limit&page=PAGE&title=TITLE&content=CONTENT`**.
    
    - **`POST /notes`**: Add a new note.
    
    - **`DELETE /notes/:id`**: Delete a specific note using its ID.
    
    - **`PUT /notes/:id`**: Update a specific note using its ID.
    
