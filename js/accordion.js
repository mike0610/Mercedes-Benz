const btns = document.querySelectorAll('.feature__link')
const lists = document.querySelectorAll('.feature-sub')

//                             Домашка
// ---------------------------------------------------------------------
// btns.forEach((btnItem, index) => {
// 	btnItem.addEventListener('click', () => {
// 		btns.forEach((btnItem) => {
// 			btnItem.classList.remove('feature__link_active')
// 		})

// 		btnItem.classList.add('feature__link_active')


// 		lists.forEach((listItem) => {
// 			listItem.classList.add('hidden')
// 		})

// 		lists[index].classList.remove('hidden')
// 	})
// })


btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		btns.forEach((btnItem, idx) => {
			if (btnItem === btn) {
				btnItem.classList.toggle('feature__link_active')
				lists[idx].classList.toggle('hidden')
			}
			else {
				btnItem.classList.remove('feature__link_active')
				lists[idx].classList.add('hidden')
			}
		})
	})
})

//                ЛОГИКА
/* 
btns.onclick = function ({ 
	console.dir('')
})
только одна ф-ция(последняя) */

/*  btn.addEventListener('click', function () {
	  console.log('1')
 })

					  или

btn.addEventListener('click', () => console.log('2'))  */  //однострочная команда

/*
btn.addEventListener('click', () => {
	console.log('2')
	console.log('3')
})
*/

//btns.addEventListener('click', () => console.log('1'))

/*
console.log(btns.length)
console.log(btns[2])
*/

/*
for (let i = 0; i < btns.length; i++) {
	console.log(btns[i])
}
*/


//                ФУНКЦИОНАЛ(застаревший)
// for (let i = 0; i < btns.length; i++) {
// 	(btns[i]).addEventListener('click', () => console.log(btns[i]))
// }

//                ФУНКЦИОНАЛ(новый)
// btns.forEach((item, index) => {
// 	item.addEventListener('click', () => console.log(item))
// })


//                ФУНКЦИОНАЛ

// btns.forEach((btnItem, index) => {
// 	btnItem.addEventListener('click', () => {
// 		btns.forEach((btnItem) => {
// 			btnItem.classList.remove('feature__link_active')
// 		})

// 		btnItem.classList.add('feature__link_active')


// 		lists.forEach((listItem) => {
// 			listItem.classList.add('hidden')
// 		})

// 		lists[index].classList.remove('hidden')
// 	})
// })





