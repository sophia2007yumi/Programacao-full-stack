var http = require('http');
var express = require('express');
var path = require('path');

var banco = require('./banco');

var app = express();

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(requisicao, resposta) {
    resposta.sendFile(path.join(__dirname, '..', 'aula_2', 'projetos.html'));
});

app.get('/blog', function(requisicao, resposta) {
    banco.buscarPosts(function(posts) {
        resposta.render('blog', {
            posts: posts
        });
    });
});

app.get('/cadastrar_post', function(requisicao, resposta) {
    resposta.sendFile(path.join(__dirname, 'public', 'cadastrar_post.html'));
});

app.post('/cadastrar_post', function(requisicao, resposta) {
    var titulo = requisicao.body.titulo;
    var resumo = requisicao.body.resumo;
    var conteudo = requisicao.body.conteudo;

    banco.cadastrarPost(titulo, resumo, conteudo);

    resposta.redirect('/blog');
});

var server = http.createServer(app);

server.listen(80);

console.log("servidor rodando...");