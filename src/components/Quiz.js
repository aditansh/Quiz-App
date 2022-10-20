import axios from 'axios';
import React, {useState, useEffect} from 'react'

function Quiz() {
    let [questions, setQuestions] = useState([]);
    const fetch = async() => {
        const res = await fetch("//localhost:8000");
        const data = await res.json();
        setQuestions(data);
        console.log(data);
    }

    useEffect(()=>{
        fetch();
    },[]);
  return (
    <>
    {console.log(Quiz)}
    </>
  )
}
export default Quiz



// export const Quiz=[
//     {
//         "type": 'text',
//         "question": `Who won Ballon d'Or in 2022?`,
//         "answer": 'Benzema'
//     },
//     {
//         "type": 'text',
//         "question": 'Where is FIFA World Cup 2022 being held?',
//         "answer": 'Qatar'
//     },
//     {
//         "type": 'text',
//         "question": 'Who is the president of Codechef-VIT?',
//         "answer": 'Thaman'
//     },
//     {
//         "type": 'single',
//         "question": 'What is the symbol of silver?',
//         "options": ["Fe","Pt","Au","Ag"],
//         "answer": "Ag"
//     },
//     {
//         "type": 'single',
//         "question": 'What is the capital of India?',
//         "options": ["New Delhi","Kolkata","Chennai","Mumbai"],
//         "answer": "New Delhi"
//     },
//     {
//         "type": 'single',
//         "question": 'Which is a fastfood chain?',
//         "options": ["Limra","Chick-In","McDonalds","DC"],
//         "answer": "McDonalds"
//     },
//     {
        
//         "type": 'single',
//         "question": 'Choose the odd one out',
//         "options": ["HTML","CSS","JavaScript","Physics"],
//         "answer": "Physics"
//     },
//     {
        
//         "type": 'multiple',
//         "question": 'Where is VIT?',
//         "options": ["Vellore","Chennai","Amravati","Bhopal"],
//         "answer": ["Amravati","Bhopal","Chennai","Vellore"]
//     },
//     {
        
//         "type": 'multiple',
//         "question": 'Which of these countries are in Asia?',
//         "options": ["India","USA","Nepal","Bhutan"],
//         "answer": ["Bhutan","India","Nepal"]
//     },
//     {
        
//         "type": 'multiple',
//         "question": 'A random multiple choice question',
//         "options": ["Option 1","The correct answer","Also the correct answer","The wrong answer"],
//         "answer": ["Also the correct answer","The correct answer"]
//     }
// ]