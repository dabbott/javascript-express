const largest = currencies.map(currency => {
  const relevantTransactions = transactions.filter(t => t.currency === currency)
  const maxValue = Math.max(...relevantTransactions.map(t => t.value))
  const maxTransaction = relevantTransactions.find(t => t.value === maxValue)

  return `${maxTransaction.currency}: ${maxTransaction.value}`
})

console.log(largest.join(', '))
