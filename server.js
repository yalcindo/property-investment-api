var koa = require("koa");
var koaPg = require("koa-pg");
var router = require("koa-router");
var body = require("koa-body");
var app = koa();


app.use(koaPg('postgres://yalcindo:password@localhost:5432/'))
// // 
// app.use(function *(next) {
//     // Here we have access to this.pg.db.client which is client returned from pg.connect().
//     var result = yield this.pg.db.client.query_('SELECT now()');
//     console.log('result:', result)

//     // this.body = result.rows[0].now.toISOString()
// });
/* body parsing */
app.use(body({
	jsonLimit: "5mb",
	multipart: true,
	formidable: {
		maxFieldsSize: 5 * 1024 * 1024
	}
}));
app.use(router(app));
// app.get("/",function*(){
// 	this.body = "yes";
// })
// include routes
require("./routes/users.js")(app);
require("./routes/properties.js")(app);
var port = process.env.PORT || 3001;
app.listen(port);
console.log("App Listens on ",port);