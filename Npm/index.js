const { format, formatDistance, subDays, formatRelative } = require("date-fns");
const { v4: uuid } = require("uuid")

console.log(format(new Date(), 'yyyMMdd\tHH:mm:ss'))

console.log(formatDistance(subDays(new Date(), 0), new Date(), { addSuffix: true }))

console.log(formatRelative(subDays(new Date(), 0), new Date()))


console.log(uuid())