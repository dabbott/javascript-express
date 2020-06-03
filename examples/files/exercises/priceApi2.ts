async function fetchData(): Promise<BitcoinPriceIndex> {
  const result = await fetch(COINDESK_API)

  return await result.json()
}
