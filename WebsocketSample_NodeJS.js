var websocketClient = require('websocket').client;
var client = new websocketClient();
var count = 0;

var endpoint = "ws://nimblewebstream.lisuns.com:4575/";


var accesskey = "bdc342f4-44a6-4a0c-b96d-c8eb0e584a57";
var output;


client.on('connectFailed', function (error) {
	console.log('Connection Error: ' + error.toString());
});

client.on('connect', function (connection) {
	var AuthConnect = false;
	var callDone = false;

	console.log('Client Connected!');
	Authenticate();
	connection.on('error', function (error) {
		console.log('Connection Error: ' + error.toString());
	});
	connection.on('close', function () {
		console.log('echo-protocol Connection Closed');
	});
	connection.on('message', function (message) {

		setTimeout(doClose, 3600000);
		if (message.type === 'utf8' && message.utf8Data !== '{"MessageType":"Echo"}') {

			AuthConnect = true;

			writeToScreen(message);
			if (callDone == false) {
				setInterval(first, 10000);
				setInterval(second, 60000);
				setInterval(third, 900000);

				callDone = true;
			}
		}
	});
	function first() {
		functionCall1();
	}
	function second() {
		functionCall2();
	}
	function third() {
		functionCall3();
	}
	function doClose() {
		connection.close();
	}

	function callAPI(request) {
		console.log("request: *****" + request + "*****" + (count++));
		if (connection.connected) {
			connection.send(request);
		}
	}
	function Authenticate() {

		if (connection.connected) {
			strMessage = '{"MessageType":"Authenticate","Password":"' + accesskey + '"}'
			callAPI(strMessage);
		}
	}
	function functionCall1() {	
		GetLastQuoteOptionChain1();							
	}
	function functionCall2() {
		GetLastQuoteOptionChain2();
	}
	function functionCall3() {
		GetLastQuoteOptionChain3();
	}
	functionCall1();
	functionCall2();
	functionCall3();
	
	function GetLastQuoteOptionChain1() {


		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "NIFTY";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BANKNIFTY";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}
	}
	function GetLastQuoteOptionChain2() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "AXISBANK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

	}
	function GetLastQuoteOptionChain3() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ACC";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}
		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ADANIENT";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}
		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ADANIPORTS";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}
		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "AMARAJABAT";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}




		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "AMBUJACEM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "APOLLOHOSP";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "APOLLOTYRE";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ASHOKLEY";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ASIANPAINT";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "AUROPHARMA";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}



		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BAJAJ-AUTO";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BAJAJFINSV";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BAJFINANCE";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BALKRISIND";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BANDHANBNK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BANKBARODA";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}


		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BATAINDIA";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BEL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BERGEPAINT";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BHARATFORG";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BHARTIARTL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BHEL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BIOCON";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BOSCHLTD";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BPCL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "BRITANNIA";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "CADILAHC";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "CANBK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "CHOLAFIN";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "CIPLA";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "COALINDIA";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "COFORGE";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "COLPAL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "CONCOR";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "CUMMINSIND";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "DABUR";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "DIVISLAB";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "DLF";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "DRREDDY";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "EICHERMOT";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ESCORTS";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "EXIDEIND";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "FEDERALBNK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "GAIL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "GLENMARK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "GMRINFRA";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "GODREJCP";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "GODREJPROP";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "GRASIM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "HAVELLS";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "HCLTECH";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "HDFC";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}
		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "HDFCBANK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "HDFCLIFE";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}


		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "HEROMOTOCO";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "HINDALCO";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "HINDPETRO";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "HINDUNILVR";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "IBULHSGFIN";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ICICIBANK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}
		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ICICIPRULI";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "IDEA";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}


		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "IDFCFIRSTB";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "IGL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "INDIGO";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "INDUSINDBK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "INFRATEL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "INFY";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "IOC";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ITC";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "JINDALSTEL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "JSWSTEEL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "JUBLFOOD";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "KOTAKBANK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "L&TFH";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "LICHSGFIN";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "LT";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "LUPIN";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "M&M";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "M&MFIN";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MANAPPURAM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MARICO";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MARUTI";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MCDOWELL-N";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MFSL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MGL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MINDTREE";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MOTHERSUMI";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MRF";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "MUTHOOTFIN";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "NATIONALUM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "NAUKRI";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "NESTLEIND";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}


		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "NMDC";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "NTPC";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ONGC";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "PAGEIND";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "PEL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "PETRONET";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "PFC";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "PIDILITIND";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "PNB";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "POWERGRID";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "PVR";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "RAMCOCEM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "RBLBANK";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "RECLTD";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "RELIANCE";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "SAIL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "SBILIFE";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "SBIN";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "SHREECEM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "SIEMENS";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "SRF";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "SRTRANSFIN";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "SUNPHARMA";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "SUNTV";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TATACHEM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TATACONSUM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TATAMOTORS";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TATAPOWER";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TATASTEEL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TCS";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TECHM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TITAN";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TORNTPHARM";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TORNTPOWER";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "TVSMOTOR";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "UBL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ULTRACEMCO";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "UPL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "VEDL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "VOLTAS";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "WIPRO";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

		if (connection.connected) {
			var ExchangeName = "NFO";
			var Product = "ZEEL";
			request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"' + Product + '"}';
			callAPI(request);
		}

	}
});
function writeToScreen(message) {
	console.log(message.utf8Data);
}


client.connect(endpoint);
