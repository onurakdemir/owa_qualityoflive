import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const hobbySchema = new Schema({
    name: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

let Hobby = mongoose.model('Hobby', hobbySchema);

export default Hobby;