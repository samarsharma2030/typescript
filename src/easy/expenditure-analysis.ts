interface Transaction {
    id: number;
    timestamp: number;
    price: number;
    category: string;
    itemName: string;
}
interface CategoryTotal{
    category: string;
    totalSpent: number;
}
function calculateTotalSpentByCategory(transactions: Transaction[]): CategoryTotal[]{
    const result: CategoryTotal[] = [];
    const categories: Set<string> = new Set();

    transactions.forEach(function(transaction){
        categories.add(transaction.category);
    })

    categories.forEach(function(category){
        let total = 0;
        transactions.forEach(function(transaction){
            if(category === transaction.category){
                total += transaction.price;
            };
        });
        const ans: CategoryTotal = { category: category, totalSpent: total};
        result.push(ans);
    })
    return result;
}

const transactions: Transaction[] = [
    {id: 1, timestamp: 189739028, price: 20, category: "Fruits", itemName: "Apple"}
]

const finalValue: CategoryTotal[] = calculateTotalSpentByCategory(transactions);
console.log(finalValue);