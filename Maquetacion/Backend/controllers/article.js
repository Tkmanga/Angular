'use strict'
var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Article = require('../models/article');
var controller = {
    datosCurso: (req,res) =>{

    var mensaje = req.body.hola;
    return res.status(200).send(
        {curso:"master en fw js ",
            autor:"vitor robles web",
            url:"victorroblesweb.es",
            mensaje
        });
    },
    test: (req, res)=>{
        return res.status(200).send({
            message: 'soy la accion test de mi controlador de articulos '
        });
    },
    save: (req,res) => {
        //recorger los parametros por post
        var params = req.body;
        //validar datos (validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch (e) {
            return res.status(200).send({
                status: 'error',
                message: 'faltan datos'
            });
        }

        if(validate_title && validate_content){
            //crear el objeto a guardar
            var article = new Article();

            //asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;


            //guardar articulo
            article.save((err, articleStored)=>{
                if(err||!articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'el articulo no se a guardado'
                    });
                 }

                //devolver una respuesta
                return res.status(200).send({
                    status: 'sucess',
                    article: articleStored
                });
            })

        }else{
            return res.status(200).send({
                status: 'error',
                message: 'los datos no son validos'
            });
        }

    },
    getArticles: (req,res) => {
        var query = Article.find({});
        var last = req.params.last;
        if(last || last!= undefined){
            query.limit(5);
        }
        //find
        query.sort("-_id").exec((err,articles) => {
            if(err){
                return res.status(404).send({
                    status: 'error',
                    message: 'Error al devolver los articulos!!'
                });
            }
            if(!articles){

                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar!!'
                });
            }
            return res.status(200).send({
                status: 'sucess',
                articles
            });
        });

    },
    getArticle: (req,res) => {
        //recojer el id de la url
        var articleId = req.params.id;

        //comprobar que existe
        if(!articleId || articleId == null ){
            return res.status(404).send({
                status: 'error',
                message: 'No hay articulo para mostrar!!'
            });
        }
        //buscar el aritculo
        Article.findById(articleId, (err,article)=> {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al devolver los datos'
                    });
                }
                if(!article){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });
                }

                //devolver el json
                return res.status(200).send({
                    status: 'succes',
                    article
                })
            }
        )

    },
    update: (req,res) => {
        //recojer el arituclo  por la url
        var articleId = req.params.id;

        //regojer los datos que llegan por put
        var params = req.body;
        //validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);

            var validate_content = !validator.isEmpty(params.content);
            console.log(params.content);
        }catch(e){
            return res.status(200).send({
                status: 'error',
                message: 'faltan datoSs'
            });
        }

        if(validate_content && validate_title){

            //find and update
            Article.findOneAndUpdate({_id:articleId},params, {new:true},(err, articleUpdated)=>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'error al actualizar '
                    });
                }

                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'no existe el articulo '
                    });
                }

                return res.status(200).send({
                    status: 'succes',
                    article: articleUpdated
                });
            })
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'la validacion no es correnta '
            });
        }
        //devolver respuesta

    },
    delete: (req,res)=>{
        //recojer el id de la url
        var articleId = req.params.id;


        //find and update
        Article.findOneAndDelete({_id: articleId},(err,articleRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'error al borrar '
                });
            }
            if(!articleRemoved){
                return res.status(500).send({
                    status: 'error',
                    message: 'no se borro por q no existe quizas'
                });
            }
            return res.status(200).send({
                status: 'succes',
                article: articleRemoved
            });
        })
    },
    upload: (req, res) => {

        //configurar el modulo del connect multy party router/article.js  (hecho en routes/article)
        //recoger el fichero de la peticion
        var file_name = 'imagen no subida';
        if(!req.files){
            return res.status(404).send({
               status: 'error',
               message: file_name
            });
        }
        //conseguir el nombre y la extension de archivo

        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');
        //nombre del archivo
        var file_name = file_split[2];
        var extension_split =  file_name.split('\.');
        var file_ext = extension_split[1];

        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            //borrar el archivo subido
            fs.unlink(file_path,(err) =>{
                return res.status(200).send({
                   status:'error',
                    message: 'la ext no es valida'
                });
            });
        }else{

            //valido es todo ?
            var articleId = req.params.id;
            //buscr el articulo asignarle el nombre de la imagen y actualizarlo
            Article.findOneAndUpdate({_id: articleId},{image:file_name},{new:true},(err,articleUpdated) =>{
                if(err || !articleUpdated){
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen de articulo'
                    })
                }
                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            })
        }

    },
    getImage: (req,res) => {
        var file = req.params.image;
        var path_file = './upload/articles/' + file;

        fs.exists(path_file, (exists) =>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'la imagen no existe'
                })
            }
        })

    },
    search: (req, res) => {

        var searchString  = req.params.search;
        Article.find({
            "$or":[
                {"title":{"$regex":searchString,"$options":"i"}},
                {"content":{"$regex":searchString, "$options":"i"}}
            ]
        }).sort([['date','descending']])
            .exec((err, articles)=>{
                if(err){
                    return res.status(500).send({
                       status: 'error',
                       message: 'error en la peticion'
                    });
                }
                if(!articles || articles.length <= 0 ){

                    return res.status(500).send({
                        status: 'error',
                        message: 'no existen los articulos que coincidan'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    articles
                })
            })

    }
}; //end controller

module.exports = controller;

