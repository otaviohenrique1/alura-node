import livros from "./models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    /* Antigo */
    // livros.find((err, livros) => {
    //   res.status(200).json(livros);
    // });
    livros.find()
    .then((livros) => {
      res.status(200).json(livros);
    })
    .catch((erro) => {
      console.error(erro);
      res.status(500).json({error: "Ocorreu um erro ao buscar os livros."});
    });
  }
}

export default LivroController;