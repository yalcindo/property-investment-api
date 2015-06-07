var koa = require("koa");
var koaPg = require("koa-pg");
var app = koa();


app.use(koaPg('postgres://yalcindo:password@localhost:5432/postgres'))

app.use(function *(next) {
    // Here we have access to this.pg.db.client which is client returned from pg.connect().
    var result = yield this.pg.db.client.query_('SELECT now()')
    console.log('result:', result)

    this.body = result.rows[0].now.toISOString()
});
app.listen(3001);
console.log("App Listens on 3001");