//Method level decorator
function Logger() {
    return function(target:any, prop: any, propDescriptor: PropertyDescriptor) {
        console.log('Transaction completed successfully!');
    }
}

//property decorator
function CustInfo(label: string) {
    return function(target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}

//Class decorator
function Entity(target: any) {
    console.log('This class is entity class');
}

class Order {
    constructor(public orderId : string, public itemName: string, public quantity: number) { }
}

@Entity
class Customer {
    @CustInfo("2")
    customerId: number;

    @CustInfo("Niki")
    private name: string;

    constructor(customerId, name) {
        this.customerId = customerId;
        this.name = name;
    }
    
    @Logger()
    public transact(order: Order): void{
        console.log(`${order.itemName} has been ordered by customer ${this.name}, quantity: ${order.quantity}, customer ID: ${this.customerId}, transaction ID: ${order.orderId}`)
    }
}


let cust = new Customer(1, 'Ram');
cust.transact(new Order("T1","Watch", 1));
