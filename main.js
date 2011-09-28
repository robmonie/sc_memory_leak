
require("sc_memory_leak/sproutcore");
require("sc_memory_leak/sproutcore-datastore");

App = SC.Application.create({

  NAMESPACE: 'App',
  VERSION: '0.1.0',
  store: SC.Store.create().from("App.Datasource")

});


App.Datasource = SC.DataSource.extend({


	fetch: function(store, query) {

	}

});

App.Country = SC.Record.extend({
	primaryKey: 'id',
	name: SC.Record.attr(String, 'name')
});

App.countryArrayController = SC.ArrayProxy.create({
	content: []
});


$(function() {

	App.store.loadRecords(App.Country, App.countries);


  var  start = 0, limit = 20, query = App.store.find(App.Country);

  $("#refresh").click(function() {

		App.countryArrayController.set('content', query.slice(start, start + limit));

		//page
		start = start + limit


  });
});


App.countries = [
{id: 0, name: "United States"},{id: 1, name: "Canada"},{id: 2, name: "Afghanistan"},{id: 3, name: "Albania"},{id: 4, name: "Algeria"},{id: 5, name: "American Samoa"},{id: 6, name: "Andorra"},{id: 7, name: "Angola"},{id: 8, name: "Anguilla"},{id: 9, name: "Antarctica"},{id: 10, name: "Antigua and/or Barbuda"},{id: 11, name: "Argentina"},{id: 12, name: "Armenia"},{id: 13, name: "Aruba"},{id: 14, name: "Australia"},{id: 15, name: "Austria"},{id: 16, name: "Azerbaijan"},{id: 17, name: "Bahamas"},{id: 18, name: "Bahrain"},{id: 19, name: "Bangladesh"},{id: 20, name: "Barbados"},{id: 21, name: "Belarus"},{id: 22, name: "Belgium"},{id: 23, name: "Belize"},{id: 24, name: "Benin"},{id: 25, name: "Bermuda"},{id: 26, name: "Bhutan"},{id: 27, name: "Bolivia"},{id: 28, name: "Bosnia and Herzegovina"},{id: 29, name: "Botswana"},{id: 30, name: "Bouvet Island"},{id: 31, name: "Brazil"},{id: 32, name: "British lndian Ocean Territory"},{id: 33, name: "Brunei Darussalam"},{id: 34, name: "Bulgaria"},{id: 35, name: "Burkina Faso"},{id: 36, name: "Burundi"},{id: 37, name: "Cambodia"},{id: 38, name: "Cameroon"},{id: 39, name: "Cape Verde"},{id: 40, name: "Cayman Islands"},{id: 41, name: "Central African Republic"},{id: 42, name: "Chad"},{id: 43, name: "Chile"},{id: 44, name: "China"},{id: 45, name: "Christmas Island"},{id: 46, name: "Cocos (Keeling) Islands"},{id: 47, name: "Colombia"},{id: 48, name: "Comoros"},{id: 49, name: "Congo"},{id: 50, name: "Cook Islands"},{id: 51, name: "Costa Rica"},{id: 52, name: "Croatia (Hrvatska)"},{id: 53, name: "Cuba"},{id: 54, name: "Cyprus"},{id: 55, name: "Czech Republic"},{id: 56, name: "Denmark"},{id: 57, name: "Djibouti"},{id: 58, name: "Dominica"},{id: 59, name: "Dominican Republic"},{id: 60, name: "East Timor"},{id: 61, name: "Ecudaor"},{id: 62, name: "Egypt"},{id: 63, name: "El Salvador"},{id: 64, name: "Equatorial Guinea"},{id: 65, name: "Eritrea"},{id: 66, name: "Estonia"},{id: 67, name: "Ethiopia"},{id: 68, name: "Falkland Islands (Malvinas)"},{id: 69, name: "Faroe Islands"},{id: 70, name: "Fiji"},{id: 71, name: "Finland"},{id: 72, name: "France"},{id: 73, name: "France, Metropolitan"},{id: 74, name: "French Guiana"},{id: 75, name: "French Polynesia"},{id: 76, name: "French Southern Territories"},{id: 77, name: "Gabon"},{id: 78, name: "Gambia"},{id: 79, name: "Georgia"},{id: 80, name: "Germany"},{id: 81, name: "Ghana"},{id: 82, name: "Gibraltar"},{id: 83, name: "Greece"},{id: 84, name: "Greenland"},{id: 85, name: "Grenada"},{id: 86, name: "Guadeloupe"},{id: 87, name: "Guam"},{id: 88, name: "Guatemala"},{id: 89, name: "Guinea"},{id: 90, name: "Guinea-Bissau"},{id: 91, name: "Guyana"},{id: 92, name: "Haiti"},{id: 93, name: "Heard and Mc Donald Islands"},{id: 94, name: "Honduras"},{id: 95, name: "Hong Kong"},{id: 96, name: "Hungary"},{id: 97, name: "Iceland"},{id: 98, name: "India"},{id: 99, name: "Indonesia"},{id: 100, name: "Iran (Islamic Republic of)"},{id: 101, name: "Iraq"},{id: 102, name: "Ireland"},{id: 103, name: "Israel"},{id: 104, name: "Italy"},{id: 105, name: "Ivory Coast"},{id: 106, name: "Jamaica"},{id: 107, name: "Japan"},{id: 108, name: "Jordan"},{id: 109, name: "Kazakhstan"},{id: 110, name: "Kenya"},{id: 111, name: "Kiribati"},{id: 112, name: "Korea, Democratic People's Republic of"},{id: 113, name: "Korea, Republic of"},{id: 114, name: "Kuwait"},{id: 115, name: "Kyrgyzstan"},{id: 116, name: "Lao People's Democratic Republic"},{id: 117, name: "Latvia"},{id: 118, name: "Lebanon"},{id: 119, name: "Lesotho"},{id: 120, name: "Liberia"},{id: 121, name: "Libyan Arab Jamahiriya"},{id: 122, name: "Liechtenstein"},{id: 123, name: "Lithuania"},{id: 124, name: "Luxembourg"},{id: 125, name: "Macau"},{id: 126, name: "Macedonia"},{id: 127, name: "Madagascar"},{id: 128, name: "Malawi"},{id: 129, name: "Malaysia"},{id: 130, name: "Maldives"},{id: 131, name: "Mali"},{id: 132, name: "Malta"},{id: 133, name: "Marshall Islands"},{id: 134, name: "Martinique"},{id: 135, name: "Mauritania"},{id: 136, name: "Mauritius"},{id: 137, name: "Mayotte"},{id: 138, name: "Mexico"},{id: 139, name: "Micronesia, Federated States of"},{id: 140, name: "Moldova, Republic of"},{id: 141, name: "Monaco"},{id: 142, name: "Mongolia"},{id: 143, name: "Montserrat"},{id: 144, name: "Morocco"},{id: 145, name: "Mozambique"},{id: 146, name: "Myanmar"},{id: 147, name: "Namibia"},{id: 148, name: "Nauru"},{id: 149, name: "Nepal"},{id: 150, name: "Netherlands"},{id: 151, name: "Netherlands Antilles"},{id: 152, name: "New Caledonia"},{id: 153, name: "New Zealand"},{id: 154, name: "Nicaragua"},{id: 155, name: "Niger"},{id: 156, name: "Nigeria"},{id: 157, name: "Niue"},{id: 158, name: "Norfork Island"},{id: 159, name: "Northern Mariana Islands"},{id: 160, name: "Norway"},{id: 161, name: "Oman"},{id: 162, name: "Pakistan"},{id: 163, name: "Palau"},{id: 164, name: "Panama"},{id: 165, name: "Papua New Guinea"},{id: 166, name: "Paraguay"},{id: 167, name: "Peru"},{id: 168, name: "Philippines"},{id: 169, name: "Pitcairn"},{id: 170, name: "Poland"},{id: 171, name: "Portugal"},{id: 172, name: "Puerto Rico"},{id: 173, name: "Qatar"},{id: 174, name: "Reunion"},{id: 175, name: "Romania"},{id: 176, name: "Russian Federation"},{id: 177, name: "Rwanda"},{id: 178, name: "Saint Kitts and Nevis"},{id: 179, name: "Saint Lucia"},{id: 180, name: "Saint Vincent and the Grenadines"},{id: 181, name: "Samoa"},{id: 182, name: "San Marino"},{id: 183, name: "Sao Tome and Principe"},{id: 184, name: "Saudi Arabia"},{id: 185, name: "Senegal"},{id: 186, name: "Seychelles"},{id: 187, name: "Sierra Leone"},{id: 188, name: "Singapore"},{id: 189, name: "Slovakia"},{id: 190, name: "Slovenia"},{id: 191, name: "Solomon Islands"},{id: 192, name: "Somalia"},{id: 193, name: "South Africa"},{id: 194, name: "South Georgia South Sandwich Islands"},{id: 195, name: "Spain"},{id: 196, name: "Sri Lanka"},{id: 197, name: "St. Helena"},{id: 198, name: "St. Pierre and Miquelon"},{id: 199, name: "Sudan"},{id: 200, name: "Suriname"},{id: 201, name: "Svalbarn and Jan Mayen Islands"},{id: 202, name: "Swaziland"},{id: 203, name: "Sweden"},{id: 204, name: "Switzerland"},{id: 205, name: "Syrian Arab Republic"},{id: 206, name: "Taiwan"},{id: 207, name: "Tajikistan"},{id: 208, name: "Tanzania, United Republic of"},{id: 209, name: "Thailand"},{id: 210, name: "Togo"},{id: 211, name: "Tokelau"},{id: 212, name: "Tonga"},{id: 213, name: "Trinidad and Tobago"},{id: 214, name: "Tunisia"},{id: 215, name: "Turkey"},{id: 216, name: "Turkmenistan"},{id: 217, name: "Turks and Caicos Islands"},{id: 218, name: "Tuvalu"},{id: 219, name: "Uganda"},{id: 220, name: "Ukraine"},{id: 221, name: "United Arab Emirates"},{id: 222, name: "United Kingdom"},{id: 223, name: "United States minor outlying islands"},{id: 224, name: "Uruguay"},{id: 225, name: "Uzbekistan"},{id: 226, name: "Vanuatu"},{id: 227, name: "Vatican City State"},{id: 228, name: "Venezuela"},{id: 229, name: "Vietnam"},{id: 230, name: "Virigan Islands (British)"},{id: 231, name: "Virgin Islands (U.S.)"},{id: 232, name: "Wallis and Futuna Islands"},{id: 233, name: "Western Sahara"},{id: 234, name: "Yemen"},{id: 235, name: "Yugoslavia"},{id: 236, name: "Zaire"},{id: 237, name: "Zambia"},{id: 238, name: "Zimbabwe"}
];
