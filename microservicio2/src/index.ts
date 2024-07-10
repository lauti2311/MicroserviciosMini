import express from 'express';

const app = express();

app.get('/api/v1/service2', (req, res) => {

   res.json({message: 'Hello from service 2'});

});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});