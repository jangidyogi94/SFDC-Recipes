import LightningDatatable from 'lightning/datatable';
import DatatableLookupTemplate from "./lookupTemplate.html";

export default class CustomDatatable extends LightningDatatable {
    static customTypes = {
        lookup: {
            template: DatatableLookupTemplate,
            standardCellLayout: true,
            typeAttributes: ['label', 'value', 'placeholder', 'fieldName', 'object', 'context', 'variant', 'name', 'fields', 'target']
        }
    };
}