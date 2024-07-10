import express from 'express';

const app = express();

app.get('/api/v1/service1', (req, res) => {

   res.json({message: 'Hello from service 1'});

});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});