async function main() {
  const { bpi } = await fetchData()

  const highestPrice = Math.max(...Object.values(bpi))

  const [dateString] = Object.entries(bpi).find(
    ([, price]) => price === highestPrice
  )

  const date = moment(dateString, 'YYYY-MM-DD')

  console.log(date.format('MMMM Do'))
}

main()
