const debug = {
	level: "debug"
};

const 
	Logger =				require('tracer').colorConsole({level: debug.level}),
	ChildProcessExec =		require('child_process').exec,
	_ = null;


Logger.info("call ChildProcessExec('my.bat') !!");
ChildProcessExec('my.bat', (err, stdout, stderr) => {  
  if (err) {  
    Logger.error("err - '%s'", err);  
    return;  
  }  
  Logger.info("stdout - '%s'", stdout);  
});  