const { Router } = require("express");

const NotesController = require('../controllers/NotesController');

const notesRoutes = Router();

/* Caso queira usar Middleware
function myMiddleware(request, response, next) {
    if(!request.body.isAdmin) {
        return response.json({ message: "User unauthorized"})
    }

    next();
}
*/

const notesController = new NotesController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

notesRoutes.use(ensureAuthenticated);

notesRoutes.get('/', notesController.index);
notesRoutes.post('/', /*myMiddleware,*/ notesController.create);
notesRoutes.get('/:id', /*myMiddleware,*/ notesController.show);
notesRoutes.delete('/:id', /*myMiddleware,*/ notesController.delete);

module.exports = notesRoutes;