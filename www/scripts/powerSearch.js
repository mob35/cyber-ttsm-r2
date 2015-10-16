(function(global) {
        app = global.app = global.app || {};
        var _getRegionListTTSME = {
            "regions": [{
                "regionId": "BKK",
                "regionNameTh": "กรุงเทพมหานคร",
                "regionNameEn": "Bangkok",
                "zones": [{
                    "zoneId": "AB",
                    "zoneDesc": "MNM-AREA2 (Bangkok-ONT)"
                }, {
                    "zoneId": "AD",
                    "zoneDesc": "Zone ADC"
                }, {
                    "zoneId": "AP",
                    "zoneDesc": "Application"
                }, {
                    "zoneId": "B1",
                    "zoneDesc": "MNM-AREA1 (Bangkok-ST2)"
                }, {
                    "zoneId": "B10",
                    "zoneDesc": "MNM-SUK"
                }, {
                    "zoneId": "B2",
                    "zoneDesc": "MNM-AREA2 (Bangkok-ONT)"
                }, {
                    "zoneId": "B3",
                    "zoneDesc": "MNM-AREA3 (Bangkok-TLC)"
                }, {
                    "zoneId": "B4",
                    "zoneDesc": "MNM-AREA4 (Bangkok-CWT)"
                }, {
                    "zoneId": "B5",
                    "zoneDesc": "MFE-RST (Bangkok)"
                }, {
                    "zoneId": "B6",
                    "zoneDesc": "Value Added"
                }, {
                    "zoneId": "B7",
                    "zoneDesc": "MC-Other (Bangkok)"
                }, {
                    "zoneId": "B8",
                    "zoneDesc": "OC-Other (Bangkok)"
                }, {
                    "zoneId": "B9",
                    "zoneDesc": "Switching"
                }, {
                    "zoneId": "BB",
                    "zoneDesc": "Branch Outlet"
                }, {
                    "zoneId": "BC",
                    "zoneDesc": "Client"
                }, {
                    "zoneId": "BI",
                    "zoneDesc": "ITO"
                }, {
                    "zoneId": "BJ",
                    "zoneDesc": "IT Security"
                }, {
                    "zoneId": "BKK-PLAN",
                    "zoneDesc": "BKK-Planning"
                }, {
                    "zoneId": "BM",
                    "zoneDesc": "Mobile Satellite"
                }, {
                    "zoneId": "BP",
                    "zoneDesc": "Project"
                }, {
                    "zoneId": "BS",
                    "zoneDesc": "Store"
                }, {
                    "zoneId": "DR",
                    "zoneDesc": "Drive Test"
                }, {
                    "zoneId": "ICT",
                    "zoneDesc": "ICT"
                }, {
                    "zoneId": "IT",
                    "zoneDesc": "IT Supervision"
                }, {
                    "zoneId": "OTH",
                    "zoneDesc": "Other"
                }, {
                    "zoneId": "PHP23D",
                    "zoneDesc": "PHP23D"
                }, {
                    "zoneId": "STO1",
                    "zoneDesc": "CDN_STO"
                }, {
                    "zoneId": "TLS1",
                    "zoneDesc": "ZONE_TLS1"
                }, {
                    "zoneId": "TTC",
                    "zoneDesc": "Technical Training Center"
                }, {
                    "zoneId": "VAS",
                    "zoneDesc": "VAS"
                }, {
                    "zoneId": "X1",
                    "zoneDesc": "TTS Administrator"
                }, {
                    "zoneId": "X2",
                    "zoneDesc": "Handset"
                }]
            }, {
                "regionId": "CR",
                "regionNameTh": "ภาคกลาง",
                "regionNameEn": "Central",
                "zones": [{
                    "zoneId": "C1",
                    "zoneDesc": "MC1_NPT (Central)"
                }, {
                    "zoneId": "C2",
                    "zoneDesc": "MC2_KRI (Central)"
                }, {
                    "zoneId": "C3",
                    "zoneDesc": "MC3_PKN (Central)"
                }, {
                    "zoneId": "C4",
                    "zoneDesc": "MC4_AYA (Central)"
                }, {
                    "zoneId": "C5",
                    "zoneDesc": "MC5_LRI (Central)"
                }, {
                    "zoneId": "C6",
                    "zoneDesc": "MC6_NPT2 (Central)"
                }]
            }, {
                "regionId": "ER",
                "regionNameTh": "ภาคตะวันออก",
                "regionNameEn": "East",
                "zones": [{
                    "zoneId": "E1",
                    "zoneDesc": "Zone1_Chonburi (East)"
                }, {
                    "zoneId": "E2",
                    "zoneDesc": "Zone2_Prachinburi (East)"
                }, {
                    "zoneId": "E3",
                    "zoneDesc": "Zone3_Chantaburi (East)"
                }, {
                    "zoneId": "E4",
                    "zoneDesc": "OC-Other (East)"
                }, {
                    "zoneId": "E5",
                    "zoneDesc": "Zone4_Rayong (East)"
                }, {
                    "zoneId": "ES",
                    "zoneDesc": "Zone_store"
                }]
            }, {
                "regionId": "NER",
                "regionNameTh": "ภาคตะวันออกเฉียงเหนือ",
                "regionNameEn": "NorthEast",
                "zones": [{
                    "zoneId": "Z1",
                    "zoneDesc": "MC1_KKN (North East)"
                }, {
                    "zoneId": "Z10",
                    "zoneDesc": "Zone_Store"
                }, {
                    "zoneId": "Z2",
                    "zoneDesc": "MC2_UBN (North East)"
                }, {
                    "zoneId": "Z3",
                    "zoneDesc": "MC3_UDN (North East)"
                }, {
                    "zoneId": "Z4",
                    "zoneDesc": "MC4_NMA (North East)"
                }, {
                    "zoneId": "Z5",
                    "zoneDesc": "MC-Other (North East)"
                }, {
                    "zoneId": "Z6",
                    "zoneDesc": "Drive Test (North East)"
                }, {
                    "zoneId": "Z7",
                    "zoneDesc": "MC7_SRN(North East)"
                }, {
                    "zoneId": "Z8",
                    "zoneDesc": "MC5_RET (North East)"
                }, {
                    "zoneId": "Z9",
                    "zoneDesc": "MC6_SNK (North East)"
                }, {
                    "zoneId": "ZS",
                    "zoneDesc": "Store"
                }]
            }, {
                "regionId": "NR",
                "regionNameTh": "ภาคเหนือ",
                "regionNameEn": "North",
                "zones": [{
                    "zoneId": "N1",
                    "zoneDesc": "MC1_CMI (North)"
                }, {
                    "zoneId": "N2",
                    "zoneDesc": "MC2_PLK (North)"
                }, {
                    "zoneId": "N3",
                    "zoneDesc": "MC3_NSN (North)"
                }, {
                    "zoneId": "N4",
                    "zoneDesc": "MC5_CRI (North)"
                }, {
                    "zoneId": "N5",
                    "zoneDesc": "MC4_LPG (North)"
                }, {
                    "zoneId": "N6",
                    "zoneDesc": "MC6_TAK (North)"
                }, {
                    "zoneId": "N7",
                    "zoneDesc": "MC1_CMI (North)"
                }]
            }, {
                "regionId": "SR",
                "regionNameTh": "ภาคใต้",
                "regionNameEn": "South",
                "zones": [{
                    "zoneId": "S1",
                    "zoneDesc": "MC1_SNI(South)"
                }, {
                    "zoneId": "S2",
                    "zoneDesc": "MC2_HYI(South)"
                }, {
                    "zoneId": "S3",
                    "zoneDesc": "MC3_NRT(South)"
                }, {
                    "zoneId": "S4",
                    "zoneDesc": "MC4_PKT(South)"
                }, {
                    "zoneId": "S5",
                    "zoneDesc": "MC5_TRG(South)"
                }, {
                    "zoneId": "S6",
                    "zoneDesc": "MC6_CPN(South)"
                }, {
                    "zoneId": "S7",
                    "zoneDesc": "MC7_YLA(South)"
                }, {
                    "zoneId": "SS",
                    "zoneDesc": "Store_SR"
                }]
            }],
            "version": "1",
            "userId": "7478"
        };
        //Region selec index
        var indexRegion = 0;
        // 
        var _getJobStatusTTSME = {
            "jobStatus": [{
                "jbStatusId": "01",
                "status": "Assign"
            }, {
                "jbStatusId": "02",
                "status": "Accept"
            }, {
                "jbStatusId": "03",
                "status": "Initiate"
            }, {
                "jbStatusId": "04",
                "status": "On-Site"
            }, {
                "jbStatusId": "05",
                "status": "Report"
            }, {
                "jbStatusId": "06",
                "status": "Config Update"
            }, {
                "jbStatusId": "07",
                "status": "Reject"
            }, {
                "jbStatusId": "08",
                "status": "Close"
            }, {
                "jbStatusId": "09",
                "status": "Transfer"
            }, {
                "jbStatusId": "10",
                "status": "Report(Request more detail)"
            }],
            "version": "1"
        };
        var _getPriorityTTSME = {
            "priorityList": [{
                "id": "1",
                "name": "None"
            }, {
                "id": "2",
                "name": "Minor"
            }, {
                "id": "3",
                "name": "Major"
            }, {
                "id": "4",
                "name": "Critical"
            }],
            "version": "1"
        };

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
            assignBy: "",
            setTmp: function() {
                // alert("Region");
                // ddlregion
                if (kendo.ui.DropDownList) {
                    $("#ddlregion").kendoDropDownList({
                        change: function(e) {
                            if (e.sender.selectedIndex != 0) {
                                indexRegion = e.sender.selectedIndex;
                                // ddlzone
                                if (kendo.ui.DropDownList) {
                                    $("#ddlzone").kendoDropDownList({
                                        dataTextField: "zoneDesc",
                                        dataValueField: "zoneId",
                                        optionLabel: "---Select---",
                                        dataSource: new kendo.data.DataSource({
                                            transport: {
                                                read: function(operation) {
                                                    if (app.configService.isMorkupData) {
                                                        var response = _getRegionListTTSME.regions[indexRegion - 1];
                                                        operation.success(response);
                                                    } else {
                                                        var response = _getRegionListTTSME.regions[indexRegion - 1];
                                                        operation.success(response);
                                                    }
                                                }
                                            },
                                            schema: {
                                                data: "zones"
                                            }
                                        })
                                    });
                                }
                            } else {
                                if (kendo.ui.DropDownList) {
                                    $("#ddlzone").kendoDropDownList();
                                    var dropdownlist = $("#ddlzone").data("kendoDropDownList");
                                    dropdownlist.select(0);
                                    dropdownlist.destroy();
                                }
                            }
                        },

                        dataTextField: "regionNameEn",
                        dataValueField: "regionId",
                        optionLabel: "---Select---",
                        dataSource: new kendo.data.DataSource({
                            transport: {
                                read: function(operation) {
                                    if (app.configService.isMorkupData) {
                                        var response = _getRegionListTTSME;
                                        operation.success(response);
                                    } else {
                                        $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                            beforeSend: app.loginService.viewModel.checkOnline,
                                            type: "POST",
                                            timeout: 180000,
                                            url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getRegionListTTSME.json',
                                            data: JSON.stringify({
                                                "token": localStorage.getItem("token"),
                                                "userId": JSON.parse(localStorage.getItem("profileData")).userId,
                                                "version": "2"
                                            }),
                                            dataType: "json",
                                            contentType: 'application/json',
                                            success: function(response) {
                                                _getRegionListTTSME = response;
                                                operation.success(response);
                                            },
                                            error: function(xhr, error) {
                                                if (!app.ajaxHandlerService.error(xhr, error)) {
                                                    navigator.notification.alert(xhr.status + ' ' + error,
                                                        function() {}, "get regions", 'OK');
                                                }
                                                return;
                                            }
                                        });
                                    }
                                }
                            },
                            schema: {
                                data: "regions"
                            }
                        })
                    });
                }
                // ddlstatus
                if (kendo.ui.DropDownList) {
                    $("#ddlstatus").kendoDropDownList({
                        dataTextField: "status",
                        dataValueField: "jbStatusId",
                        optionLabel: "---Select---",
                        dataSource: new kendo.data.DataSource({
                            transport: {
                                read: function(operation) {
                                    if (app.configService.isMorkupData) {
                                        var response = _getJobStatusTTSME;
                                        operation.success(response);
                                    } else {
                                        $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                            beforeSend: app.loginService.viewModel.checkOnline,
                                            type: "POST",
                                            timeout: 180000,
                                            url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getJobStatus.json',
                                            data: JSON.stringify({
                                                "token": localStorage.getItem("token"),
                                                "userId": JSON.parse(localStorage.getItem("profileData")).userId,
                                                "version": "2"
                                            }),
                                            dataType: "json",
                                            contentType: 'application/json',
                                            success: function(response) {
                                                _getJobStatusTTSME = response;
                                                //store response
                                                //localStorage.setItem("regionData", JSON.stringify(response));
                                                //pass the pass response to the DataSource
                                                //navigator.notification.alert(JSON.stringify(response),
                                                //                        function () { }, "Get Team failed", 'OK');
                                                operation.success(response);
                                                ////console.log("Multi :" + JSON.stringify(response));
                                                ////console.log("fetch Multiple job type : Complete");
                                            },
                                            error: function(xhr, error) {
                                                if (!app.ajaxHandlerService.error(xhr, error)) {
                                                    ////console.log("fetch Multiple job type");
                                                    ////console.log(xhr);
                                                    ////console.log(error);
                                                    navigator.notification.alert(xhr.status + ' ' + error,
                                                        function() {}, "get jobStatus", 'OK');
                                                }
                                                return;
                                            }
                                        });
                                    }
                                }
                            },
                            schema: {
                                data: "jobStatus"
                            }
                        })
                    });
                }
                // ddlpiority
                if (kendo.ui.DropDownList) {
                    $("#ddlpiority").kendoDropDownList({
                        dataTextField: "name",
                        dataValueField: "id",
                        optionLabel: "---Select---",
                        dataSource: new kendo.data.DataSource({
                            transport: {
                                read: function(operation) {
                                    // alert("init");
                                    if (app.configService.isMorkupData) {
                                        var response = _getPriorityTTSME;
                                        operation.success(response);
                                    } else {
                                        $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                            beforeSend: app.loginService.viewModel.checkOnline,
                                            type: "POST",
                                            timeout: 180000,
                                            url: app.configService.serviceUrl + 'post-json.service?s=master-service&o=getPriority.json',
                                            data: JSON.stringify({
                                                "token": localStorage.getItem("token"),
                                                "userId": JSON.parse(localStorage.getItem("profileData")).userId,
                                                "version": "2"
                                            }),
                                            dataType: "json",
                                            contentType: 'application/json',
                                            success: function(response) {
                                                _getPriorityTTSME = response;
                                                //store response
                                                //localStorage.setItem("regionData", JSON.stringify(response));
                                                //pass the pass response to the DataSource
                                                //navigator.notification.alert(JSON.stringify(response),
                                                //                        function () { }, "Get Team failed", 'OK');
                                                operation.success(response);
                                                ////console.log("Multi :" + JSON.stringify(response));
                                                ////console.log("fetch Multiple job type : Complete");
                                            },
                                            error: function(xhr, error) {
                                                if (!app.ajaxHandlerService.error(xhr, error)) {
                                                    ////console.log("fetch Multiple job type");
                                                    ////console.log(xhr);
                                                    ////console.log(error);
                                                    navigator.notification.alert(xhr.status + ' ' + error,
                                                        function() {}, "get priorityList", 'OK');
                                                }
                                                return;
                                            }
                                        });
                                    }
                                }
                            },
                            schema: {
                                data: "priorityList"
                            }
                        })
                    });
                }
            },
            showResult: function() {
                alert('');
                        var that = this;
                        //
                        var jobid = that.get("jobid");
                        alert(jobid);
                        //
                        var ddlregion = ($("#ddlregion").data("kendoDropDownList") ? $("#ddlregion").data("kendoDropDownList").value() : "");
                        alert(ddlregion);
                        //
                        var ddlzone = ($("#ddlzone").data("kendoDropDownList") ? $("#ddlzone").data("kendoDropDownList").value() :"");
                        alert(ddlzone);
                        //
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
                        //
                        var ddlstatus = ($("#ddlstatus").data("kendoDropDownList") ? $("#ddlstatus").data("kendoDropDownList").value() : "");
                        alert(ddlstatus);
                        //
                        var ddlpiority = ($("#ddlpiority").data("kendoDropDownList") ? $("#ddlpiority").data("kendoDropDownList").value() : "");
                        alert(ddlpiority)
                        //
                        var title = that.get("title");
                        alert(title);
                        //
                        var siteNameThai = that.get("siteNameThai");
                        alert(siteNameThai);
                        //
                        var assignTo = that.get("assignTo");
                        alert(assignTo);
                        //
                        var assignBy = that.get("assignBy");
                        alert(assignBy);


                            $.ajax({ //using jsfiddle's echo service to simulate remote data loading
                                            beforeSend: app.loginService.viewModel.checkOnline,
                                            type: "POST",
                                            timeout: 180000,
                                            url: app.configService.serviceUrl + 'post-json.service?s=transaction-service&o=getPowerSearchTTSME.json',
                                            data: JSON.stringify({
                                                "token": localStorage.getItem("token"),
                                                "userId": JSON.parse(localStorage.getItem("profileData")).userId,
                                                "version": "2",
                                                "assignBy": assignBy,
                                                //
                                                "assignDateFrom": assignDateFrom,
                                                "assignDateTo": assignDateTo,
                                                "assignTo": assignTo,
                                                //
                                                "finishDateFrom": finishDateFrom,
                                                "finishDateTo": finishDateTo,
                                                "jobId": jobid,
                                                "page": "",
                                                "priority": ddlpiority,
                                                "region": ddlregion,
                                                "siteCode": sitecode,
                                                "siteNameTh": siteNameThai,
                                                "status": ddlstatus,
                                                "title": title,
                                                "zone": ddlzone
                                            }),
                                            dataType: "json",
                                            contentType: 'application/json',
                                            success: function(response) {
                                                console.log(response);
                                                // _getPriorityTTSME = response;
                                                //store response
                                                //localStorage.setItem("regionData", JSON.stringify(response));
                                                //pass the pass response to the DataSource
                                                //navigator.notification.alert(JSON.stringify(response),
                                                //                        function () { }, "Get Team failed", 'OK');
                                                operation.success(response);
                                                ////console.log("Multi :" + JSON.stringify(response));
                                                ////console.log("fetch Multiple job type : Complete");
                                            },
                                            error: function(xhr, error) {
                                                // if (!app.ajaxHandlerService.error(xhr, error)) {
                                                //     ////console.log("fetch Multiple job type");
                                                //     ////console.log(xhr);
                                                //     ////console.log(error);
                                                //     navigator.notification.alert(xhr.status + ' ' + error,
                                                //         function() {}, "get priorityList", 'OK');
                                                // }
                                                // return;
                                            }
                                        });

                    },
                });
            app.powerSearchService = {
                viewModel: new powerSearchViewModel(),
                init: function() {
                    // alert("init");
                    app.powerSearchService.viewModel.setTmp();
                    ////console.log('loading Login');
                },

                // show: function() {
                //     // alert("show");
                //     //app.powerSearchService.viewModel.checkBypass();
                //     //navigator.splashscreen.hide();
                // },
            show: function () {
            ////console.log("myteam show start");
            app.myService.viewModel.showLoading();
            var isOffline = app.loginService.viewModel.get("isOffline");
            if (!isOffline) {
                    sleep(1000);
                //setTimeout(function () {
                    app.myService.viewModel.loadMy();
                //}
                    //, 1000);
            } else {
                if (app.loginService.viewModel.get("isOffline") != true) {
                    navigator.notification.alert("offline",
                        function () {
                            app.myService.viewModel.hideLoading();
                         }, "Internet Connection", 'OK');
                }
            }
            //app.myService.viewModel.hideLoading(////console.logle.debug("myteam hide hide");
        },
                hide: function() {
                    // alert("hide");
                    //navigator.splashscreen.hide();
                },
            };
        })(window);
