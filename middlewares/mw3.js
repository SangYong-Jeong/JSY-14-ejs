const mw3 = (param) => {
	return (req,rex,next) => {
		req.mw3 = 'MW3 - '+param
		next()
	}
}

module.exports = mw3