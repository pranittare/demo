export class Personal {
    constructor(public date: Date, public email: string, public first:string, public last: string, public mobile: number) {
        this.date = date;
        this.email = email;
        this.first = first;
        this.last = last;
        this.mobile = mobile;
    }
}