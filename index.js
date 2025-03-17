const exp = require('express');
const { json } = require('stream/consumers');
const imp = exp();

imp.use(exp.json());

const books=[];

imp.get('/whoami', (req, resp) =>{
    resp.json({message: '2680747'});

});

/*
imp.get('/books', (req,resp)=>{
    resp.json(books);
});

imp.get('/books/:id',(req,resp)=>{

    const book = books.find(idx=> idx.id === parseInt(req.params.id));
    if(!book){
        return resp.status(404).json({message: '404 Not Found'});
    }
    resp.json(book);
});


imp.post('/books', (req, resp) =>{
    const {book} = req.body;

    if(!book){
        return resp.status(400).json({message:'400 Bad Request'});
    }
    const newBook = {
        id:books.length+1,
        title,
        details:[{
            id:books.length+1,
            author,
            genre,
            publicationYear
        }]
    };

    books.push(newBook);
    resp.status(200).json(newBook);
});

imp.put('/books/:id', (req,resp)=>{
    const updateBook = req.body;
    const bookID = parseInt(req.params.id);

    if(isNaN(bookID)){
        return resp.status(404).json({message: '404 Not Found'})
    }

    if(bookID!==-1){
        index = books.findIndex(i=> i.id === id);
        books[index] = {...books[index],...updateBook};
        resp.json(200).json({message: `Update is successful: ${JSON.stringify(books[index])}`})
    }
    else{
        return resp.status(404).json({message: '404 Not Found'});
    }
});

imp.delete('/books/:id', (req,resp) =>{
    const bookID = parseInt(req.params.id);
    const index = books.find(i=>i.id === id);

    if(isNaN(bookID)){
        return resp.status(404).json({message: '404 Not Found'});
    }

    if(bookID===-1){
        return resp.status(404).json({message: '404 Not Found'});
    }

    const deletedBook = books.splice(index,1);
})


*/

const port = 3000;
imp.listen(port, ()=>{
console.log(`Listening to port ${port}...`);
});
