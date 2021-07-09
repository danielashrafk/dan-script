import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mongoose = require("mongoose");

const transcriptSchema = mongoose.Schema({

    video: String,
    transcription: [String],
    timing: [String],
    timing2: [String],



});

const Transcript =  mongoose.model('Transcript', transcriptSchema);
export default Transcript;