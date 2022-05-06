
exports.getSomething = async (req, res, next) => {

    res.status(200).json({
        status: 200,
        success: true,
        data: 'Controller dotor bn shvv.'
    })
};

exports.postSomething = async (req, res, next) => {
    const myTimeout = setTimeout(myGreeting, 5000);

    console.log(req.body);
    function myGreeting() {
        res.status(200).json({
            status: 200,
            success: true,
            data: 'postSomething'
        });
    }
    

};