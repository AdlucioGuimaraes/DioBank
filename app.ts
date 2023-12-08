import { CompanyAccount } from './src/models/CompanyAccount';
import { EspecialAccount } from './src/models/EspecialAccount';
import { PersonAccount } from './src/models/PersonAccount';

const personPhysical: PersonAccount  = new PersonAccount(1,'Adlucio', 2525, 200);
const especial: EspecialAccount = new EspecialAccount('Teste', 456, 100);
const company: CompanyAccount =  new CompanyAccount(123, 'AdTech', 12345, 100);

console.log(personPhysical.deposit(200));
console.log(personPhysical.withDraw(201));
console.log(especial.deposit(50));
console.log(especial.balance)
console.log(personPhysical.withDraw(10));
console.log(company.getLoan(1500));
