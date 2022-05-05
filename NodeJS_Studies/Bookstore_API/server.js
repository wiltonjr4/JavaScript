import app from './src/app.js'

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listen in the port http://localhost:${port}`);
})