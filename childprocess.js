const debug = {
	level: "debug"
};

const 
	Logger =				require('tracer').colorConsole({level: debug.level}),
	Util =					require('util'),
	ChildProcessExec =		require('child_process').exec,
	ChildProcessExecFile =	require('child_process').execFile,
	Express =				require('express'),
	//ExpressHandlebars =		require('express-handlebars'),
	_ = null;

var express = Express();

//Logger.info("register template engine for 'handlebars' extension !!");
//express.engine('handlebars', ExpressHandlebars({defaultLayout: 'main'}));
//
//Logger.info("set 'handlebars' template engine !!");
//express.set('view engine', 'handlebars');

Logger.info("set GET '/my-bat' route !!");
express.get('/my-bat', function (req, res) {
	
	var vclPath = req.query['vclpath'];
	Logger.info("'/my-bat' : vclpath - '%s'", vclPath);
	
	var outputPath = req.query['outputpath'];
	Logger.info("'/my-bat' : outputpath - '%s'", outputPath);
	
	//var param1 = req.params("param1");
	//Logger.info("'/my-bat' : param1 - %s", param1);
	Logger.info("'/my-bat' : params - {%j}", req.params);
	
	Logger.info("'/my-bat' : query - {%j}", req.query);

	Logger.info("'/my-bat' : body - {%j}", req.body);

	Logger.info("'/my-bat' : header - {%j}", req.header);

	//Logger.info("'/my-bat' : call ChildProcessExec('my.bat') !!");
	//ChildProcessExec('my.bat', [], (err, stdout, stderr) => {
	Logger.info("'/my-bat' : call ChildProcessExecFile('my.bat') !!");	
	//ChildProcessExecFile('my.bat', [Util.format("-vclpath='%s'", vclPath), Util.format("-outputpath='%s'", outputPath)], (err, stdout, stderr) => {
		ChildProcessExecFile('node', ["-v"], (err, stdout, stderr) => {
		if (err) {  
			Logger.error("'/my-bat' : err - '%s'", err);  
			res.send({err: err});
			return;  
		}  
		Logger.info("'/my-bat' : stdout - '%s'", stdout);
		res.send({stdout : stdout});
	});  
});

Logger.info("listen port 3000 !!");
express.listen(3000);

