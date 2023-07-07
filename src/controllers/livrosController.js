import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = async (req, res) => {
    /* Antigo */
    // livros.find((err, livros) => {
    //   res.status(200).json(livros);
    // });

    /* Novo 1 */
    // livros.find()
    // .then((livros) => {
    //   res.status(200).json(livros);
    // })
    // .catch((erro) => {
    //   console.error(erro);
    //   res.status(500).json({error: "Ocorreu um erro ao buscar os livros."});
    // });

    /* Novo 2 */
    try {
      const listaLivros = await livros.find();
      res.status(200).json(listaLivros);
    } catch (error) {
      console.error(error);
      res.status(500).json({erro: "Ocorreu um erro ao buscar os livros."});
    }
  }

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (error) {
      console.error(error);
      res.status(500).json({
        erro: "Falha ao cadastrar livro.",
        message: `${error.message}`,
      });
    }
  }
}

export default LivroController;