const data = [
    {
        id : 1,
        title : "ChatGPT4.0",
        body : "ChatGPT Ai chat!",
        updated : "today"
    },
    {
        id : 2,
        title : "ClaudAI",
        body : "CladuAI Ai chat!",
        updated : "today"
    },
    {
        id : 3,
        title : "Gemini",
        body : "Gemini Ai chat!",
        updated : "today"
    }
];


const result = data.find(note => note.id === 2);


console.log(result);