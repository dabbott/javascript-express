const lines = data.split('\n').slice(1)

type Transaction = {
  id: string
  currency: string
  value: number
}

const transactions: Transaction[] = lines.map(line => {
  const [id, currency, valueString] = line.split(',')
  return { id, currency, value: Number(valueString) }
})
