(function() {
'use strict';
// 应聘信息
var applyForService = function($http) {
	this.getApplyFor = function() {
		return $http.get('resume_applyFor.json');
	};
};

var applyForCtrl = function(applyForService, $scope) {
	applyForService.getApplyFor()
	.then(function(response) {
		$scope.h1 = response.data.h1;
		$scope.Data = response.data.main;
	});
};

angular
	.module('resumeApp', [])
	.service('applyForService', [
		'$http',
		applyForService
	])
	.controller('applyForCtrl', [
		'applyForService',
		'$scope',
		applyForCtrl
	]);

// 个人信息
var personInfoService = function($http) {
	this.getPersonInfo = function() {
		return $http.get('resume_personInfo.json');
	};
};
var personInfoCtrl = function(personInfoService, $scope) {
	personInfoService.getPersonInfo()
	.then(function(response) {
		$scope.h1 = response.data.h1;
		$scope.data = response.data.main;
	});
};
angular
	.module('resumeApp')
	.service('personInfoService', [
		'$http',
		personInfoService
	])
	.controller('personInfoCtrl', [
		'personInfoService',
		'$scope',
		personInfoCtrl
	]);

// 教育背景
var educationBackgroundService = function($http) {
	this.geteducationBackground = function() {
		return $http.get('resume_educationBackground.json');
	};
};
var educationBackgroundCtrl = function(educationBackgroundService, $scope) {
	educationBackgroundService.geteducationBackground()
	.then(function(response) {
		$scope.h1 = response.data.h1;
		$scope.Data = response.data.main;
	});
};
angular
	.module('resumeApp')
	.service('educationBackgroundService', [
		'$http',
		educationBackgroundService
	])
	.controller('educationBackgroundCtrl', [
		'educationBackgroundService',
		'$scope',
		educationBackgroundCtrl
	]);

// 活动经历
var experienceService = function($http) {
	this.getExperience = function() {
		return $http.get('resume_experience.json');
	};
};
var experienceCtrl = function(experienceService, $scope) {
	experienceService.getExperience()
	.then(function(response) {
		$scope.h1 = response.data.h1;
		$scope.experiences = response.data.main;
	});
};
angular
	.module('resumeApp')
	.service('experienceService', [
		'$http',
		experienceService
	])
	.controller('experienceCtrl', [
		'experienceService',
		'$scope',
		experienceCtrl
	]);
// 开放式问答
var answerService = function($http) {
	this.getAnswer = function() {
		return $http.get('resume_answer.json');
	};
};
var answerCtrl = function(answerService, $scope) {
	answerService.getAnswer()
	.then(function(response) {
		$scope.h1 = response.data.h1;
		$scope.Data = response.data.main;
	});
};
angular
	.module('resumeApp')
	.service('answerService', [
		'$http',
		answerService
	])
	.controller('answerCtrl', [
		'answerService',
		'$scope',
		answerCtrl
	]);
})();
