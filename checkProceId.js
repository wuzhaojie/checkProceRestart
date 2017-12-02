var exec = require('child_process').exec;
var DingTalkPid = 0;
function getProcPid() {
	exec('tasklist | findstr "DingTalk.exe"', function (err, stdout) {
		if (err) {
			console.log(err);
		} else {
			stdout.trim().split(/\n+/).filter(function (line) {
				var p = line.trim().split(/\s+/);
				procName = p[0];
				procNamePid = p[1];
				if (DingTalkPid) {
					if (procNamePid != DingTalkPid) {
						console.log("procPid变了 ");
						console.log("procNamePid:", procNamePid);
						console.log("DingTalkPid:", DingTalkPid);
					}
				} else {
					DingTalkPid = procNamePid;
					console.log("first get proc id:" + procName + ":" + DingTalkPid);
				}
			}
			);
		}
	});
}
setInterval(getProcPid,1000);