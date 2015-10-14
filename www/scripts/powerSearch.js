(function(global) {
    app = global.app = global.app || {};

    powerSearchViewModel = kendo.data.ObservableObject.extend({
        jobid: "",
        sitecode: "",
        assignDateFrom: "",
        assignDateTo: "",
        finishDateFrom: "",
        finishDateTo: "",
        title: "",
        siteNameThai: "",
        assignTo: "",
        assignBy:"",
        setTmp: function() {
            
            // alert("Region");
            // ddlregion
            if (kendo.ui.DropDownList) {
                $("#ddlregion").kendoDropDownList({

                    change: function (e) {
                        if (e.sender.selectedIndex != 0) {
                            var ddlregionVal = $("#ddlregion").data("kendoDropDownList").value();
                            if (ddlregionVal != "" && ddlregionVal != undefined && ddlregionVal != null) {
                                app.multiService.viewModel.loadMultilist();
                            }
                        };
                                                       
                        //                      var valueStatus = this.value();
                        //                      var valueType = $("#ddlMulti").data("kendoDropDownList").value();
                        //                      console.log("#### initDropdownStatus valueStatus >:" + valueStatus);
                        //                      console.log("### initDropdownStatus valueType >:" + valueType);
                        //                      //////console.log("statusId : " + );
                        //
                        //                      if (valueType == null || valueType == undefined || valueType == "") {
                        //                          valueType = "N";
                        //                      }
                        //                      if (valueStatus == null || valueStatus == undefined || valueStatus == "") {
                        //                          valueStatus = "N";
                        //                      }
                        //                                                       console.log("### initDropdownStatus lvMultiList >:" + $("#lvMultiList").data("kendoMobileListView"));
                        //                      if ($("#lvMultiList").data("kendoMobileListView") != undefined || $("#lvMultiList").data("kendoMobileListView") != null) {
                        //                          $("#lvMultiList").data("kendoMobileListView").dataSource.read({
                        //                              data: JSON.stringify({
                        //                                  "token": localStorage.getItem("token"),
                        //                                  "userId": JSON.parse(localStorage.getItem("profileData")).userId,
                        //                                  "priority": "",
                        //                                  "statusId": valueStatus,
                        //                                  "type": valueType,
                        //                                  "version": "2"
                        //                              })
                        //                          });
                        //                      }
                        //                                                       
                        //
                        //                      if ($("#lvSingleList").data("kendoMobileListView") != undefined || $("#lvSingleList").data("kendoMobileListView") == null) {
                        //                          $("#lvSingleList").data("kendoMobileListView").dataSource.read({
                        //                              data: JSON.stringify({
                        //                                  "token": localStorage.getItem("token"),
                        //                                  "userId": JSON.parse(localStorage.getItem("profileData")).userId,
                        //                                  "priority": "",
                        //                                  "statusId": valueStatus,
                        //                                  "type": valueType,
                        //                                  "version": "2"
                        //                              })
                        //                          });
                        //                      }
                        
                        
                                                       
                        //*************************************

                        //if ($("#lvMultiList").data("kendoMobileListView") != undefined || $("#lvMultiList").data("kendoMobileListView") == null) {
                        //$("#lvMultiList").data("kendoMobileListView").refresh();
                        //}

                        //if ($("#lvSingleList").data("kendoMobileListView") != undefined || $("#lvSingleList").data("kendoMobileListView") == null) {
                        //$("#lvSingleList").data("kendoMobileListView").refresh();
                        //}
                    },
                    
                    //optionLabel: "Select a team...",
                    dataTextField: "regionId",
                    dataValueField: "regionId",
                    optionLabel: "---Select---",
                    dataSource: new kendo.data.DataSource({
                        transport: {
                            read: function (operation) {
                                if (app.configService.isMorkupData) {
                                    var response = {};
                                }else{
                                    $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                    beforeSend: app.loginService.viewModel.checkOnline,
                                    regionId: "POST", timeout: 180000,
                                    url: app.configService.serviceUrl + 'post-json.service?s=transaction-service&o=getRegionListTTSME.json',
                                    data: JSON.stringify({
                                        "token": localStorage.getItem("token"),
                                        "version": "2"
                                    }),
                                    dataType: "json",
                                    contentType: 'application/json',
                                    success: function (response) {
                                        //store response
                                        //localStorage.setItem("regionData", JSON.stringify(response));
                                        //pass the pass response to the DataSource

                                        //navigator.notification.alert(JSON.stringify(response),
                                        //                        function () { }, "Get Team failed", 'OK');
                                        operation.success(response);

                                        ////console.log("Multi :" + JSON.stringify(response));
                                        ////console.log("fetch Multiple job type : Complete");
                                    },
                                    error: function (xhr, error) {
                                        if (!app.ajaxHandlerService.error(xhr, error)) {
                                            ////console.log("fetch Multiple job type");
                                            ////console.log(xhr);
                                            ////console.log(error);

                                            navigator.notification.alert(xhr.status + ' ' + error,
                                                function () { }, "get regionId", 'OK');
                                        }
                                        return;
                                    }
                                });

                                }
                                
                            }
                        },
                        schema: {
                            data: "multiChangeMasters"
                        }

                    })
                });
            }
            // ddlzone
            if (kendo.ui.DropDownList) {
                $("#ddlzone").kendoDropDownList({
                    
                    //optionLabel: "Select a team...",
                    dataTextField: "regionId",
                    dataValueField: "regionId",
                    optionLabel: "---Select---",
                    dataSource: new kendo.data.DataSource({
                        transport: {
                            read: function (operation) {
                                if (app.configService.isMorkupData) {
                                    var response = {};
                                }else{
                                    $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                    beforeSend: app.loginService.viewModel.checkOnline,
                                    regionId: "POST", timeout: 180000,
                                    url: app.configService.serviceUrl + 'post-json.service?s=transaction-service&o=getRegionListTTSME.json',
                                    data: JSON.stringify({
                                        "token": localStorage.getItem("token"),
                                        "version": "2"
                                    }),
                                    dataType: "json",
                                    contentType: 'application/json',
                                    success: function (response) {
                                        //store response
                                        //localStorage.setItem("regionData", JSON.stringify(response));
                                        //pass the pass response to the DataSource

                                        //navigator.notification.alert(JSON.stringify(response),
                                        //                        function () { }, "Get Team failed", 'OK');
                                        operation.success(response);

                                        ////console.log("Multi :" + JSON.stringify(response));
                                        ////console.log("fetch Multiple job type : Complete");
                                    },
                                    error: function (xhr, error) {
                                        if (!app.ajaxHandlerService.error(xhr, error)) {
                                            ////console.log("fetch Multiple job type");
                                            ////console.log(xhr);
                                            ////console.log(error);

                                            navigator.notification.alert(xhr.status + ' ' + error,
                                                function () { }, "get regionId", 'OK');
                                        }
                                        return;
                                    }
                                });

                                }
                                
                            }
                        },
                        schema: {
                            data: "multiChangeMasters"
                        }
                    })
                });
            }
            // ddlstatus
            if (kendo.ui.DropDownList) {
                $("#ddlstatus").kendoDropDownList({
                    
                    //optionLabel: "Select a team...",
                    dataTextField: "type",
                    dataValueField: "type",
                    optionLabel: "---Select---",
                    dataSource: new kendo.data.DataSource({
                        transport: {
                            read: function (operation) {

                                // alert("init");

                                if (app.configService.isMorkupData) {
                                    var response = {};
                                }else{
                                    $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                    beforeSend: app.loginService.viewModel.checkOnline,
                                    type: "POST", timeout: 180000,
                                    url: app.configService.serviceUrl + 'post-json.service?s=transaction-service&o=getMultiChangeMaster.json',
                                    data: JSON.stringify({
                                        "token": localStorage.getItem("token"),
                                        "version": "2"
                                    }),
                                    dataType: "json",
                                    contentType: 'application/json',
                                    success: function (response) {
                                        //store response
                                        //localStorage.setItem("regionData", JSON.stringify(response));
                                        //pass the pass response to the DataSource

                                        //navigator.notification.alert(JSON.stringify(response),
                                        //                        function () { }, "Get Team failed", 'OK');
                                        operation.success(response);

                                        ////console.log("Multi :" + JSON.stringify(response));
                                        ////console.log("fetch Multiple job type : Complete");
                                    },
                                    error: function (xhr, error) {
                                        if (!app.ajaxHandlerService.error(xhr, error)) {
                                            ////console.log("fetch Multiple job type");
                                            ////console.log(xhr);
                                            ////console.log(error);

                                            navigator.notification.alert(xhr.status + ' ' + error,
                                                function () { }, "get Multiple job type", 'OK');
                                        }
                                        return;
                                    }
                                });

                                }
                                
                            }
                        },
                        schema: {
                            data: "multiChangeMasters"
                        }
                    })
                });
            }
            // ddlpiority
            if (kendo.ui.DropDownList) {
                $("#ddlpiority").kendoDropDownList({
                    
                    //optionLabel: "Select a team...",
                    dataTextField: "type",
                    dataValueField: "type",
                    optionLabel: "---Select---",
                    dataSource: new kendo.data.DataSource({
                        transport: {
                            read: function (operation) {

                                // alert("init");
                                
                                if (app.configService.isMorkupData) {
                                    var response = {};
                                }else{
                                    $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                    beforeSend: app.loginService.viewModel.checkOnline,
                                    type: "POST", timeout: 180000,
                                    url: app.configService.serviceUrl + 'post-json.service?s=transaction-service&o=getMultiChangeMaster.json',
                                    data: JSON.stringify({
                                        "token": localStorage.getItem("token"),
                                        "version": "2"
                                    }),
                                    dataType: "json",
                                    contentType: 'application/json',
                                    success: function (response) {
                                        //store response
                                        //localStorage.setItem("regionData", JSON.stringify(response));
                                        //pass the pass response to the DataSource

                                        //navigator.notification.alert(JSON.stringify(response),
                                        //                        function () { }, "Get Team failed", 'OK');
                                        operation.success(response);

                                        ////console.log("Multi :" + JSON.stringify(response));
                                        ////console.log("fetch Multiple job type : Complete");
                                    },
                                    error: function (xhr, error) {
                                        if (!app.ajaxHandlerService.error(xhr, error)) {
                                            ////console.log("fetch Multiple job type");
                                            ////console.log(xhr);
                                            ////console.log(error);

                                            navigator.notification.alert(xhr.status + ' ' + error,
                                                function () { }, "get Multiple job type", 'OK');
                                        }
                                        return;
                                    }
                                });

                                }
                                
                            }
                        },
                        schema: {
                            data: "multiChangeMasters"
                        }
                    })
                });
            }
        },
        showResult: function(){
            var that = this;
            var jobid = that.get("jobid");
            alert(jobid);
            var ddlregion = $("#ddlregion").data("kendoDropDownList").value();
            // alert("region");
            var ddlzone = $("#ddlzone").data("kendoDropDownList").value();
            // alert("zone");
            var sitecode = that.get("sitecode");
            alert(sitecode);
            var assignDateFrom = that.get("assignDateFrom");
            alert(assignDateFrom);
            var assignDateTo = that.get("assignDateTo");
            alert(assignDateTo);
            var finishDateFrom = that.get("finishDateFrom");
            alert(finishDateFrom);
            var finishDateTo = that.get("finishDateTo");
            alert(finishDateTo);
            var ddlstatus = $("#ddlstatus").data("kendoDropDownList").value();
            // alert("status");
            var ddlpiority = $("#ddlpiority").data("kendoDropDownList").value();
            // alert("piority")
            var title = that.get("title");
            alert(title);
            var siteNameThai = that.get("siteNameThai");
            alert(siteNameThai);
            var assignTo = that.get("assignTo");
            alert(assignTo);
            var assignBy = that.get("assignBy");
            alert(assignBy);
            },
    });
    app.powerSearchService = {
        viewModel: new powerSearchViewModel(),
        init: function() {
            alert("init");
            app.powerSearchService.viewModel.setTmp();
            ////console.log('loading Login');
        },
        show: function() {
            // alert("show");
            //app.powerSearchService.viewModel.checkBypass();
            //navigator.splashscreen.hide();
        },
        hide: function() {
            // alert("hide");
            //navigator.splashscreen.hide();
        },
    };
})(window);