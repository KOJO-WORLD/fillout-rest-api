const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/:formId/filteredResponses', async (req, res) => {
    try {
        const formId = req.params.formId;
        const apiKey = 'sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912';

        if (!req.query.filters) {
            return res.status(400).json({error: 'Filters parameter is required.'});
        }

        const filter = JSON.parse(req.query.filters);
        const _apiUrl = `https://api.fillout.com/v1/api/forms/${formId}/submissions?apiKey=${apiKey}&filters=${encodeURIComponent(JSON.stringify(filter))}`;


        const response = await axios.get(_apiUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });

        res.json(response.data.responses);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});