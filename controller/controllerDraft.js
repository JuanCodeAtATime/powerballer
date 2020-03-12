module.exports = {
    create: async (req, res) => {
        console.log(req.params);
        user = req.params;
        id = user.id;
        const { gameNo, no1, no2, no3, no4, no5, powerball } = req.body;
        const numbers = await Numbers.create({
            gameNo,
            no1,
            no2,
            no3,
            no4,
            no5,
            powerball,
            user: id
        });
        await numbers.save();

        const userById = await User.findById(id);

        userById.number.push(numbers);
        await userById.save();

        return res.send(userById);
    },
    userByNumbers: async (req, res) => {
        const { id } = req.params;
        const userByNumbers = await Numbers.findById(id).populate('user');
        res.send(userByNumbers);
    }
}
