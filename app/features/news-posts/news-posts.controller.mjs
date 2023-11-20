import ResponseBody from '../../core/response-body.mjs';
import NewsPostsService from './services/news-posts.service.mjs';

const notFoundPostError = new ResponseBody('Post isnt found').error;


const commonError = new ResponseBody('Something went wrong').error;

class NewsPostsController {
    async getPosts(req, res) {
        try {
            let { page, limit } = req.query;

            page = parseInt(page, 10) || 1;
            limit = parseInt(limit, 10) || 10;

            const postsData = await NewsPostsService.getPosts(page, limit);

            const pagination = { total: postsData[0].metadata[0].totalCount, page, limit };
            const resData = new ResponseBody(postsData[0].data, pagination).data;

            return res.status(200).json(resData);
        } catch (e) {
            return res.status(500).json(commonError);
        }
    }

    async getPost(req, res) {
        try {
            const id = req.params.id;
            const post = await NewsPostsService.getPost(id);

            if (!post) {
                return res.status(400).json(notFoundPostError);
            }

            const resData = new ResponseBody(post).data;

            return res.status(200).json(resData);
        } catch (e) {
            return res.status(500).json(commonError);
        }
    }

    async createPost(req, res) {
        try {
            const post = req.body;
            const dbPost = await NewsPostsService.createPost(post);

            const resData = new ResponseBody(dbPost).data;

            return res.status(201).json(resData);
        } catch (e) {
            return res.status(500).json(commonError);
        }
    }

    async editPost(req, res) {
        try {
            const id = req.params.id;
            const partialPost = req.body;
            let dbPost =  await NewsPostsService.editPost(id, partialPost);

            if (!dbPost) {
                return res.status(400).json(notFoundPostError);
            }

            const resData = new ResponseBody(dbPost).data;

            return res.status(201).json(resData);
        } catch (e) {
            return res.status(500).json(commonError);
        }

    }

    async deletePost(req, res) {
        try {
            const id = req.params.id;
            const post = await NewsPostsService.deletePost(id);

            if (!post) {
                return res.status(400).json(notFoundPostError);
            }

            const resData = new ResponseBody(post).data;

            return res.status(200).json(resData);
        } catch (e) {
            return res.status(500).json(commonError);
        }

    }
}

export default new NewsPostsController();