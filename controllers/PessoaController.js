// const { where } = require("sequelize/types");
// const { where } = require("sequelize/types");
const database = require("../models");

class PessoaController {
  static async pegaTodasPessoas(req, res) {
    try {
      const todasAsPessoas = await database.usuarios.findAll();

      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;

    try {
      const umaPessoa = await database.usuarios.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body;

    try {
      const novaPessoaCriada = await database.usuarios.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  // Atualizar um registro
  static async atualizarPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;

    try {
      await database.usuarios.update(novasInfos, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.usuarios.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaPessoa(req, res) {
    const { id } = req.params;

    try {
      await database.usuarios.destroy({
        where: {
          id: Number(id),
        },
      });
      return res
        .status(200)
        .json({ mensagem: `id ${id} deletado com sucesso !` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async loginPessoa(req, res) {
    const { email } = req.params;

    try {
        const loginPessoa = await database.usuarios.findOne({
        where: { email: Number(email) },
      });
      return res.status(200).json(loginPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
