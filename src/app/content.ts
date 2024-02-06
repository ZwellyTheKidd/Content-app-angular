export interface Content{
 
    id?: number;
    title: string,
    desc: string,
    status: string,
    contentType: string,
    dateCreated: Date,
    dateUpdated: Date | null; 
    url: string,

}
