 (function(global) {
 	var MasterViewModel,
 		app = global.app = global.app || {};

 	MasterViewModel = kendo.data.ObservableObject.extend({
 		userId: null,
 		relocateFlag: null,
 		userRole: null, // 02,03 = workforce, 01 = MC
 		loadProfile: function() {
 			var that = this;
 			var Profiles = null;

 			//    dataSource = new kendo.data.DataSource({
 			//        transport: {
 			//            read: function (operation) {
 			//                var cashedData = localStorage.getItem("regionData");

 			//                if (cashedData != null || cashedData != undefined) {
 			//                    //if local data exists load from it
 			//                    operation.success(JSON.parse(cashedData));
 			//                } else {
 			//                    $.ajax({ //using jsfiddle's echo service to simulate remote data loading
 			//                        //url: "http://tts/service/region",
 			//                        url: 'data/region.json',
 			//                        //type: "POST", timeout: 180000,
 			//                        dataType: "json",
 			//                        success: function (response) {
 			//                            //store response
 			//                            localStorage.setItem("regionData", JSON.stringify(response));
 			//                            //pass the pass response to the DataSource
 			//                            operation.success(response);
 			//                        }
 			//                    });
 			//                }
 			//            }
 			//        }
 			//    });

 			var profileData = localStorage.getItem("profileData");
 			if (profileData != null && profileData != undefined && profileData != "") {
				var relocateFlag = JSON.parse(localStorage.getItem("profileData")).profiles[0].relocateFlag;

				if (relocateFlag == "Y") {
					that.set("relocateFlag", true);
				} else {
					that.set("relocateFlag", false);
				}
				
				var userRole = JSON.parse(localStorage.getItem("profileData")).profiles[0].userRole;
        
				if (userRole == "01") {
					that.set("userRole", userRole);
					$(".tMy").show();
					$(".tTeam").hide();
				} else {

					that.set("userRole", userRole);
					$(".tTeam").show();
					$(".tMy").hide();
				}
				
				
 			} else {

 				$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 					type: "POST", timeout: 180000,
 					url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getProfileTTSME.json',
 					data: JSON.stringify({
 						"token": localStorage.getItem("token"),
 						"userId": app.loginService.viewModel.get("userId"),
 						"version": "2"
 					}),
 					async: false,
 					dataType: "json",
 					contentType: 'application/json',
 					success: function(response) {
 						//store response
						 console.log(JSON.stringify(response));
 						localStorage.setItem("profileData", JSON.stringify(response));
 						var relocateFlag = JSON.parse(localStorage.getItem("profileData")).profiles[0].relocateFlag;

 						if (relocateFlag == "Y") {
 							that.set("relocateFlag", true);
 						} else {
 							that.set("relocateFlag", false);
 						}

 						var userRole = JSON.parse(localStorage.getItem("profileData")).profiles[0].userRole;
            console.debug(userRole);
 						if (userRole == "01") {
              console.debug("show my");
 							that.set("userRole", userRole);
 							$(".tMy").show();
 							$(".tTeam").hide();
 						} else {
 							that.set("userRole", userRole);
              console.debug("show team");
 							$(".tTeam").show();
 							$(".tMy").hide();
 						}

 						////console.log(JSON.stringify(response));
 						////console.log("fetch Profile : Complete");
 					},
 					error: function(xhr, error) {

 						if (!app.ajaxHandlerService.error(xhr, error)) {
 							var cache = localStorage.getItem("profileData");

 							if (cache == null || cache == undefined) {
 								////console.log("Get Master Profile failed");
 								////console.log(xhr);
 								////console.log(error);

 								navigator.notification.alert(xhr.status + error,
 									function() {}, "Get Master Profile failed", 'OK');
 							}
 						}
 						return;
 					},
 					complete: function() {
 						var cache = localStorage.getItem("profileData");

 						if (cache != null || cache != undefined) {
 							cache.profiles
 						}
 					}
 				});
 			}
			setTimeout(function() {
                app.dashboardFilterService.viewModel.initFilter();
				app.mapService.initLocation();
				app.mapFilterService.viewModel.initFilter();
				
			}, 5000);
 		},
 		/*loadRegion: function () {
                                                       var that=this,
                                                        Regions = null;
                                                       Regions = new kendo.data.DataSource({
                                                                                           transport: {
                                                                                           read: function (operation) {
                                                                                           $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                                                                                  type: "POST", timeout: 180000,
                                                                                                  url: "https://10.252.66.40:9143/TTSMWeb/rest-service/post-json.service?s=master-service&o=getRegionByUser.json",
                                                                                                  data: JSON.stringify({"token" : localStorage.getItem("token"),"userId":"7478", "version": "2" }),
                                                                                                  dataType: "json",
                                                                                                  contentType: 'application/json',
                                                                                                  success: function (response) {
                                                                                                  //store response
                                                                                                  localStorage.setItem("regionData", JSON.stringify(response));
                                                                                                  //pass the pass response to the DataSource
                                                                                                  operation.success(response);
                                                                                                  
                                                                                                  ////console.log("fetch Region : Complete" + JSON.stringify(response));
                                                                                                  },
                                                                                                  error: function (xhr, error) {
                                                                                                  ////console.log("Get Master Region failed");
                                                                                                  ////console.log(JSON.stringify(xhr));
                                                                                                  ////console.log(error);
                                                                                                  
                                                                                                  navigator.notification.alert(xhr.status + error,
                                                                                                                               function () { }, "Get Master Region failed", 'OK');
                                                                                                  return;
                                                                                                  }
                                                                                                  });
                                                                                           }
                                                                                           }
                                                                                           });
                                                       
                                                       
                                                       
                                                       Regions.read(function () {
                                                                    //////console.log("fetch Region : Complete");
                                                                    });
                                                       
                                                       },
                                                       loadZone: function () {
                                                       var Zones = null;
                                                       Zones = new kendo.data.DataSource({
                                                                                         transport: {
                                                                                         read: function (operation) {
                                                                                         $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                                                                                url: "https://10.252.66.40:9143/TTSMWeb/rest-service/post-json.service?s=master-service&o=getZone.json",
                                                                                                //url: 'data/zone.json',
                                                                                                type: "POST", timeout: 180000,
                                                                                                data: JSON.stringify({ "regionId": "BKK", "version": "2" }),
                                                                                                dataType: "jsonp",
                                                                                                //contentType: 'application/json',
                                                                                                success: function (response) {
                                                                                                //store response
                                                                                                localStorage.setItem("zoneData", JSON.stringify(response));
                                                                                                //pass the pass response to the DataSource
                                                                                                operation.success(response);
                                                                                                
                                                                                                ////console.log("fetch Zone : Complete");
                                                                                                },
                                                                                                error: function (xhr, error) {
                                                                                                ////console.log("Get Master Zone failed");
                                                                                                ////console.log(xhr);
                                                                                                ////console.log(error);
                                                                                                navigator.notification.alert(xhr.status + error,
                                                                                                                             function () { }, "Get Master Zone failed", 'OK');
                                                                                                return;
                                                                                                }
                                                                                                });
                                                                                         }
                                                                                         }
                                                                                         });
                                                       
                                                       
                                                       
                                                       Zones.read(function () {
                                                                  //////console.log("fetch Zone : Complete");
                                                                  });
                                                       
                                                       },
                                                       loadLocation: function () {
                                                       var Locations = null;
                                                       Locations = new kendo.data.DataSource({
                                                                                             transport: {
                                                                                             read: function (operation) {
                                                                                             $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                                                                                    //url: "http://tts/service/location",
                                                                                                    url: 'data/location.json',
                                                                                                    //type: "POST", timeout: 180000,
                                                                                                    dataType: "json",
                                                                                                    success: function (response) {
                                                                                                    //store response
                                                                                                    localStorage.setItem("locationData", JSON.stringify(response));
                                                                                                    //pass the pass response to the DataSource
                                                                                                    operation.success(response);
                                                                                                    
                                                                                                    ////console.log("fetch Location : Complete");
                                                                                                    },
                                                                                                    error: function (xhr, error) {
                                                                                                    ////console.log("Get Master Location failed");
                                                                                                    ////console.log(xhr);
                                                                                                    ////console.log(error);
                                                                                                    navigator.notification.alert(xhr.status + error,
                                                                                                                                 function () { }, "Get Master Location failed", 'OK');
                                                                                                    return;
                                                                                                    }
                                                                                                    });
                                                                                             }
                                                                                             }
                                                                                             });
                                                       
                                                       
                                                       
                                                       Locations.read(function () {
                                                                      //////console.log("fetch Location : Complete");
                                                                      });
                                                       
                                                       },
                                                       loadTeam: function () {
                                                       var Teams = null;
                                                       Teams = new kendo.data.DataSource({
                                                                                         transport: {
                                                                                         read: function (operation) {
                                                                                         $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                                                                                //url: "http://tts/service/team",
                                                                                                url: 'data/team.json',
                                                                                                //type: "POST", timeout: 180000,
                                                                                                dataType: "json",
                                                                                                success: function (response) {
                                                                                                //store response
                                                                                                localStorage.setItem("teamData", JSON.stringify(response));
                                                                                                //pass the pass response to the DataSource
                                                                                                operation.success(response);
                                                                                                
                                                                                                ////console.log("fetch Team : Complete");
                                                                                                },
                                                                                                error: function (xhr, error) {
                                                                                                ////console.log("Get Master Team failed");
                                                                                                ////console.log(xhr);
                                                                                                ////console.log(error);
                                                                                                navigator.notification.alert(xhr.status + error,
                                                                                                                             function () { }, "Get Master Team failed", 'OK');
                                                                                                return;
                                                                                                }
                                                                                                });
                                                                                         }
                                                                                         }
                                                                                         });
                                                       
                                                      
                                                       
                                                       Teams.fetch(function () {
                                                                   //////console.log("fetch Team : Complete");
                                                                   });
                                                       
                                                       },
                                                       loadMember: function () {
                                                       var Members = null;
                                                       Members = new kendo.data.DataSource({
                                                                                           transport: {
                                                                                           read: function (operation) {
                                                                                           $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                                                                                  //url: "http://tts/service/member",
                                                                                                  url: 'data/member.json',
                                                                                                  //type: "POST", timeout: 180000,
                                                                                                  dataType: "json",
                                                                                                  success: function (response) {
                                                                                                  //store response
                                                                                                  localStorage.setItem("memberData", JSON.stringify(response));
                                                                                                  //pass the pass response to the DataSource
                                                                                                  operation.success(response);
                                                                                                  
                                                                                                  ////console.log("fetch Member : Complete");
                                                                                                  },
                                                                                                  error: function (xhr, error) {
                                                                                                  ////console.log("Get Master Member failed");
                                                                                                  ////console.log(xhr);
                                                                                                  ////console.log(error);
                                                                                                  navigator.notification.alert(xhr.status + error,
                                                                                                                               function () { }, "Get Master Member failed", 'OK');
                                                                                                  return;
                                                                                                  }
                                                                                                  });
                                                                                           }
                                                                                           }
                                                                                           });
                                                       
                                                       
                                                       
                                                       Members.read(function () {
                                                                    //////console.log("fetch Member : Complete");
                                                                    });
                                                       },*/
 		loadPriority: function() {
 			var that = this;
 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getPriority.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"version": "2"
 				}),
 				async: true,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
 					localStorage.setItem("priorityData", JSON.stringify(response));

 					////console.log("fetch Priority : Complete");
 				},
 				error: function(xhr, error) {
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("priorityData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get Master Priority failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get Master Priority failed", 'OK');
 						}
 					}
 					return;
 				}
 			});
 		},
 		loadStatus: function() {
 			var that = this;
 			var Statuses = null;

 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getJobStatus.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"version": "2"
 				}),
 				async: true,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
 					localStorage.setItem("statusData", JSON.stringify(response));
 					////console.log("fetch Status : Complete");
 				},
 				error: function(xhr, error) {
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("statusData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get Master Status failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get Master Status failed", 'OK');
 						}
 					}
 					return;
 				}
 			}); 		
    },
 		loadReportType: function() {
 			var that = this;
 			var ReportTypes = null;

 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getJobReportType.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"version": "2"
 				}),
 				async: true,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
 					localStorage.setItem("reportTypeData", JSON.stringify(response));
 					////console.log("fetch ReportType : " + JSON.stringify(response));
 					////console.log("fetch ReportType : Complete");
 				},
 				error: function(xhr, error) {
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("reportTypeData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get Master ReportType failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get Master ReportType failed", 'OK');

 						}
 					}
 					return;
 				}
 			});
 		},
 		loadProblemCause: function() {
 			var that = this;
 			var ProblemCauses = null;

 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getProblemCause.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"version": "2"
 				}),
 				async: true,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
 					localStorage.setItem("problemCauseData", JSON.stringify(response));
 					////console.log(JSON.stringify(response));
 					////console.log("fetch Problem Cause : Complete");
 				},
 				error: function(xhr, error) {
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("problemCauseData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get Master Problem Cause failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get Master Problem Cause failed", 'OK');
 						}
 					}
 					return;
 				}
 			});
 		},
 		loadProblemCauseMulti: function() {
 			var that = this;
 			var ProblemCausesMulti = null;

 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getProblemCauseMulti.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"version": "2"
 				}),
 				async: true,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
 					localStorage.setItem("problemCauseMultiData", JSON.stringify(response));
 					////console.log(JSON.stringify(response));
 					////console.log("fetch Problem Cause Multi : Complete");
 				},
 				error: function(xhr, error) {
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("problemCauseMultiData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get Master Problem Cause Multi failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get Master Problem Cause Multi failed", 'OK');
 						}
 					}
 					return;
 				}
 			});
 		},
 		loadProblemSolve: function() {
 			var that = this;
 			var ProblemSolves = null;

 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getProblemSolve.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"version": "2"
 				}),
 				async: true,
 				type: "POST", timeout: 180000,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
 					localStorage.setItem("problemSolveData", JSON.stringify(response));
 					////console.log(JSON.stringify(response));
 					////console.log("fetch Problem Solve : Complete");
 				},
 				error: function(xhr, error) {
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("problemSolveData");

 						if (cache == null || cache == undefined) {

 							////console.log("Get Master Problem Solve failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get Master Problem Solve failed", 'OK');

 						}
 					}
 					return;
 				}
 			});
 		},
 		loadMyJB: function() {
 			var that = this;
 			var myJBs = null;
			console.log("loadjob");
 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=transaction-service&o=getJob.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"userId": JSON.parse(localStorage.getItem("profileData")).userId,
 					"priority": "",
 					"statusId": "",
 					"version": "2"
 				}),
 				async: true,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
 					localStorage.setItem("jbData", JSON.stringify(response));
 					//that.hideLoading();
 					////console.log("fetch My Job : Complete");
 					////console.log("My Job Data :" + JSON.stringify(response));
 				},
 				error: function(xhr, error) {
 					//that.hideLoading();
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("jbData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get My Job failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get My Job failed", 'OK');
 						}
 					}
 					return;
 				},
 				complete: function() {

 					var acceptCount = 0,
 						assignCount = 0;
 					var cache = localStorage.getItem("jbData");
 					var assignCount, acceptCount;
					 app.masterService.viewModel.setCount("0", "0");
 					if (cache != null && cache != undefined) {
						////console.log("loadjob:complete");

 						var dataSourceAccept = new kendo.data.DataSource({
 							data: JSON.parse(localStorage.getItem("jbData")),
 							filter: {
 								field: "statusId",
 								operator: "eq",
 								value: "01"
 							},
 							aggregate: {
 								field: "status",
 								aggregate: "count"
 							},
 							schema: {
 								data: "jobs",
 								model: {
 									id: "jobid"
 								}
 							}
 						});
 						dataSourceAccept.fetch(function() {
 							var results = dataSourceAccept.aggregates().status;
 							//var tabstrip = $("#mytabstrip").data("kendoMobileTabStrip");
 							if (results != null && results != undefined) {
 								assignCount = results.count;
								 //console.log("show badge" + assignCount + acceptCount);
                                               //app.masterService.viewModel.setCount(assignCount, acceptCount);
 							}
 						});

 						var dataSourceAssign = new kendo.data.DataSource({
 							data: JSON.parse(localStorage.getItem("jbData")),
 							filter: {
 								field: "statusId",
 								operator: "neq",
 								value: "01"
 							},
 							aggregate: {
 								field: "status",
 								aggregate: "count"
 							},
 							schema: {
 								data: "jobs",
 								model: {
 									id: "jobid"
 								}
 							}
 						});
 						dataSourceAssign.fetch(function() {
 							var results = dataSourceAssign.aggregates().status;
 							var tabstrip = $("#mytabstrip").data("kendoMobileTabStrip");
 							if (results != null && results != undefined) {
 								acceptCount = results.count;
								 //console.log("show badge" + assignCount + acceptCount);
                                               //app.masterService.viewModel.setCount(assignCount, acceptCount);
 							}
 						});


							//console.debug("show badge" + assignCount + acceptCount);
 						setTimeout(function() {
							 console.log("show badge" + assignCount + acceptCount);
                                   app.masterService.viewModel.setCount(assignCount, acceptCount);
							
 				 		 	app.masterService.viewModel.loadMyTeam();
							 
 						}, 1000);
						 
						 
 					}
		 			
 				}
 			});
 		},
 		loadMyJBProblemCause: function() {
 			var that = this;
 			//var myJBs = null;
			////console.log("loadJobpc");
 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=transaction-service&o=getJobProblemCause.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"userId": JSON.parse(localStorage.getItem("profileData")).userId,
 					"priority": "",
 					"statusId": "",
 					"version": "2"
 				}),
 				async: true,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
					////console.log("loadJobpc:complete");
 					localStorage.setItem("jbCauseData", JSON.stringify(response));
 					//that.hideLoading();
 					////console.log("fetch My Problem Cause : Complete");
 					////console.log("My Problem Cause Data :" + JSON.stringify(response));
 				},
 				error: function(xhr, error) {
 					//that.hideLoading();
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("jbCauseData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get My Problem Cause failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get My Problem Cause failed", 'OK');
 						}
 					}
 					return;
 				},
 				complete: function() {}
 			});
 		},
 		loadMyJBProblemCauseM: function() {
 			var that = this;
 			//var myJBs = null;
////console.log("loadJobpcm");
 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=transaction-service&o=getJobProblemCauseM.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"userId": JSON.parse(localStorage.getItem("profileData")).userId,
 					"priority": "",
 					"statusId": "",
 					"version": "2"
 				}),
 				async: true,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
					////console.log("loadJobpcm:complete");
 					localStorage.setItem("jbCauseMData", JSON.stringify(response));
 					//that.hideLoading();
 					////console.log("fetch My Problem Cause Multi : Complete");
 					////console.log("My Problem Cause Multi :" + JSON.stringify(response));
 				},
 				error: function(xhr, error) {
 					//that.hideLoading();
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("jbCauseMData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get My Problem Cause Multi failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get My Problem Cause Multi failed", 'OK');
 						}
 					}
 					return;
 				},
 				complete: function() {


 				}
 			});
 		},
 		loadMyJBProblemSolve: function() {
 			var that = this;
 			//var myJBs = null;
////console.log("loadJobps:complete");
 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=transaction-service&o=getJobProblemSolve.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"userId": JSON.parse(localStorage.getItem("profileData")).userId,
 					"priority": "",
 					"statusId": "",
 					"version": "2"
 				}),
 				async: true,
 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					//store response
					////console.log("loadJobps:complete");
 					localStorage.setItem("jbSolveData", JSON.stringify(response));
 					//that.hideLoading();
 					////console.log("fetch My Problem Solve : Complete");
 					////console.log("My Problem Solve Data :" + JSON.stringify(response));
 				},
 				error: function(xhr, error) {
 					//that.hideLoading();
 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("jbSolveData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get My Problem Solve failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get My Problem Solve failed", 'OK');
 						}
 					}
 					return;
 				},
 				complete: function() {



 				}
 			});
 		},
 		loadReasonOverdue: function() {

 			$.ajax({ //using jsfiddle's echo service to simulate remote data loading
 				type: "POST", timeout: 180000,
 				url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getReasonOverDue.json',
 				data: JSON.stringify({
 					"token": localStorage.getItem("token"),
 					"version": "2"
 				}),

 				dataType: "json",
 				contentType: 'application/json',
 				success: function(response) {
 					localStorage.setItem("reasonOverDueData", JSON.stringify(response));
 					//that.hideLoading();
 					////console.log("fetch Reason Over Due Data : Complete");
 					////console.log("Reason Over Due Data :" + JSON.stringify(response));
 				},
 				error: function(xhr, error) {

 					if (!app.ajaxHandlerService.error(xhr, error)) {
 						var cache = localStorage.getItem("reasonOverDueData");

 						if (cache == null || cache == undefined) {
 							////console.log("Get Reason Over Due failed");
 							////console.log(xhr);
 							////console.log(error);
 							navigator.notification.alert(xhr.status + error,
 								function() {}, "Get Reason Over Due failed", 'OK');
 						}

 					}
 					return;
 				},
 				complete: function() {}
 			});


 		},
 		setCount: function(assignCount, acceptCount) {
 			var tabstrip = $(".mytabstrip").data("kendoMobileTabStrip");
 			if (tabstrip != null || tabstrip != undefined) {
 				tabstrip.badge('.tAssign', assignCount);
 				tabstrip.badge('.tAccept', acceptCount);
 			}else{
				 
				  tabstrip = app.application.view().element.find(".mytabstrip").data("kendoMobileTabStrip");
				  tabstrip.badge('.tAssign', assignCount);
 				tabstrip.badge('.tAccept', acceptCount);
				 //console.log("tabstrip not found");
				 
			 }
 		},
 		showLoading: function() {
 			//if (this._isLoading) {
 				app.application.showLoading();
 			//}
 		},
 		hideLoading: function() {
 			app.application.hideLoading();
 		},
 		loadMyTeam: function() {
 			var userRole = app.masterService.viewModel.get("userRole");
 			if (userRole != "01") {
				////console.log("goto myteam");
 				app.application.navigate(
 					'#tabstrip-team'
 				);
 			} else {
 				app.application.navigate(
 					'#tabstrip-my'
 				);
 			}
			 setTimeout(function () {
				 app.masterService.viewModel.hideLoading();
			 },1000);
			  
 		},


 	});

 	app.masterService = {
 		init: function(e) {
 			////console.log("master init start");



 			////console.log("master init end");

 		},
 		show: function(e) {

 			////console.log("master show start");

 			app.masterService.viewModel.showLoading();
			//app.masterService.viewModel.setCount("0", "0");
			sleep(1000);
			//setTimeout(function(){
 			app.masterService.viewModel.loadProfile();
 			//app.masterService.viewModel.loadRegion();
 			//app.masterService.viewModel.loadZone();
 			//app.masterService.viewModel.loadLocation();
 			//app.masterService.viewModel.loadTeam();
 			//app.masterService.viewModel.loadMember();
 			
			app.masterService.viewModel.loadPriority();
 			app.masterService.viewModel.loadStatus();
 			app.masterService.viewModel.loadReportType();
 			app.masterService.viewModel.loadProblemCause();
 			app.masterService.viewModel.loadProblemCauseMulti();
 			app.masterService.viewModel.loadProblemSolve();
 			app.masterService.viewModel.loadReasonOverdue();

 			app.masterService.viewModel.loadMyJBProblemCause();
 			app.masterService.viewModel.loadMyJBProblemCauseM();
 			app.masterService.viewModel.loadMyJBProblemSolve();
			app.masterService.viewModel.loadMyJB();



			//},1000);
 			//app.masterService.hide();
			//loadMyTeam
 			//app.masterService.viewModel.hideLoading();

 			////console.log("master Show end");
 		},
 		afterShow: function(e) {
 			////console.log("master afterShow start");
			 //setTimeout(function() {
			
			//}, 0);
 			//setTimeout(function() {
				 
				 //app.masterService.viewModel.hideLoading();
 			//}, 10000);
			
 			////console.log("master afterShow end");
 		},
 		hide: function(e) {
 			////console.log("master hide start");

 			//app.masterService.viewModel.hideLoading();

 			////console.log("master hide end");
 		},
 		viewModel: new MasterViewModel()
 	};
 })(window);
