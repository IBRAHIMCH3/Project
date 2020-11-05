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
		if (message.type === 'utf8' && message.utf8Data !=='{"MessageType":"Echo"}') {
			
			AuthConnect = true;

			//console.log("Received: '" + message.utf8Data + "'");
			writeToScreen(message);
			if (callDone == false) {
				setInterval(first,10000);
				//setImmediate(first);
				//setInterval(second, 40000);  


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
		//SubscribeRealtime();					//GFDL : Subscribes to realtime data (server will push new data whenever available)
		//SubscribeSnapshot();					//GFDL : Subscribes to minute snapshot data (server will push new data whenever available)

		//GetLastQuote();						//GFDL : Returns LastTradePrice of Single Symbol (detailed)
		//GetLastQuoteShort();					//GFDL : Returns LastTradePrice of Single Symbol (short)
		//GetLastQuoteShortWithClose();			//GFDL : Returns LastTradePrice of Single Symbol (short) with Close of Previous Day
		//GetLastQuoteArray();					//GFDL : Returns LastTradePrice of multiple Symbols – max 25 in single call (detailed)
		//GetLastQuoteArrayShort();				//GFDL : Returns LastTradePrice of multiple Symbols – max 25 in single call (short)
		//GetLastQuoteArrayShortWithClose();	//GFDL : Returns LastTradePrice of multiple Symbols – max 25 in single call (short) with Previous Close

		//GetSnapshot();						//GFDL : Returns latest Snapshot Data of multiple Symbols – max 25 in single call
		//GetHistory();							//GFDL : Returns historical data (Tick / Minute / EOD)

		//GetExchanges();						//GFDL : Returns array of available exchanges configured for API Key

		//GetInstrumentsOnSearch();				//GFDL : Returns array of max. 20 instruments by selected exchange and 'search string'
		//GetInstruments();						//GFDL : Returns array of instruments by selected exchange 

		//GetInstrumentTypes();					//GFDL : Returns list of Instrument Types (e.g. FUTIDX, FUTSTK, etc.)
		//GetProducts();						//GFDL : Returns list of Products (e.g. NIFTY, BANKNIFTY, GAIL, etc.)
		//GetExpiryDates();						//GFDL : Returns array of Expiry Dates (e.g. 25JUN2020, 30JUL2020, etc.)
		//GetOptionTypes();						//GFDL : Returns list of Option Types (e.g. CE, PE, etc.)
		//GetStrikePrices();					//GFDL : Returns list of Strike Prices (e.g. 10000, 11000, 75.5, etc.)

		//GetServerInfo();						//GFDL : Returns the server endpoint where user is connected
		//GetLimitation();						//GFDL : Returns user account information (functions allowed, Exchanges allowed, symbol limit, etc.)

		//GetMarketMessages();					//GFDL : Returns array of last messages (Market Messages) related to selected exchange
		//GetExchangeMessages();				//GFDL : Returns array of last messages (Exchange Messages) related to selected exchange

		GetLastQuoteOptionChain1();			//GFDL : Returns OptionChain data in realtime
		//GetExchangeSnapshot();				//GFDL : Returns entire Exchange Snapshot in realtime
	}
	function functionCall2() {
		GetLastQuoteOptionChain2();
	}
	functionCall1();
	//functionCall2();

	function SubscribeRealtime() {
		if (connection.connected) {
			var ExchangeName = "NFO";				//GFDL : Supported values : NSE (stocks), NSE_IDX (Indices), NFO (F&O), MCX & CDS (Currency)
			var InstIdentifier = "NIFTY-I";			//GFDL : NIFTY-I always represents current month Futures. 
			request = '{"MessageType":"SubscribeRealtime","Exchange":"' + ExchangeName + '","InstrumentIdentifier":"' + InstIdentifier + '"}';
			callAPI(request);
		}
	}


	function SubscribeSnapshot() {
		if (connection.connected) {
			var ExchangeName = "NFO";                   //GFDL : Supported Values : NFO, NSE, NSE_IDX, CDS, MCX. Mandatory Parameter
			var InstIdentifier = "NIFTY-I";
			var Periodicity = "MINUTE";                 //GFDL : Supported values are : Minute, Hour
			var Period = 1;                             //GFDL : Supported values are : 1,2,5,10,15,30 (for Minute Periodicity ONLY)
			var Unsubscribe = "false";               	//GFDL : To stop data subscription for this symbol, send this value as "true"

			request = '{"MessageType":"SubscribeSnapshot","Exchange":"' + ExchangeName + '","InstrumentIdentifier":"' + InstIdentifier + '","Periodicity":"' + Periodicity + '","Period":' + Period + ',"Unsubscribe":"' + Unsubscribe + '"}';
			callAPI(request);
		}
	}



	function GetLastQuote() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			var InstIdentifier = "NIFTY-I";
			var isShortIdentifier = "false";         	//GFDL : When using contractwise symbol like NIFTY20JULFUT, 
			//this argument must be sent with value "true" 

			request = '{"MessageType":"GetLastQuote","Exchange":"' + ExchangeName + '","isShortIdentifier":"' + isShortIdentifier + '","InstrumentIdentifier":"' + InstIdentifier + '"}';
			callAPI(request);
		}
	}

	function GetLastQuoteShort() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			var InstIdentifier = "NIFTY-I";
			var isShortIdentifier = "false";         	//GFDL : When using contractwise symbol like NIFTY20JULFUT, 
			//this argument must be sent with value "true" 

			request = '{"MessageType":"GetLastQuoteShort","Exchange":"' + ExchangeName + '","isShortIdentifier":"' + isShortIdentifier + '","InstrumentIdentifier":"' + InstIdentifier + '"}';
			callAPI(request);
		}
	}

	function GetLastQuoteShortWithClose() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			var InstIdentifier = "NIFTY20JULFUT";		//GFDL : If this contract is expired, please use other contract
			var isShortIdentifier = "true";         	//GFDL : When using contractwise symbol like NIFTY20JULFUT, 
			//this argument must be sent with value "true" 

			request = '{"MessageType":"GetLastQuoteShortWithClose","Exchange":"' + ExchangeName + '","isShortIdentifier":"' + isShortIdentifier + '","InstrumentIdentifier":"' + InstIdentifier + '"}';
			callAPI(request);
		}
	}



	function GetLastQuoteArray() {
		if (connection.connected) {
			var ExchangeName = "NSE";
			var InstIdentifier = '[{"Value":"TATAPOWER"}, {"Value":"RELIANCE"}]';
			var isShortIdentifiers = "false"         				//GFDL : When using contractwise symbol like NIFTY20JULFUT, 
			//this argument must be sent with value "true" 

			request = '{"MessageType":"GetLastQuoteArray","Exchange":"' + ExchangeName + '","isShortIdentifiers":' + isShortIdentifiers + '","InstrumentIdentifiers":' + InstIdentifier + '}';
			callAPI(request);
		}
	}

	function GetLastQuoteArrayShort() {
		if (connection.connected) {
			var ExchangeName = "NSE";
			var InstIdentifier = '[{"Value":"TATAPOWER"}, {"Value":"RELIANCE"}]';
			var isShortIdentifiers = "false"         				//GFDL : When using contractwise symbol like NIFTY20JULFUT, 
			//this argument must be sent with value "true" 

			request = '{"MessageType":"GetLastQuoteArrayShort","Exchange":"' + ExchangeName + '","isShortIdentifiers":' + isShortIdentifiers + '","InstrumentIdentifiers":' + InstIdentifier + '}';
			callAPI(request);
		}
	}

	function GetLastQuoteArrayShortWithClose() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			var InstIdentifier = '[{"Value":"NIFTY20JULFUT"}, {"Value":"BANKNIFTY20JULFUT"}]';	//GFDL : If this contract is expired, please use other contract
			var isShortIdentifiers = "true"         				//GFDL : When using contractwise symbol like NIFTY20JULFUT, 
			//this argument must be sent with value "true" 

			request = '{"MessageType":"GetLastQuoteArrayShortWithClose","Exchange":"' + ExchangeName + '","isShortIdentifiers":' + isShortIdentifiers + '","InstrumentIdentifiers":' + InstIdentifier + '}';
			callAPI(request);
		}
	}



	function GetSnapshot() {
		if (connection.connected) {
			var ExchangeName = "NSE";						//GFDL : 	Supported Values : NFO, NSE, NSE_IDX, CDS, MCX. Mandatory Parameter

			var InstIdentifier = '[{"Value":"TATAPOWER"},{"Value":"RELIANCE"}]';

			var Periodicity = "MINUTE";						//GFDL : 	Supported Values : Minute, Hour
			var Period = 1;									//GFDL : 	Supported Values : 1,2,3,5,10,15,20,30
			var isShortIdentifiers = "false";				//GFDL : 	When using contractwise symbol like NIFTY20JULFUT, 
			//			this argument must be sent with value "true" 

			request = '{"MessageType":"GetSnapshot","Exchange":"' + ExchangeName + '","Periodicity":"' + Periodicity + '","Period":' + Period + ',"isShortIdentifiers":' + isShortIdentifiers + ',"InstrumentIdentifiers":' + InstIdentifier + '}';
			callAPI(request);
		}
	}


	function GetHistory() {
		if (connection.connected) {
			var ExchangeName = "NFO";						//GFDL : Supported Values : NFO, NSE, NSE_IDX, CDS, MCX. Mandatory Parameter
			var InstIdentifier = "NIFTY-I";
			var Periodicity = "MINUTE";						//GFDL : Supported values are : Tick, Minute, Hour, Day, Week, Month
			var Period = 1;									//GFDL : Supported values : 1,2,3,4,5,10,12,15,20,30
			var Max = 10;									//Specify this argument to control the number of records returned.
			//For example, send Max:10 to request only latest 10 records
			var isShortIdentifier = "false";				//GFDL : When using contractwise symbol like NIFTY20JULFUT, 
			//		 this argument must be sent with value "true" 
			//Below code will set Start Time of request to 10 hours before current time
			//This may not work on weekends, change value suitably											
			var From = new Date().getTime() / 1000.0 - 36000;	//Start time of the History as per Epoch time (1st January 1970)
			//Visit https://www.epochconverter.com/ to get formulae to convert human readable 
			//time to Epoch and vice versa (scroll to end of their home page)

			//If you need entire possible history, send From value as 0

			var to = 0;                              		//End time of the History as per Epoch. 
			//To request data till latest moment, skip this argument or 
			//send time in Future (e.g. current time + 1 hour)

			//Given below are various usecases of GetHistory function calls. Uncomment and use the one as per requirement

			//below request will fetch latest 10 bars of 1 minute of NIFTY-I.															
			request = '{"MessageType":"GetHistory","Exchange":"' + ExchangeName + '","InstrumentIdentifier":"' + InstIdentifier + '","Periodicity":"' + Periodicity + '","Period":' + Period + ',"Max":' + Max + '}';

			//below request will fetch latest 10 Ticks of NIFTY-I
			//request = '{"MessageType":"GetHistory","Exchange":"' + ExchangeName + '","InstrumentIdentifier":"' + InstIdentifier + '","Periodicity":"Tick","Period":' + Period + ',"Max":' + Max + '}';

			//below request will fetch some 1 minute bars using From & To parameters of NIFTY-I
			//In below request, it sets the From time to 10 hours before current time
			//request = '{"MessageType":"GetHistory","Exchange":"' + ExchangeName + '","InstrumentIdentifier":"' + InstIdentifier + '","Periodicity":"' + Periodicity + '","From":' + From + ',"Period":' + Period + '}';

			//below request will fetch all available bars of 1 minute of NIFTY-I.
			//request = '{"MessageType":"GetHistory","Exchange":"' + ExchangeName + '","InstrumentIdentifier":"' + InstIdentifier + '","Periodicity":"' + Periodicity + '","From":0,"Period":' + Period + '}';

			callAPI(request);
		}
	}




	function GetExchanges() {
		if (connection.connected) {
			request = '{"MessageType":"GetExchanges"}';
			callAPI(request);
		}
	}




	function GetInstrumentsOnSearch() {
		if (connection.connected) {
			var ExchangeName = "NFO";		//GFDL : Supported Values : NFO, NSE, NSE_IDX, CDS, MCX. Mandatory Parameter
			var Search = "NIFTY";			//GFDL : This is the search string
			var InstrumentType = "FUTIDX";	//GFDL : Optional argument to filter the search by products like FUTIDX, FUTSTK, OPTIDX, OPTSTK, 	
			//FUTCUR, FUTCOM, etc.
			var Product = "NIFTY";			//GFDL : Optional argument to filter the search by products like NIFTY, RELIANCE, etc.
			var OptionType = "PE";			//GFDL : Optional argument to filter the search by OptionTypes like CE, PE
			var Expiry = "30JUL2020";	    //GFDL : Optional argument to filter the search by Expiry like 30JUL2020
			var StrikePrice = 10000; 	    //GFDL : Optional argument to filter the search by Strike Price like 10000, 75.5, 1250, etc.
			var OnlyActive = "TRUE";        //GFDL : Optional argument (default=True) to control returned data. If false, 
			//		 even expired contracts are returned

			request = '{"MessageType":"GetInstrumentsOnSearch","Exchange":"' + ExchangeName + '","Search":"' + Search + '"}';
			callAPI(request);
		}
	}


	function GetInstruments() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			var InstrumentType = "FUTSTK";	//GFDL : Optional argument to filter the search by products like FUTIDX, FUTSTK, OPTIDX, OPTSTK, 	
			//FUTCUR, FUTCOM, etc.
			var Product = "NIFTY";			//GFDL : Optional argument to filter the search by products like NIFTY, RELIANCE, etc.
			var OptionType = "PE";		    //GFDL : Optional argument to filter the search by OptionTypes like CE, PE
			var Expiry = "30JUL2020";	    //GFDL : Optional argument to filter the search by Expiry like 30JUL2020
			var StrikePrice = 10000;    	//GFDL : Optional argument to filter the search by Strike Price like 10000, 75.5, 1250, etc.
			var OnlyActive = "TRUE";   		//GFDL : Optional argument (default=True) to control returned data. If false, 
			//       even expired contracts are returned

			request = '{"MessageType":"GetInstruments","Exchange":"' + ExchangeName + '","InstrumentType":"' + InstrumentType + '"}';
			callAPI(request);
		}
	}



	function GetInstrumentTypes() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			request = '{"MessageType":"GetInstrumentTypes","Exchange":"' + ExchangeName + '"}';
			callAPI(request);
		}
	}




	function GetProducts() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			request = '{"MessageType":"GetProducts","Exchange":"' + ExchangeName + '"}';
			callAPI(request);
		}
	}




	function GetExpiryDates() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			request = '{"MessageType":"GetExpiryDates","Exchange":"' + ExchangeName + '"}';
			callAPI(request);
		}
	}





	function GetOptionTypes() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			request = '{"MessageType":"GetOptionTypes","Exchange":"' + ExchangeName + '"}';
			callAPI(request);
		}
	}

	function GetStrikePrices() {
		if (connection.connected) {
			var ExchangeName = "NFO";
			request = '{"MessageType":"GetStrikePrices","Exchange":"' + ExchangeName + '"}';
			callAPI(request);
		}
	}

	function GetServerInfo() {
		if (connection.connected) {
			request = '{"MessageType":"GetServerInfo"}';
			callAPI(request);
		}
	}



	function GetLimitation() {
		if (connection.connected) {
			request = '{"MessageType":"GetLimitation"}';
			callAPI(request);
		}
	}




	function GetMarketMessages() {
		if (connection.connected) {
			var ExchangeName = "NSE";
			request = '{"MessageType":"GetMarketMessages","Exchange":"' + ExchangeName + '"}';
			callAPI(request);
		}
	}



	function GetExchangeMessages() {
		if (connection.connected) {
			var ExchangeName = "NSE";
			request = '{"MessageType":"GetExchangeMessages","Exchange:"' + ExchangeName + '"}';
			callAPI(request);
		}
	}

	function GetLastQuoteOptionChain1() {

		
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
	}
	function GetLastQuoteOptionChain2() {
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
		/*
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "AXISBANK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BAJAJ-AUTO";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BAJAJFINSV";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BAJFINANCE";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BALKRISIND";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BANDHANBNK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BANKBARODA";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BANKNIFTY";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BATAINDIA";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BEL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BERGEPAINT";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BHARATFORG";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BHARTIARTL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BHEL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BIOCON";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BOSCHLTD";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BPCL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "BRITANNIA";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "CADILAHC";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "CANBK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "CHOLAFIN";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "CIPLA";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "COALINDIA";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "COFORGE";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "COLPAL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "CONCOR";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "CUMMINSIND";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "DABUR";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "DIVISLAB";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "DLF";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "DRREDDY";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "EICHERMOT";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "ESCORTS";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "EXIDEIND";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "FEDERALBNK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "GAIL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "GLENMARK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "GMRINFRA";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "GODREJCP";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "GODREJPROP";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "GRASIM";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "HAVELLS";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "HCLTECH";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "HDFC";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "HDFCBANK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "HDFCLIFE";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "HEROMOTOCO";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "HINDALCO";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "HINDPETRO";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "HINDUNILVR";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "IBULHSGFIN";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "ICICIBANK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "ICICIPRULI";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "IDEA";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "IDFCFIRSTB";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "IGL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "INDIGO";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "INDUSINDBK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "INFRATEL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "INFY";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "IOC";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "ITC";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "JINDALSTEL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "JSWSTEEL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "JUBLFOOD";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "KOTAKBANK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "L&TFH";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "LICHSGFIN";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "LT";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "LUPIN";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "M&M";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "M&MFIN";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MANAPPURAM";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MARICO";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MARUTI";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MCDOWELL-N";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MFSL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MGL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MINDTREE";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MOTHERSUMI";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MRF";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "MUTHOOTFIN";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "NATIONALUM";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "NAUKRI";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "NESTLEIND";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "NIFTY";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "NMDC";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "NTPC";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "ONGC";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "PAGEIND";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "PEL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "PETRONET";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "PFC";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "PIDILITIND";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "PNB";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "POWERGRID";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "PVR";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "RAMCOCEM";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "RBLBANK";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "RECLTD";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "RELIANCE";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "SAIL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "SBILIFE";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "SBIN";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "SHREECEM";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "SIEMENS";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "SRF";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "SRTRANSFIN";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "SUNPHARMA";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "SUNTV";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TATACHEM";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TATACONSUM";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TATAMOTORS";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TATAPOWER";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TATASTEEL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TCS";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TECHM";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TITAN";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TORNTPHARM";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TORNTPOWER";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "TVSMOTOR";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "UBL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "ULTRACEMCO";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "UPL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "VEDL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "VOLTAS";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "WIPRO";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		if (connection.connected) 
			{	var ExchangeName = "NFO";
				var Product = "ZEEL";		
		request = '{"MessageType":"GetLastQuoteOptionChain","Exchange":"' + ExchangeName + '","Product":"'+Product+'"}';
				callAPI(request);
			}
		
		*/

	}


	function GetExchangeSnapshot() {
		if (connection.connected) {
			var ExchangeName = "NFO";					//GFDL : Supported Values : NFO, NSE, NSE_IDX, CDS, MCX. Mandatory Parameter
			var Periodicity = "MINUTE";					//GFDL : Mandatory Parameter. Supported Values : Minute, Hour. Default = Minute
			var Period = 1;								//GFDL : Mandatory Parameter. Supported Values : 1,2,5,10,15,30. Default = 1
			var InstrumentType = "FUTIDX";	    		//GFDL : Optional Parameter. FUTIDX, FUTSTK, OPTIDX, OPTSTK, FUTCOM, FUTCUR, etc. 
			//If not mentioned, results are sent for all instrument types

			var From = 1567655100;						//GFDL : Epoch value of time in seconds since 1st January 1970. For example, 1567655100 is 
			//epoch value for Thursday, September 5, 2019 9:15:00 AM in GMT+05:30 timezone. 
			//Optional field to control snapshot start time.
			//Please note that max. 5 snapshots are returned in single call

			var to = 0;                              	//GFDL : Epoch value of time in seconds since 1st January 1970. For example, 1567655100 is 
			//epoch value for Thursday, September 5, 2019 9:15:00 AM in GMT+05:30 timezone. 
			//Optional field to control snapshot end time.

			var nonTraded = "false";				    //GFDL : true/false. When true, results are sent with data of even non traded instruments. 
			//When false, data of only traded instruments during that period is sent 
			//Optional Parameter, default value is "false"

			request = '{"MessageType":"GetExchangeSnapshot","Exchange":"' + ExchangeName + '","Periodicity":"' + Periodicity + '","Period":' + Period + '}';

			callAPI(request);
		}
	}



});
function writeToScreen(message) {
	console.log(message.utf8Data);
}


client.connect(endpoint);
