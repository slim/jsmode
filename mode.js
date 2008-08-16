function Mode(setup) {
	if (!Mode.prototype.modes) Mode.prototype.modes = [];
	this.index = Mode.prototype.modes.length;
	Mode.prototype.modes.push(this);

	this.original_enter = setup.enter;
	this.enter = function() {
		this.exitAll();
		return this.original_enter();
	}

	this.exit = setup.exit;
	Mode.prototype.exitAll = function() {
		var modes = Mode.prototype.modes; 
		for (i in modes) {
			modes[i].exit();
		}
	}
}
