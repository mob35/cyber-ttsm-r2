filteraccept : function () {
        var dataSource = new kendo.data.DataSource({
            type: "",
            transport: {
                read: {
                    
                }
            },
            sort: {
                field: "",
                dir: ""
            },
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            pageSize: 50
        });

        $("#filterable-listview").kendoMobileListView({
            dataSource: dataSource,
            template: $("#mobile-listview-filtering-template").html(),
            filterable: {
                field: "",
                operator: ""
            },
            endlessScroll: true
        });
    }
