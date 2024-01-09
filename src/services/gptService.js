const { Configuration, OpenAIApi } = require("openai"); 
const readlineSync = require("readline-sync"); 
require("dotenv").config(); 
class ChatGpt{
    
 APIcall = async (message) => { 
    
const newConfig = new Configuration({ 
	apiKey: process.env.OPENAI_SECRET_KEY 
}); 
    const openai = new OpenAIApi(newConfig); 
    const chatHistory = []; 
	const user_input = message
	const messageList = chatHistory.map(([input_text, completion_text]) => ({ 
	role: "user" === input_text ? "ChatGPT" : "user", 
	content: input_text 
	})); 
	messageList.push({ role: "user", content: user_input }); 

	try { 
	const GPTOutput = await openai.createChatCompletion({ 
		model: "gpt-3.5-turbo", 
		messages: messageList, 
	}); 

	const output_text = GPTOutput.data.choices[0].message.content; 
	console.log(output_text);
	// return output_text

	chatHistory.push([user_input, output_text]); 
    return output_text
	} catch (err) { 
	if (err.response) { 
		console.log(err.response.status); 
		console.log(err.response.data); 
	} else { 
		console.log(err.message); 
	} 
	} 

}; 

}
module.exports=ChatGpt
