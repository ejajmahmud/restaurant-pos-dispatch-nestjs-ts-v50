const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'restaurant-pos-dispatch-nestjs-ts-v50',
        category: 'Restaurant Kitchen POS & Delivery Dispatch',
        tech: 'TypeScript / NestJS Framework',
        status: 'active'
    });
});

app.listen(PORT, () => {
    console.log(`[restaurant-pos-dispatch-nestjs-ts-v50] Express engine listening on port ${PORT}`);
});
