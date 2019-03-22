var activityModal = require('./../modal/activityModal.js');

module.exports = {
		getActivityList: function (request,reponse) {
			activityModal.getActivityList(request.body,request.query,function (err,data) {

	            reponse.send(data);
	        });
	    },
	    saveActivity: function (request,reponse) {
			activityModal.saveActivity(request.body,request.query,function (err,data) {
	            reponse.send(data);
	        });
	    }
};