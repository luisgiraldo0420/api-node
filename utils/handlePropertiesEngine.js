const ENGINE_DB = process.env.ENGINE_DB;
const getProperties = () => {
    const data = {
        nosql:{
            user_id:'_id'
        },
        postgres:{
            user_id:'id'
        }
    }
    return data[ENGINE_DB]
}

module.exports = getProperties