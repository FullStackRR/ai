const axios=require('axios')
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
   console.log("pppppppp")
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          prompt: this.prompt,
          max_tokens: 300, 
          n: 3 
        }, {
          headers: {
            'Authorization': 'Bearer API_KEY',
          }
        });
    
        // Extract the generated blessings from the API response
        console.log("ooooooooo")
         response.data.choices.map(choice => {
          this.blessings.push(choice.text.trim())
        });
         this.i=0
        return blessings[0];
      } catch (error) {
        console.error('Error:', error.message);
        // res.status(500).send('Internal Server Error');
      }
    
      // this.blessings=["pp","ll","oo"]
      
    
  }

 
  getAnotherBlessing=()=>{
    
    if(this.i<3){
      return this.blessings[this.i++];
    }
   return this.getBlessing(this.prompt);

  }
  }
  
  module.exports = BlessingService;
