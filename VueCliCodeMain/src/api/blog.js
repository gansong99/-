import request from "./request";

/**
 * 获取博客列表数据
 */
export async function getBlogs (page = 1, limit = 10, categoryid = -1, articleCount = 1) {
  return await request.get("/api/blogs", {
    params: {
      page,
      limit,
      categoryid,
      articleCount,
    },
  });
}

/**
 * 获取博客分类
 */
export async function getBlogCategories () {
  return await request.get("/api/blogtype");
}

/**
 * 获取博客内容
*/
export async function getBlog (id, categoryId = -1, commentNumber, createDate) {
  return await request.get(`/api/blog`, {
    params: {
      id,
      categoryId,
      commentNumber,
      createDate,
    },
  });
}

/**
 * 提交评论
*/
export async function postComment (commentInfo) {
  return await request.post(`/api/comment`, commentInfo);
}

/**
 * 分页获取评论
*/
export async function getComment (blogid, page = 1, limit = 10, commentNumber = 0) {
  return await request.get(`/api/comment`, {
    params: {
      blogid,
      page,
      limit,
      commentNumber
    }
  });
}

