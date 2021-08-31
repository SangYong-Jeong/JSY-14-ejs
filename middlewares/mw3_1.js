const mw3_1 = (param) => {
	return (req,rex,next) => {
		req.mw3_1 = 'MW3_1 - '+param
		next()
	}
}

module.exports = mw3_1