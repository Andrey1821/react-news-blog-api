export class Routes {
    static api = '/api';

    static auth = {
        main: '/auth',
        login: '/login'
    };

    static uploads = {
        main: '/uploads',
        uploadImage: '/image'
    };

    static newsPosts = {
        main: '/news',
        newsId: '/:id'
    }
}