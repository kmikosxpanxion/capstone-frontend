export class Report {

    id!: number;
    name!: string;
    historyMaxDays!: number;
    nonSpoolFile!: number;
    description: string | undefined;
    expirationDays!: number;
    skipPages!: number;
    creationDate!: string;
    allowPrint!: number;
    addedBy!: string;
    modifiedBy!: string;
    as400Id!: number;
    status!: string;
    deletedBy!: string;
    multiReports!: number;
    fileName!: string;
    allowOverrides!: number;
    numCols!: number;
    confidential!: string;
    biReport!: string;
    help: string | undefined;
    detailDescription: string | undefined;
    combinePdfReport: number | undefined;

}
