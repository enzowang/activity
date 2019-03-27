var stuModal = require('./../modal/userModal.js');

module.exports = {
	checkAccount: function (request,reponse) {
        stuModal.checkAccount(request.body,function (err,data) {
        	if(data.length > 0){
        		reponse.send({code:200,data:data});
        	}else{
        		reponse.send({code:400,data:"logfail"});
        	}
        });
    }
}