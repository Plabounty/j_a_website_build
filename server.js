const express = require('express');

const app = express();

app.get('/api/jamarketing', (req, res) => {
    const jamarketing = [
        {id: 1, firstName: 'April', lastName: 'Mcintosh'},
        {id: 2, firstName: 'Jason', lastName: 'Mcintosh'},
        {id: 3, firstName: 'Laura', lastName: 'LaBounty'}
    ];

     res.json(jamarketing);
})

const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));