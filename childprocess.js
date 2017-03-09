const debug = {
	level: "debug"
};

const 
	Logger =				require('tracer').colorConsole({level: debug.level}),
	ChildProcessExec =		require('child_process').exec,
	Express =				require('express'),
	ExpressHandlebars =		require('express-handlebars'),
	_ = null;

var express = Express();

Logger.info("register template engine for 'handlebars' extension !!");
express.engine('handlebars', ExpressHandlebars({defaultLayout: 'main'}));

Logger.info("set 'handlebars' template engine !!");
express.set('view engine', 'handlebars');

Logger.info("set GET '/my-bat' route !!");
express.get('/my-bat', function (req, res) {
	Logger.info("call ChildProcessExec('my.bat') !!");
	ChildProcessExec('my.bat', (err, stdout, stderr) => {
		if (err) {  
			Logger.error("err - '%s'", err);  
			res.send({err: err});
			return;  
		}  
		Logger.info("stdout - '%s'", stdout);
		res.send({stdout : stdout});
	});  
});

Logger.info("listen port 3000 !!");
express.listen(3000);

