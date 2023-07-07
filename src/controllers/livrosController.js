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
      const listaDeLivros = await livros.find();
      res.status(200).json(listaDeLivros);
    } catch (error) {
      console.error(error);
      res.status(500).json({erro: "Ocorreu um erro ao buscar os livros."});
    }
  }

  static listarLivroPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const dadosLivro = await livros.findById(id);
      res.status(200).json(dadosLivro);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        erro: "Id do livro não localizado.",
        message: `${error.message}`,
      });
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

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send({ message: "Livro atualizado com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        erro: "Falha ao atualizar livro.",
        message: `${error.message}`,
      });
    }
  }

  static excluirLivro = async (req, res) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: "Livro removido com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        erro: "Falha ao remover livro.",
        message: `${error.message}`,
      });
    }
  }
}

export default LivroController;