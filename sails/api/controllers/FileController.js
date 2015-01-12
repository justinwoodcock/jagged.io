/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    upload: function  (req, res) {
      if(req.method === 'GET')
          return res.json({'status':'GET not allowed'});                       // Call to /upload via GET is error

      var uploadFile = req.file('files');

      uploadFile.upload({ dirname: '/Users/justin/Sites/jagged/webapp/ui/app/images/'}, function onUploadComplete (err, files) {
                                                                              
          if (err) return res.serverError(err);                              // IF ERROR Return and send 500 error with error
          
          res.json({status:200,file:files});
      });
  }
};