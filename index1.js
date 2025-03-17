const exp = require('express');
const imp = exp();
imp.use(exp.json());

const books = [{
  "id": "1",
  "title": "To Kill a Mockingbird",
  "details": [
    {
      "id": "1",
      "author": "Harper Lee",
      "genre": "Fiction",
      "publicationYear": 1960
    }
  ]
}];

imp.get('/whoami', (req, resp) => {
    resp.json({ message: '2680747' });
});

imp.get('/books', (req, resp) => {
    resp.json(books);
});

imp.get('/books/:id', (req, resp) => {
    const book = books.find(i => i.id === req.params.id);
    if (!book) {
    return resp.status(404).json({ message: '404 Not Found' });
  }
resp.json(book);
});

imp.post('/books', (req, resp) => {
    const { id, title, author, genre, publicationYear } = req.body;

  const newBook = {
    id: String(books.length + 1),
title,
    details: [
      {
    id:String(books.length + 1),
    author,
    genre,
    publicationYear
      }
    ]
  };

  if (!title || !author || !genre || !publicationYear) {
    return resp.status(400).json({ message: '400 Bad Request' });
  }

    books.push(newBook);
    resp.status(200).json(newBook);
});

imp.put('/books/:id', (req, resp) => {
    const updateBook = req.body;
    const bookID = req.params.id;

    const index = books.findIndex(i => i.id === bookID);
    if (index === -1) {
        return resp.status(404).json({ message: '404 Not Found' });
  }

    books[index] = { ...books[index], ...updateBook };
    resp.status(200).json({ message: `Update is successful: ${JSON.stringify(books[index])}` });
});

imp.delete('/books/:id', (req, resp) => {
    const bookID = req.params.id;
    const index = books.findIndex(i => i.id === bookID);

    if (index === -1) {
        return resp.status(404).json({ message: '404 Not Found' });
  }

  const deletedBook = books.splice(index, 1);
  resp.status(200).json({ message: 'Book is successfully deleted', book: deletedBook });
});

imp.delete('/books/:id/details/:detailId', (req, resp) => {
    const bookID = req.params.id;
    const detailID = req.params.detailId;

    const book = books.find(i => i.id === bookID);
    if (!book) {
        return resp.status(404).json({ message: '404 Not Found' });
  }

    const detailIdx = book.details.findIndex(d => d.id === detailID);
        if (detailIdx === -1) {
            return resp.status(404).json({ message: '404 Not Found' });
  }

const delDetail = book.details.splice(detailIdx, 1);
resp.status(200).json({ message: 'Detail is successfully deleted', delDetail });
});

imp.post('/books/:id/details', (req, resp) => {
const bookID = req.params.id;
const { author, genre, publicationYear } = req.body;

if (!author || !genre || !publicationYear) {
    return resp.status(400).json({ message: '400 Bad Request' });
  }

const book = books.find(i => i.id === bookID);
if (!book) {
    return resp.status(404).json({ message: '404 Not Found' });
  }

const postDetail = {
    id: String(book.details.length + 1),
    author,
    genre,
    publicationYear
};

book.details.push(postDetail);
resp.status(200).json({ message: 'Detail is added successfully', book });
});

const port = 3000;
imp.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
