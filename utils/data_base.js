import express from 'express';
import { connect } from 'mongoose';
const app = express();

connect("mongodb://localhost:3000/share_prompt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},).then(() => console.log('Connected Successfully')).catch((err) => {
    console.error(err);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})

