const currencies = Array.from(new Set(transactions.map(t => t.currency)))

console.log(currencies.join(', '))
