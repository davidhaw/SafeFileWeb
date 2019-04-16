function unicode_to_ascii(message) {

    var messageArr=[];
    for (var n = 0, l = message.length; n < l; n ++) {

		var uni = message.fromCharCode(n);
        messageArr.push(uni);
        
	}
	return messageArr;
}