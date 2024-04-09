<p align="center">
    <img src="https://user-images.githubusercontent.com/62269745/174906065-7bb63e14-879a-4740-849c-0821697aeec2.png#gh-light-mode-only" width="40%">
    <img src="https://user-images.githubusercontent.com/62269745/174906068-aad23112-20fe-4ec8-877f-3ee1d9ec0a69.png#gh-dark-mode-only" width="40%">
</p>

Note Keepeing REST API with Node.js, Express.js, and MongoDB
Endpoints:

    - **`GET /notes`**: Retrieve all notes, you can pass a limit and page to perform the pagination with notes list **`GET /notes?limit=Limit&page=PAGE&title=TITLE&content=CONTENT`**.
    
    - **`POST /notes`**: Add a new note.
    
    - **`DELETE /notes/:id`**: Delete a specific note using its ID.
    
    - **`PUT /notes/:id`**: Update a specific note using its ID.
    
