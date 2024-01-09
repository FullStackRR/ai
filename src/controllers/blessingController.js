class BlessingController {
    constructor(blessingService) {
      this.blessingService = blessingService;
    }
  
     async getBlessing(req, res) {
      let length=req.query.length
      let type=req.query.type
      let enviorment=req.query.enviorment
      let target=req.query.target
      let prompt=`Generate a${length} ${type} in ${enviorment} enviorment for a ${target}`
      const blessing =  await this.blessingService.getBlessing(prompt);
      res.json(blessing);
    }
    async getAnotherBlessing(req, res) {
      const blessing =  await this.blessingService.getAnotherBlessing();
      res.json(blessing);
    }
    
  }
  
  module.exports = BlessingController;