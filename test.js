// test script to test talk2db module

const NaturalLanguageToSQL = require("talk2db").NaturalLanguageToSQL;


const dbConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "9050",
    database: "demo"
};

const openaiKey = "OPEN_AI_KEY";

const modelName = "gpt-4o";
// gpt-3.5-turbo

const nlToSQL = new NaturalLanguageToSQL(dbConfig, openaiKey, modelName); 

nlToSQL.query('Please tell me address of user with highest claim amount')
    .then(result => console.log('Query Result:', result))
    .catch(error => console.error('Error executing query:', error));

