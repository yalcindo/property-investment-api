module.exports = function(app) {

	app.get("/user",function*() {
		var result = yield this.pg.db.client.query_('SELECT * from users WHERE id=2');
		this.body = result;
	});
	app.post("/user",function*() {

		var result = yield this.pg.db.client.query_("INSERT INTO users (id,name,archived) VALUES(2,'yalcin',false)");
		this.body = result;
	});
	
}