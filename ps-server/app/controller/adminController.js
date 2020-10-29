const Controller = require('egg').Controller;
const fs = require('fs');
const path  = require("path");
class adminController extends Controller{
    async upFile() {
        const file = this.ctx.request.files[0];
        const toFileName = '/public/upFile/' + Date.now()+ file.filename;
        let to = path.dirname(__dirname)+toFileName;
        await fs.copyFileSync(file.filepath, to);
        await fs.unlinkSync(file.filepath);
        const newUrl = "http://localhost:8003"+toFileName;
        this.ctx.response.body = newUrl; 
    }
}
module.exports = adminController