import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{
    private cnpj: number;
    constructor( cnpj: number, name: string, accountNumber: number, balance: number){
        super(name,accountNumber, balance);
        this.cnpj = cnpj;
    }

    getLoan = (loan: number): string =>{
        this.validAccount();
        this.balance += loan;
        return `Você fez um empréstimo de ${loan} reais. Seu saldo atual é de ${this.balance} reais`;
    }
}
