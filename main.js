
require("sc_memory_leak/sproutcore");
require("sc_memory_leak/sproutcore-datastore");

App = SC.Application.create({

  NAMESPACE: 'App',
  VERSION: '0.1.0',
  store: SC.Store.create().from("App.Datasource")

});


App.Datasource = SC.DataSource.extend({

	lastCountryId: 1,

	fetch: function(store, query) {

		var dataSource = this, storeKeys;

			// Incrementing the ids during each load to simulate different records... this helps to
			// show the accumulation of records in the store.
			App.countries.forEach(function(country) {
				country.id = dataSource.get('lastCountryId');
				dataSource.set('lastCountryId', country.id + 1);
			});

			// This would usually be in an asynch callback from ajax response
      /* store.unloadRecords(query.recordType); -- uncomment this to make things worse */
			storeKeys = store.loadRecords(query.recordType, App.countries);
			store.loadQueryResults(query, storeKeys);
      console.log("results loaded");
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

App.CountryCollectionView = SC.CollectionView.extend({
  contentBinding: 'App.countryArrayController',
  itemViewClass: SC.View.extend({
    render: function(buffer) {

      buffer.push("<div>" + this.get('content').get('name') + "</div>");
    }
  })
});


$(function() {

  var collectionView = App.CountryCollectionView.create();

  collectionView.append("#country-view")

  $("#refresh").click(function() {

		App.countryArrayController.set('content', App.Country.findAll());

  });
});


App.countries = [
{name: "United States"},
{name: "Canada"},
{name: "Afghanistan"},
{name: "Albania"},
{name: "Algeria"},
{name: "American Samoa"},
{name: "Andorra"},
{name: "Angola"},
{name: "Anguilla"},
{name: "Antarctica"},
{name: "Antigua and/or Barbuda"},
{name: "Argentina"},
{name: "Armenia"},
{name: "Aruba"},
{name: "Australia"},
{name: "Austria"},
{name: "Azerbaijan"},
{name: "Bahamas"},
{name: "Bahrain"},
{name: "Bangladesh"},
{name: "Barbados"},
{name: "Belarus"},
{name: "Belgium"},
{name: "Belize"},
{name: "Benin"},
{name: "Bermuda"},
{name: "Bhutan"},
{name: "Bolivia"},
{name: "Bosnia and Herzegovina"},
{name: "Botswana"},
{name: "Bouvet Island"},
{name: "Brazil"},
{name: "British lndian Ocean Territory"},
{name: "Brunei Darussalam"},
{name: "Bulgaria"},
{name: "Burkina Faso"},
{name: "Burundi"},
{name: "Cambodia"},
{name: "Cameroon"},
{name: "Cape Verde"},
{name: "Cayman Islands"},
{name: "Central African Republic"},
{name: "Chad"},
{name: "Chile"},
{name: "China"},
{name: "Christmas Island"},
{name: "Cocos (Keeling) Islands"},
{name: "Colombia"},
{name: "Comoros"},
{name: "Congo"},
{name: "Cook Islands"},
{name: "Costa Rica"},
{name: "Croatia (Hrvatska)"},
{name: "Cuba"},
{name: "Cyprus"},
{name: "Czech Republic"},
{name: "Denmark"},
{name: "Djibouti"},
{name: "Dominica"},
{name: "Dominican Republic"},
{name: "East Timor"},
{name: "Ecudaor"},
{name: "Egypt"},
{name: "El Salvador"},
{name: "Equatorial Guinea"},
{name: "Eritrea"},
{name: "Estonia"},
{name: "Ethiopia"},
{name: "Falkland Islands (Malvinas)"},
{name: "Faroe Islands"},
{name: "Fiji"},
{name: "Finland"},
{name: "France"},
{name: "France, Metropolitan"},
{name: "French Guiana"},
{name: "French Polynesia"},
{name: "French Southern Territories"},
{name: "Gabon"},
{name: "Gambia"},
{name: "Georgia"},
{name: "Germany"},
{name: "Ghana"},
{name: "Gibraltar"},
{name: "Greece"},
{name: "Greenland"},
{name: "Grenada"},
{name: "Guadeloupe"},
{name: "Guam"},
{name: "Guatemala"},
{name: "Guinea"},
{name: "Guinea-Bissau"},
{name: "Guyana"},
{name: "Haiti"},
{name: "Heard and Mc Donald Islands"},
{name: "Honduras"},
{name: "Hong Kong"},
{name: "Hungary"},
{name: "Iceland"},
{name: "India"},
{name: "Indonesia"},
{ name: "Iran (Islamic Republic of)"},
{ name: "Iraq"},
{ name: "Ireland"},
{ name: "Israel"},
{ name: "Italy"},
{ name: "Ivory Coast"},
{ name: "Jamaica"},
{ name: "Japan"},
{ name: "Jordan"},
{ name: "Kazakhstan"},
{ name: "Kenya"},
{ name: "Kiribati"},
{ name: "Korea, Democratic People's Republic of"},
{ name: "Korea, Republic of"},
{ name: "Kuwait"},
{ name: "Kyrgyzstan"},
{ name: "Lao People's Democratic Republic"},
{ name: "Latvia"},
{ name: "Lebanon"},
{ name: "Lesotho"},
{ name: "Liberia"},
{ name: "Libyan Arab Jamahiriya"},
{ name: "Liechtenstein"},
{ name: "Lithuania"},
{ name: "Luxembourg"},
{ name: "Macau"},
{ name: "Macedonia"},
{ name: "Madagascar"},
{ name: "Malawi"},
{ name: "Malaysia"},
{ name: "Maldives"},
{ name: "Mali"},
{ name: "Malta"},
{ name: "Marshall Islands"},
{ name: "Martinique"},
{ name: "Mauritania"},
{ name: "Mauritius"},
{ name: "Mayotte"},
{ name: "Mexico"},
{ name: "Micronesia, Federated States of"},
{ name: "Moldova, Republic of"},
{ name: "Monaco"},
{ name: "Mongolia"},
{ name: "Montserrat"},
{ name: "Morocco"},
{ name: "Mozambique"},
{ name: "Myanmar"},
{ name: "Namibia"},
{ name: "Nauru"},
{ name: "Nepal"},
{ name: "Netherlands"},
{ name: "Netherlands Antilles"},
{ name: "New Caledonia"},
{ name: "New Zealand"},
{ name: "Nicaragua"},
{ name: "Niger"},
{ name: "Nigeria"},
{ name: "Niue"},
{ name: "Norfork Island"},
{ name: "Northern Mariana Islands"},
{ name: "Norway"},
{ name: "Oman"},
{ name: "Pakistan"},
{ name: "Palau"},
{ name: "Panama"},
{ name: "Papua New Guinea"},
{ name: "Paraguay"},
{ name: "Peru"},
{ name: "Philippines"},
{ name: "Pitcairn"},
{ name: "Poland"},
{ name: "Portugal"},
{ name: "Puerto Rico"},
{ name: "Qatar"},
{ name: "Reunion"},
{ name: "Romania"},
{ name: "Russian Federation"},
{ name: "Rwanda"},
{ name: "Saint Kitts and Nevis"},
{ name: "Saint Lucia"},
{ name: "Saint Vincent and the Grenadines"},
{ name: "Samoa"},
{ name: "San Marino"},
{ name: "Sao Tome and Principe"},
{ name: "Saudi Arabia"},
{ name: "Senegal"},
{ name: "Seychelles"},
{ name: "Sierra Leone"},
{ name: "Singapore"},
{ name: "Slovakia"},
{ name: "Slovenia"},
{ name: "Solomon Islands"},
{ name: "Somalia"},
{ name: "South Africa"},
{ name: "South Georgia South Sandwich Islands"},
{ name: "Spain"},
{ name: "Sri Lanka"},
{ name: "St. Helena"},
{ name: "St. Pierre and Miquelon"},
{ name: "Sudan"},
{ name: "Suriname"},
{ name: "Svalbarn and Jan Mayen Islands"},
{ name: "Swaziland"},
{ name: "Sweden"},
{ name: "Switzerland"},
{ name: "Syrian Arab Republic"},
{ name: "Taiwan"},
{ name: "Tajikistan"},
{ name: "Tanzania, United Republic of"},
{ name: "Thailand"},
{ name: "Togo"},
{ name: "Tokelau"},
{ name: "Tonga"},
{ name: "Trinidad and Tobago"},
{ name: "Tunisia"},
{ name: "Turkey"},
{ name: "Turkmenistan"},
{ name: "Turks and Caicos Islands"},
{ name: "Tuvalu"},
{ name: "Uganda"},
{ name: "Ukraine"},
{ name: "United Arab Emirates"},
{ name: "United Kingdom"},
{ name: "United States minor outlying islands"},
{ name: "Uruguay"},
{ name: "Uzbekistan"},
{ name: "Vanuatu"},
{ name: "Vatican City State"},
{ name: "Venezuela"},
{ name: "Vietnam"},
{ name: "Virigan Islands (British)"},
{ name: "Virgin Islands (U.S.)"},
{ name: "Wallis and Futuna Islands"},
{ name: "Western Sahara"},
{ name: "Yemen"},
{ name: "Yugoslavia"},
{ name: "Zaire"},
{ name: "Zambia"},
{ name: "Zimbabwe"}
];
