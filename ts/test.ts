class Message {
	m: string;
	constructor(m: string) {
		this.m = m;
	}

	getM() {
		return this.m;
	}
}

var msg = new Message("hey")
alert(msg.getM());