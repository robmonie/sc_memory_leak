
require("sc_memory_leak/observer"); //patched
require("sc_memory_leak/accessors"); //patched
require("sc_memory_leak/countries");

App = SC.Application.create({

  NAMESPACE: 'App',
  VERSION: '0.1.0',
  store: SC.Store.create().from("App.Datasource")

});


App.Datasource = SC.DataSource.extend({

	lastCountryId: 1,

	fetch: function(store, query) {

		var dataSource = this, storeKeys;

		if(query.location === 'remote') {

			//Incrementing the ids during each load to simulate different records... this helps to
			//show the accumulation of records in the store.
			window.countries.forEach(function(country) {
				country.id = dataSource.get('lastCountryId');
				dataSource.set('lastCountryId', country.id + 1);
			});

 			callsToGetMethod = {}; //reset calls to SC.get so they don't accumulate
			SC.run(function() { //I don't think this runloop is actually necessary but to be safe.
				//This would usually be in an asynch callback from ajax response
				store.unloadRecords(query.recordType);
				storeKeys = store.loadRecords(query.recordType, window.countries);
				store.loadQueryResults(query, storeKeys);
			});

			//This expects the SC.get method to have been patched to
			//Log calls to it keyed by propertyName. It will show an increasing
			//number of calls to 'length' over time as more data is loaded.
			if(callsToGetMethod) {
				console.log("Calls made to SC.get during current run loop by keyName", callsToGetMethod);
			}
		}
	}

});

App.Country = SC.Record.extend({
	primaryKey: 'id',
	name: SC.Record.attr(String, 'name')
});

SC.mixin(App.Country, {
	findAll: function() {
		var query = SC.Query.remote(App.Country, {
			random: Math.random() //force a different query each time so cached one isn't used
		});
		return App.store.find(query);
	}
});

App.countryArrayController = SC.ArrayProxy.create({
	content: []
});


$(function() {

	var count = 1;
	while(count < 10) {

		setTimeout(function() {

			App.countryArrayController.set('content', App.Country.findAll());
			console.log("Searching... ");

		}, count * 1000);

		count++;

	}



});
