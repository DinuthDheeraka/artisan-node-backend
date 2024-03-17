const findOne = async (model, conditions) => {
    return await model.findOne(conditions);
}

module.exports = {findOne}