import NewsPost from '../../../models/news-post.model.mjs';

export default class NewsPostsProviderService {
    static async getPosts(page, limit) {
        return NewsPost.aggregate([
            {
                $facet: {
                    metadata: [{ $count: 'totalCount' }],
                    data: [{ $skip: (page - 1) * limit }, { $limit: limit }]
                }
            }
        ]);
    }

    static async getPost(id) {
        return NewsPost.findOne({ _id: id });
    }

    static async createPost(post) {
        const dbPost = new NewsPost(post);
        await dbPost.save();

        return dbPost;
    }

    static async editPost(id, partialPost){
        return NewsPost.findByIdAndUpdate(id, partialPost).exec();
    }

    static async deletePost(id) {
        return NewsPost.findByIdAndDelete(id);
    }
}