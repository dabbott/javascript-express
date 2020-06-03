type BitcoinPriceIndex = {
  time: {
    updated: string
    updatedISO: string
  }
  disclaimer: string
  bpi: {
    [key: string]: number
  }
}
