const axios=require('axios')
class BlessingService {
    constructor(gptService) {
      this.chatGptService = gptService;
    }
    blessings=[]
    prompt=""
    i=0
  
  async getBlessing(prompt){
  // this.prompt=prompt
  
  //   // GET endpoint to fetch blessings
  //     try {
  //  console.log("pppppppp")
  //       const response = await axios.post('https://api.openai.com/v1/chat/completions', {
  //         prompt: this.prompt,
  //         max_tokens: 300, 
  //         n: 3 
  //       }, {
  //         headers: {
  //           'Authorization': 'Bearer API_KEY',
  //         }
  //       });
    
  //       // Extract the generated blessings from the API response
  //       console.log("ooooooooo")
  //        response.data.choices.map(choice => {
  //         this.blessings.push(choice.text.trim())
  //       });
  //        this.i=0
  //       return blessings[0];
  //     } catch (error) {
  //       console.error('Error:', error.message);
  //       // res.status(500).send('Internal Server Error');
  //     }
    
  //     // this.blessings=["pp","ll","oo"]
      
    

  try {
    const apiKey = 'apikey';
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: "get a blessing" },
      ],
    };

    const response = await axios.post(endpoint, data, { headers });

    // Extract the generated completion from the response
    // const completion = response.data.choices[0].message.content;
console.log("yessssss")
console.log(completion)
    return "completion";
  } catch (error) {
    // Handle errors
    console.error('Errorttttttttttt:',  error.message);
    throw error;
  }
}

// Example usage

  }



 
  getAnotherBlessing=()=>{
    
    if(this.i<3){
      return this.blessings[this.i++];
    }
   return this.getBlessing(this.prompt);

  }
  
  
  module.exports = BlessingService;
