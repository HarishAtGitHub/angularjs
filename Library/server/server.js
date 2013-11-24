var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.resolve('..') + '/client/')); //without this statement the folder slient will not be open to 
                                                          //sharing static js files which are part of html
app.get('/books', function(req, res) {
                     res.sendfile(path.resolve('..') + '/client/html/LibraryHome.html');
                  });
app.listen(8888);
