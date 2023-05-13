import express from "express";
import mongoose from 'mongoose';
import dotennv from 'dotenv';

import Student from './models/Students.js'

dotennv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

try {
    mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connected to DB 📦');
    });
} catch (err) {
    console.log(`❌ Error:  ${err?.message}`);
}

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
})

app.post('/student', async(req, res) => {
    const { fullName, email, password, mobile } = req.body;

    const student = new Student({
        fullName,
        email,
        password,
        mobile
    })

    const savedStudent = await student.save();

    res.json({
        success: true,
        message: "Student created successfully",
        data: savedStudent
    })
})

app.get('/students', async(req, res) => {
    const students = await Student.find();

    res.json({
        success: true,
        message: "Students fetched successfully",
        data: students
    })
})

app.get('/student', async (req, res) => {
    const { email } = req.query;
  
    const student = await Student.findOne({ email });
  
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
        data: null
      });
    }
  
    res.json({
      success: true,
      message: "Student found successfully",
      data: student
    });
});  

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} 🚀`);
});
