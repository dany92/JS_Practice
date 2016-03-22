
(function (global){
	var Codify = function(message, codetype) {
		return new Codify.init(message, codetype);
	}

	//like the actual methods that are part of the class in shape of properties
	Codify.prototype = {
		cookup: function(){
			console.log(getCode[this.codetype](this.message));
			return this;
		},
		setLang: function(lang){
			this.codetype = lang;
			return this;
		}

	}

	//like constructor
	Codify.init = function(message, codetype){
		var self = this;
		self.message = message || '';
		self.codetype = codetype || 'kong';
	}

	//private variables & objects
	var getCode = {
		kong: function(message){
				var code = "";
				for (var i = 0; i < message.length; i++){
					code +=  String.fromCharCode(message.charCodeAt(i)+1);
				}
				return code;
			},

		bong: function(message){
				var code = "";
				for (var i = 0; i < message.length; i++){
					code += String.fromCharCode(message.charCodeAt(i)+2);
				}
				return code;
			}
	}
	
	Codify.init.prototype = Codify.prototype;
	global.Codify = global.C$ = Codify;
}(window));