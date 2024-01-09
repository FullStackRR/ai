class BlessingService {
    constructor(gptService) {
      this.chatGptService = gptService;
    }
    blessings=[]
    prompt=""
    i=0
  
  async getBlessing(prompt){
  this.prompt=prompt
  
    // GET endpoint to fetch blessings
      try {
   
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          prompt: this.prompt,
          max_tokens: 300, 
          n: 3 
        }, {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
          }
        });
    
        // Extract the generated blessings from the API response
         response.data.choices.map(choice => {
          this.blessings.push(choice.text.trim())
        });
         this.i=0
        return blessings[0];
      } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
      }
    
      // this.blessings=["pp","ll","oo"]
      return this.blessings[i++]
    
  }

 
  getAnotherBlessing=()=>{
    
    if(this.i<3){
      return this.blessings[this.i++];
    }
  // return this.getBlessing(this.prompt);
  return "ops"
  }
  }
  
  module.exports = BlessingService;