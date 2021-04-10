export function priceToString(price, prefix, suffix, separator) {
  // null value guard
  if (typeof (price) === 'number') {
    let priceString = price.toString();
    // check if price has decimal places
    let decimalString = '';
    for (let i = priceString.length - 1; i > 0; i--) {
      if (priceString[i] === '.') {
        decimalString = ',' + priceString.slice(i + 1);
        priceString = priceString.slice(0, i);
        break;
      }
    }
    let count = 0;
    for (let i = priceString.length - 1; i > 0; i--) {
      count++;
      if (count === 3) {
        count = 0;
        priceString = priceString.slice(0, i) + separator + priceString.slice(i, priceString.length)
      }
    }
    return `${prefix} ${priceString}${decimalString}${suffix}`;
  }
  return '';
}
