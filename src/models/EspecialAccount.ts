import { DioAccount } from "./DioAccount";

export class EspecialAccount extends DioAccount {
    constructor(name: string, accountNumber:  number, balance: number){
        super(name,accountNumber,balance);
    }

    deposit = (deposit: number): string =>{
        this.validAccount()
        this.balance += deposit+10;
        return `Você depositou ${deposit}. Seu saldo é de ${this.balance}`;
    }
}