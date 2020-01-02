export class Loan {
    constructor(public loanAmount: any, public existingEmi: any) {
        this.loanAmount = loanAmount;
        this.existingEmi = existingEmi;
    }
}