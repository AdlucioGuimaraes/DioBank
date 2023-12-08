export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    balance: number; 
    private status: boolean = true;

    constructor (name: string , accountNumber: number, balance: number) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    setBalance = (balance: number): void =>{
        this.balance = balance;

    }

    deposit = (deposit: number): string =>{
        if(this.validateStatus()){
            this.balance += deposit;
            return `Você depositou ${deposit}. Seu saldo atual é: ${this.balance}`
        }
        return '';
    }

    withDraw = (withDraw: number): string =>{
        if(this.validateStatus()){
            if(this.balance <  withDraw){ return `Saldo insuficiente. Seu saldo é de ${this.balance}` }
            this.balance -= withDraw; 
            return `Você sacou ${withDraw}. Seu saldo atual é: ${this.balance}`
        }
        return ''; 
    }

    getBalance = (): number =>{
        return this.balance;
    }

    validAccount = () =>{
        this.validateStatus();
    }

    private validateStatus = (): boolean =>{
        if(this.status){
            return this.status;
        }

        throw new Error("Conta Inválida!")
    }
}