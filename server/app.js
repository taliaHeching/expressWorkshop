const express = require('express')

const app = express();
const port = 8000;

app.use((req, res, next) => {
	// res.header('Access-Control-Allow-Origin', '*')
	next();
})

app.get('/', (req, res) => {
	res.send({ data: 'You have received the message:)' })
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
});
