const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

const chatGptApiKey = process.env.OPENAI_API_KEY; // Replace with your OpenAI GPT-3 API key

app.get('/getBlessings', async (req, res) => {
  try {
    // Call ChatGPT to get three blessings
    console.log(req)
    console.log(";;;;;;;;;;;;;;;;;;;")

const { enviorment, length,type,target } = req.query
console.log(length)




    const prompt=generatPrompt(enviorment,type,length,target)
    console.log(prompt)
    const blessings = await getChatGptBlessings(prompt);

    // Save blessings in an array (you can store it in a database if needed)
    const blessingsArray = blessings.data.choices.map(choice => choice.text);

    // Return the first blessing
    const firstBlessing = blessingsArray[0];

    res.json({ blessing: firstBlessing });
  } catch (error) {
    console.error(error.message+"oooooooooooooooops");
    // res.status(500).json({ error: 'Internal Server Error' });
  }
});
function generatPrompt(enviorment,type,length,target){
  return `Generate a ${enviorment} ${length} blessing for a ${target}`
  }
async function getChatGptBlessings(prompt) {
  // const prompt = 'Generate a blessing.';
  const maxTokens = 50; // You can adjust this based on your preference

  const response = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt,
      max_tokens: maxTokens,
      n: 3, // Generate three completions
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${chatGptApiKey}`,
      },
    }
  );

  return response.data;
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
