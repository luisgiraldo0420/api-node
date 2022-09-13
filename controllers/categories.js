const { matchedData } = require('express-validator');
const {categoriesModel} = require('../models')
const handleHttpError = require('../utils/handleError');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const  getItems = async (req, res) => {
    try {
        const user = req.user;
       const data = await categoriesModel.find({});
        res.send({data, user})  
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de mostrar la información', 403)
    }
   
}

const getItem = async (req, res) => {
    try {
       req = matchedData(req); 
       const {id} = req;
       const data = await categoriesModel.findById(id);
       res.send({data})  
    } catch (error) {
        handleHttpError(res, 'ups, error al tratar de mostrar la información')
    }
}

const createItem = async (req, res) => {

    try {
       /*  const body = req.body;
        const bodyClean =  matchedData(req); */
        const { body, file } = req;
        body.img_url = `${process.env.PUBLIC_URL}${process.env.PORT}/${file.filename}`
        const data = await categoriesModel.create(body);
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'Ups... ocurrio un error al tratar de crear la categoría', 403)

    }
   
}

const updateItem = async (req, res) => {
    try {
        /*  const body = req.body;
         const bodyClean =  matchedData(req); */
         const { body, file } = req;
         const {id} = body;
         if(file){
            body.img_url = `${process.env.PUBLIC_URL}${process.env.PORT}/${file.filename}`;
            console.log(file);
         }
         const data = await categoriesModel.findOneAndUpdate(id, body);
         res.send({data})
     } catch (error) {
         handleHttpError(res, 'Ups... ocurrio un error al tratar de crear la categoría', 403)
 
     }
}

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req); 
        const {id} = req;
        const data = await categoriesModel.delete({_id:id});
        res.send({data})  
     } catch (error) {
         handleHttpError(res, 'ups, error al tratar de eliminar la categoría')
     }
}


module.exports = 
{
    getItems, 
    getItem, 
    createItem, 
    updateItem, 
    deleteItem
}