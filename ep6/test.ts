
const animalName: string = 'แมว,หมู,หมา,กา,ไก่'

const animalNameArray = animalName.split(',')

console.log(animalNameArray)



const animalName: string = 'แมว*หมู*หมา*กา*ไก่'

const animalNameArray: string[] = animalName.split('*')

animalNameArray.pop() // ดึงตัวท้าย

console.log('ดึงตัวท้าย', animalNameArray)

animalNameArray.push('กาปีบาร่า') // ใส่ใหม่

console.log('ใส่ใหม่', animalNameArray)

animalNameArray.shift()

console.log('ดึงตัวหน้า', animalNameArray)

animalNameArray.unshift('แรด')

console.log('ใส่ตัวหน้า', animalNameArray)

console.log('เรียง ก-ฮ:', animalNameArray.sort())
console.log('เรียง ฮ-ก:', animalNameArray.reverse())
console.log('เรียง ก-ฮ:', animalNameArray.slice(0, 2))



const fruits = ["Banana", "Orange", "Apple", "Mango",]
console.log('เรียง A-Z:', fruits.sort())
console.log('เรียง Z-A:', fruits.reverse())


const me = {
    firstname: "Thanapat",
    lastname: 'Sakoonchotpipat',
    age: 21
}
    // ประวัติของฉัน
    // ชิ่อ:Thanapat
    // นามสกุล:Sakoonchotpipat
    // อายุ:21





































