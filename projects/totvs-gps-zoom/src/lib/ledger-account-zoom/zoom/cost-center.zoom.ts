import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { CostCenterService } from 'totvs-gps-api';
import { Injectable } from '@angular/core';
import { PoLookupFilter, PoLookupColumn, PoLookupFilteredItemsParams, PoLookupResponseApi } from '@po-ui/ng-components';

@Injectable()
export class CostCenterZoom implements PoLookupFilter {

    constructor(private service:CostCenterService) {
        this.createColumns();
    }
 
    private readonly columnNames = [
        'code',
        'description'
    ];
    private readonly columnDefinition = {
        'code': <PoLookupColumn>{ property: 'code', label: 'Código' , width: '20%'},
        'description': <PoLookupColumn>{ property: 'description', label: 'Descrição', width: '80%' },
    };

    public COLUMNS: Array<PoLookupColumn>; 
    public FIELD_LABEL: string = 'description';
    public FIELD_VALUE: string = 'code';

    private createColumns() {
        this.COLUMNS = [];
        this.columnNames.forEach(column => this.COLUMNS.push(this.columnDefinition[column]));
    }

    fieldFormat(value) {
        if (value) {
            let _cod = value.code;
            let _des = value.description;
            if (_cod != undefined)
                return `${_cod} - ${_des}`;
        }
        return '';
    }

    getFilteredItems(params: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
        let _filter = {
            limitDate: params.filterParams[0], 
            ledgerAccountCode: params.filterParams[1]
        };
        let result = this.service.getByFilter(_filter, params.page, params.pageSize);
        return from(result);
    }

    getObjectByValue(code, params): Observable<any> {
        let _filter = {
            limitDate: params[0], 
            ledgerAccountCode: params[1],
            code: code
        };
        let result = this.service.getByFilter(_filter, params.page, params.pageSize);
        return from(result).pipe(map(collection => {
            return collection.items[0];
        }));
    }  
}
