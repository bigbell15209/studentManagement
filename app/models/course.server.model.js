const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    courseCode: {
        type:String,
        default: '',
        trim: true,
        required: 'Code cannot be blank'
    },
    courseName: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    section: {
        type: Number, 
        default: '',
        trim: true
    },
    semester: {
        type: Number
    },
    
    applicants: [{
        type: Schema.ObjectId,
        ref: 'Student'
    }]
});
mongoose.model('Course', CourseSchema);
