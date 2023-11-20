import NewsPostsProviderService from './news-posts-provider.service.mjs';

export default class NewsPostsService {
    static async getPosts(page, limit) {
        return NewsPostsProviderService.getPosts(page, limit);
    }

    static async getPost(id) {
        return NewsPostsProviderService.getPost(id);
    }

    static async createPost(post) {
        return NewsPostsProviderService.createPost(post);
    }

    static async editPost(id, partialPost) {
        await NewsPostsProviderService.editPost(id, partialPost);
        return NewsPostsProviderService.getPost(id);
    }

    static async deletePost(id) {
        return NewsPostsProviderService.deletePost(id);
    }
}