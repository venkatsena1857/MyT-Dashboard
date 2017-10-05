import { Component, OnInit, AfterViewInit } from '@angular/core';

declare interface DeedsDataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'app-deeds',
    templateUrl: 'deeds.component.html'
})

export class DeedsComponent implements OnInit, AfterViewInit {
    public deedDataTable: DeedsDataTable;

    ngOnInit() {
        this.deedDataTable = {
            headerRow: [ 'Sl. No', 'Start Year', 'Start Month', 'Deed Category', 'Activity', 'Description', 'Actions' ],
            footerRow: [ 'Sl. No', 'Start Year', 'Start Month', 'Deed Category', 'Activity', 'Description', 'Actions' ],

            dataRows: []
                
         };

    }

    ngAfterViewInit() {
        alert("I ran ");
        $('#deedDataTable').DataTable({
            'pagingType': 'full_numbers',
            'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
            responsive: true,
            language: {
            search: '_INPUT_',
            searchPlaceholder: 'Search records',
            }

        });

        const table = $('#deedDataTable').DataTable();

        // Edit record
        table.on( 'click', '.edit', function () {
            const $tr = $(this).closest('tr');

            const data = table.row($tr).data();
            alert( 'You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.' );
        } );

        // Delete a record
        table.on( 'click', '.remove', function (e: any) {
            const $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        } );

        // Like record
        table.on( 'click', '.like', function () {
            alert('You clicked on Like button');
        });

        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }
}


