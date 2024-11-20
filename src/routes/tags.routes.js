const { Router } = require("express");

const TagsController = require('../controllers/TagsController');

const tagsRoutes = Router();

/* Caso queira usar Middleware
function myMiddleware(request, response, next) {
    if(!request.body.isAdmin) {
        return response.json({ message: "User unauthorized"})
    }

    next();
}
*/

const tagsController = new TagsController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

tagsRoutes.get('/', ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;