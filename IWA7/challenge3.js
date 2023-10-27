const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

/*Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans (Owed: R 4582.20)

----------------------------------
  Total amount owed: R 13 976.20
----------------------------------*/

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = `{leoName} + {leoSurname} + (Owed:) + \"R\" + {leoBalance}`
const sarah = `{leoName} + {surname} + (Owed:) + \"R\" + {sarahBalance}`
const total = "Total amount owed: "
const result = ` \n ${leoName} ${leoSurname}  (Owed: R  ${Math.abs(leoBalance).toFixed(2)}) \n ${sarahName} ${sarahSurname}  (Owed: R  ${Math.abs(sarahBalance).toFixed(2)}) \n \n ------------------------------------------ \n    Total amount (Owed:  R ${(Math.abs(leoBalance)+Math.abs(sarahBalance)).toFixed(2)} ) \n ------------------------------------------`

console.log(result)