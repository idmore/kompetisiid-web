/**
 * الرَّحِيم الرَّحْمَنِ اللَّهِ بِسْمِ
 * created by yussan 23 Oct 2016 18:29
 */

export function getNews(req, res, next)
{
    let {params} = req
    params.query = req.query
    req.reqdata = {
        method: 'get',
        params,
        url: '/berita/list',
    }

    next()
}

export function getRelated(req, res, next)
{
    let {params} = req
    params.query = req.query
    req.reqdata = {
        method: 'get',
        params,
        url: `/berita/related/${req.params.id}`,
    }

    next()
}

export function getNewsDetail(req, res, next)
{
    req.reqdata = {
        method: 'get',
        params: req.params,
        url: `/berita/read/${req.params.id}`,
    }

    next()
}