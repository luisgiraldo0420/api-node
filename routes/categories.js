const express = require("express");
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/categories");
const uploadMiddelware = require("../utils/handleStorage");
const {validatorCreate, validatorGetItem} = require ("../validators/categories");
const autMiddleware = require('../midelware/session');
const checkRol = require("../midelware/rol");

/**
 * http://localhost:3001/api
 * @openapi
 * /categories:
 *     get:
 *      tags:
 *        - categories
 *          summary: "mostrar categorias"
 *          description: "Esta ruta es para consultar las categorias"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/categories"
 *          responses:
 *                  '201':
 *                      description: lista de categorias 
 *                  '403':
 *                      description: Error por validacion
 */
router.get("/", autMiddleware, getItems);
/**
 * Get category
 * @openapi
 * /categories/{id}:
 *    get:
 *      tags:
 *        - categories
 *      summary: "Detalle categoria"
 *      description: Obten el detalle de una categoria
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de categoria a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la categoria.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/categories'
 *        '422':
 *          description: Error de validacion.
 */

router.get("/:id", validatorGetItem, getItem);
/**
 * almacenamos la imagen en el servidor
 */
/**
 * Register new category
 * @openapi
 * /tracks:
 *    post:
 *      tags:
 *        - categories
 *      summary: "Register category"
 *      description: Registra una categoria y obtener el detalle del registro
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/categories"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *      '403':
 *        description: No tiene permisos '403'
 */
router.post("/",autMiddleware, checkRol(["ADMIN"]), uploadMiddelware.single("myfile"), validatorCreate, createItem);

/**
 * Update category
 * @openapi
 * /categories/{id}:
 *    put:
 *      tags:
 *        - categories
 *      summary: "Update category"
 *      description: Actualiza una categoria y obtener el detalle del registro
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de categoria a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objeto actualizado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/categories"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *        content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/categories'
 *      '403':
 *        description: No tiene permisos '403'
 */

router.put("/:id", uploadMiddelware.single("myfile"), validatorGetItem, validatorCreate, updateItem);

/**
 * Delete category
 * @openapi
 * /categories/{id}:
 *    delete:
 *      tags:
 *        - categories
 *      summary: "Eliminar categoria"
 *      description: Elimiar el detalle de una categoria
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de categoria a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la categoria.
 *        '422':
 *          description: Error de validacion.
 */

router.delete("/:id", validatorGetItem, deleteItem);

module.exports= router;