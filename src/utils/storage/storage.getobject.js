//@flow
//$FlowFixMe
Storage.prototype.getObject = function(key) {

  	try {

	const value:Object = this.getItem(key);
	const ttl:Object = this.getItem(key + "~ttl");

	if(ttl) {

		if(ttl<new Date().getTime()) {

  		this.removeItem(key);
  		this.removeItem(key + "~ttl");

  		return false;
		}

	}

	return value && JSON.parse(value);
  	} catch(e){
  	  new Error(e);
  	  return key;
	}
};
