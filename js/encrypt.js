function ascii_to_unicode(message) {
	var messageArr = [];
  for (var n = 0, l = message.length; n < l; n ++) {

		var uni = message.charCodeAt(n);
    messageArr.push(uni);
    
	}
	return messageArr;
}


function encrypt(message, mult) {

    // Convert message into UTF-16 Code Points
    messageArray = ascii_to_unicode(message);

    for (i=0; i < messageArray.length; i++) {

        messageArray[i] = messageArray[i] * mult;

    }

    console.log(messageArray);
    return messageArray;
}

function encryptData () {

  message = document.getElementById("txt_message").value;
  mult_fact = document.getElementById("txt_mult").value;

  var encryptedMessage = encrypt(message, mult_fact);
  document.getElementById("encryptedMessage").innerHTML = "Encrypted Message: " + encryptedMessage;

}