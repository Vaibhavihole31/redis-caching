import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
    fullName: { type: String, required: [true, 'fullName cannot be empty'] },
    email: { type: String, required: [true, 'email cannot be empty'] },
    password: { type: String, required: [true, 'password cannot be empty'] },
    mobile: { type: String, required: [true, 'mobile cannot be empty'] },
},
    {
        timestamps: true
    }
)

const Student = model('Student', studentSchema);
export default Student;