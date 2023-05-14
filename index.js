import express from "express";
import mongoose from 'mongoose';
import dotennv from 'dotenv';

import Student from './models/Students.js'
import { createCache, getCache, flushCache } from './util/cache.js';

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
    flushCache();
    res.status(200).json({ status: 'OK' });
})

app.post('/student', async (req, res) => {
    const { fullName, email, password, mobile } = req.body;

    const student = new Student({
        fullName,
        email,
        password,
        mobile
    })

    const savedStudent = await student.save();
    flushCache();

    res.json({
        success: true,
        message: "Student created successfully",
        data: savedStudent
    })
})

app.get('/students', async (req, res) => {
    let students = [];

    const studentsFromRedis = await getCache('students');
    if (studentsFromRedis) {
        students = studentsFromRedis;
    }
    else {
        students = await Student.find();
        await createCache('students', students);
    }

    res.json({
        success: true,
        message: "Students fetched successfully",
        data: students
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} 🚀`);
});
