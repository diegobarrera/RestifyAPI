import * as restify from 'restify';
import * as routes from "./routes";

//config
export const server = restify.createServer({
    name: 'myAPI',
    version: '1.0.0'
});

//parsing settings
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(restify.pre.sanitizePath());

//call the routes.ts file for available REST API routes
console.log('setting routes...');
routes.setRoutes(server);

//when running the app will listen locally to port 3000
server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
})