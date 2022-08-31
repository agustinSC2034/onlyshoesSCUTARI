import nike_1 from '../img/Nike/Zapatillas_Nike_Air_Force_1LV8.jpg'
import nike_2 from '../img/Nike/Zapatillas_Nike_Air_Max_Dawn.jpg'
import nike_3 from '../img/Nike/Zapatillas_Nike_Air_Max_Dia.jpg'
import adidas_1 from '../img/Adidas/Zapatillas_adidas_Continental_80.jpg'
import adidas_2 from '../img/Adidas/Zapatillas_adidas_Forum_Mid.jpg'
import adidas_3 from '../img/Adidas/Zapatillas_adidas_Ozelia.jpg'
import puma_1 from '../img/Puma/Zapatillas_Puma_Mayze.jpg'
import puma_2 from '../img/Puma/Zapatillas_Puma_Mirage.jpg'
import puma_3 from '../img/Puma/Zapatillas_Puma_RS.jpg'

const productos = [
    {
        id: 1,
        nombre: 'Nike_Air_Force_1LV8',
        img: [nike_1],
        precio: 30000,
    },
    {
        id: 2,
        nombre: 'Zapatillas_Nike_Air_Max_Dawn',
        img: [nike_2],
        precio: 20000,
    },
    {
        id: 3,
        nombre: 'Zapatillas_Nike_Air_Max_Dia',
        img: [nike_3],
        precio: 15000,
    },
    {
        id: 4,
        nombre: 'adidas_Continental_80',
        img: [adidas_1],
        precio: 15000,
    },
    {
        id: 5,
        nombre: 'Zapatillas_adidas_Forum_Mid',
        img: [adidas_2],
        precio: 20000,
    },
    {
        id: 6,
        nombre: 'Zapatillas_adidas_Ozelia',
        img: [adidas_3],
        precio: 35000,
    },
    {
        id: 7,
        nombre: 'Zapatillas_Puma_Mayze',
        img: [puma_1],
        precio: 35000,
    },
    {
        id: 8,
        nombre: 'Zapatillas_Puma_Mirage',
        img: [puma_2],
        precio: 15000,
    },
    {
        id: 9,
        nombre: 'Zapatillas_Puma_RS',
        img: [puma_3],
        precio: 25000,
    },
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))
    }, 3000)
})

export default getFetch


