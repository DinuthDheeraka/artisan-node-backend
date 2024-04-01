const findOneByModel = async (model, filter) => {
    try {
        return await model.findOne(filter)
    } catch (e) {
        throw e;
    }
}

module.exports = {findOneByModel}