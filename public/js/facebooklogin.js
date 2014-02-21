'use strict';
//<div id="fb-root"></div>


app.run(['$rootScope', '$window', 'srvAuth',
	function($rootScope, $window, sAuth) {

	$rootScope.user = {};

	$window.fbAsyncInit = function() {
		// Executed when the SDK is loaded
		FB.init({
			appId: '245978618918275',
			channelUrl: 'Love-Note/public/js/fbconnect.js',
			/*
			 Set if you want to check the authentication status
			 at the start up of the app
			*/
			status: false,
			cookie: true,
			xfbml: true
		});
		sAuth.watchAuthenticationStatusChange();
	};

	(function(d){
		var js,
		id = 'facebook-jssdk',
		ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {
			return;
		}

		js = d.createElement('script');
		js.id = id;
		js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";

		ref.parentNode.insertBefore(js, ref);

	}(document));

}]);
watchLoginChange = function() {

	var _self = this;

	FB.Event.subscribe('auth.authResponseChange', function(response) {

		if (response.status === 'connected') {

			/*
			 The user is already logged,
			 is possible retrieve his personal info
			*/
			_self.getUserInfo();

			/*
			 This is also the point where you should create a
			 session for the current user.
			 For this purpose you can use the data inside the
			 response.authResponse object.
			*/

		}
		else {

			/*
			 The user is not logged to the app, or into Facebook:
 			 destroy the session on the server.
			*/

		}

	});

}