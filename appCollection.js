//Method to allow the deleting of every document of the collection on client-side
//To call this method, run the following command in the console:
//Meteor.call('invokeAPI')

Meteor.startup(function() {
	return Meteor.methods({
		removeAllApps: function() {
			return AppCollection.remove({});
		}
    });
});

//Schema for the presentation of the applications
AppSchema = new SimpleSchema({
	//Icon (cover) of the application
	appIcon: {
		type: String,
		label: "Icon of the application"
	},
	//Name of the application
	title: {
		type: String,
		label: "Name",
		max: 100
	},
	//Developer of the application
	developer: {
		type: String,
		label: "Developer",
		max: 100
	},
	//Rating
	rating: {
		type: Number,
		label: "Rating",
		decimal: true,
		min: 1,
		max: 5	
	},
	//Classification/Category
	category: {
		type: String,
		label: "Category",
		max: 100
	},
	//Link to a video (optional)
	video: {
		type: [String],
		label: "Video:",
		optional: true
	},
	//Price (optional)
	price: {
		type: Number,
		label: "Price",
		decimal: true,		//allows non-integer
		optional: true
	},
	//Tag-Icons
	//Sensors and technologies
	motionSensors: {
		type: Boolean
	},
	touchscreen: {
		type: Boolean
	},
	microphone: {
		type: Boolean
	},
	proximitySensor: {
		type: Boolean
	},
	//Gestures
	tap: {
		type: Boolean
	},
	drag: {
		type: Boolean
	},
	flick: {
		type: Boolean
	},
	tilt: {
		type: Boolean
	},
	shake: {
		type: Boolean
	},
	pan: {
		type: Boolean
	},
	wave: {
		type: Boolean
	},
	//Parts of the body
	arms: {
		type: Boolean
	},
	oneHand: {
		type: Boolean
	},
	twoHands: {
		type: Boolean
	},
	finger: {
		type: Boolean
	},
	//Senses and abilities
	vision: {
		type: Boolean
	},
	hearing: {
		type: Boolean
	},
	speaking: {
		type: Boolean
	},
	//Positions of the user
	standing: {
		type: Boolean
	},
	sitting: {
		type: Boolean
	},
	lying: {
		type: Boolean
	},
	//Positions of the device
	horizontal: {
		type: Boolean
	},
	vertical: {
		type: Boolean
	},
	//Link to the market store
	link: {
		type: String,
		label: "Link",
		max: 200
	},
	//Market Stores, where the application is offered
	mStores: {
		type: [String],
		label: "Market Stores",
	}
});

//Creates a new MongoDB collection where all the applications are stored
//The fiels are given by the schema
AppCollection = new Meteor.Collection("appCollection", AppSchema);
