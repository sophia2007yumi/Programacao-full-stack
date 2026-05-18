var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('blog.db');

db.run(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    resumo TEXT,
    conteudo TEXT
)`);

function cadastrarPost(titulo, resumo, conteudo) {
    db.run(
        `INSERT INTO posts (titulo, resumo, conteudo) VALUES (?, ?, ?)`,
        [titulo, resumo, conteudo]
    );
}

function buscarPosts(callback) {
    db.all(`SELECT * FROM posts`, function(erro, linhas) {
        if (erro) {
            callback([]);
        } else {
            callback(linhas);
        }
    });
}

module.exports = {
    cadastrarPost,
    buscarPosts
};