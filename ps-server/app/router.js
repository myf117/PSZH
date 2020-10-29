module.exports = app => {
    const { router, controller } = app;
    //上传文件
    router.post('/uploadFile', controller.adminController.upFile);
}