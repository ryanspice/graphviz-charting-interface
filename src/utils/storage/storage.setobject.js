//@flow
//$FlowFixMe
Storage.prototype.setObject = function(key:string, value:Object, expirationInMin:number) {

	this.setItem(key, JSON.stringify(value));

	if(expirationInMin) {

		const time = new Date().getTime() + (60000 * expirationInMin);
		this.setItem(key + "~ttl", time);
	}

};
