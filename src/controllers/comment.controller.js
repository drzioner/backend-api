let _commentService = null

class CommentController {
    constructor({ CommentService }) {
        _commentService = CommentService
    }

    async get(req, res) {
        const { commentId } = req.params
        const comment = await _commentService.get(commentId)
        return res.send(comment)
    }

    async update(req, res) {
        const { body } = req
        const { commentId } = req.params
        const updatedComment = await _commentService.update(commentId, body)
        return res.send(updatedComment)
    }

    async delete(req, res) {
        const { commentId } = req.params
        const deletedComment = await _commentService.delete(commentId)
        return res.send(deletedComment)
    }

    async getIdeaComments(req, res) {
        const { ideaId } = req.params
        const commentsIdea = await _commentService.getIdeaComments(ideaId)
        return res.send(commentsIdea)
    }

    async createComment(req, res) {
        const { body } = req
        const { ideaId } = req.params
        const createdComment = await _ideaService.createComment(body, ideaId)
        return res.status(201).send(createdComment)
    }
}

module.exports = CommentController
