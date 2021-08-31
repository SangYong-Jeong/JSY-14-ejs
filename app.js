/************* global init ***************/
const port = 3000
const express = require('express')
const app = express()


/************ view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')


/************* middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/************* router init ***************/
app.use('/', express.static('./public'))
app.get('/about', (req, res, next) => {
	const title = 'About Me'
	const file = 'about'
	const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iste, exercitationem veniam quis magni incidunt voluptates, dolor consectetur assumenda, enim necessitatibus amet reiciendis quae! Delectus, illum? Laborum nemo magnam ullam?'
	res.render('site/about',{title, file, content})
})

app.get('/pf', (req, res, next) => {
	const title = 'Portfolio'
	const file = 'pf'
	const lists = [
		{ title: 'PF_01', src: 'f1.jpg' },
		{ title: 'PF_02', src: 'f2.jpg' },
		{ title: 'PF_03', src: 'f3.jpg' },
	]
	res.render('site/pf',{title, file, lists})
})


/************* server function *************/
app.listen(port, () => {console.log('http://127.0.0.1:'+port)})