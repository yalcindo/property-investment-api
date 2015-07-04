module.exports = function(app) {

	app.get("/property/:property_id",function*() {
		var id = this.params.property_id;
		var result = yield this.pg.db.client.query_('SELECT * from properties WHERE id = ' + id);
		this.body = result;
	});
	app.post("/property",function*() {
		var propertyData = this.request.body;

		console.log(propertyData);
		var name = propertyData.name;
		var sqlString = "INSERT INTO properties (name,archived) VALUES(' "  + name + "' , false)";
		console.log("sqlString",sqlString);
		var result = yield this.pg.db.client.query_(sqlString);
		this.body = result;
	});
	
}