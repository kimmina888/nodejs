var expressErrorHandler = require('express-error-handler');
var errorHandler = expressErrorHandler({
static: {
'404': './public/404.html'
}
});
app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );