"""
Gerencia os usuários. 
Praticamente só interage com o banco de dados.
"""

import sqlite3
from enum import Enum

TIPOS_USUARIOS = Enum("TIPOS_USUARIOS", ["ADMIN", "NORMAL",])

class GerenciadorUsuarios():
    def __init__(self, arquivo_db="databases/banco_de_dados.db"):
        self.conexao = sqlite3.connect(arquivo_db)
        self.cursor = self.conexao.cursor()

        self.primeira_execucao()

    def __del__(self):
        self.conexao.close()
        print("Conexão com DB fechada.")

    def primeira_execucao(self):
        """
        Cria as tabelas necessárias e realiza todos os 
        procedimentos necessários durante a criação 
        do site.
        """
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS usuarios(
                id INTEGER PRIMARY KEY,
                nome_usuario TEXT NOT NULL, 
                tipo_usuario TEXT NOT NULL, 
                senha TEXT NOT NULL)
            """)
        self.conexao.commit()
        resultado = self.cursor.execute("SELECT name FROM sqlite_master") # LISTA TODAS as tabelas
        print(resultado.fetchall())


    def adicionar_usuário(self, nome, tipo: TIPOS_USUARIOS, senha):
        """
        Adiciona um usuário ao banco de dados.
        """
        try:
            tipo_str = tipo.name
            
            self.cursor.execute("""
                INSERT INTO usuarios (nome_usuario, tipo_usuario, senha)
                VALUES (?, ?, ?)
            """, (nome, tipo_str, senha))
            
            self.conexao.commit()

            print(f"Usuário '{nome}' adicionado com sucesso.")
        except Exception as e:
            print("Um erro ocorreu:", e.with_traceback())


    def buscar_usuario(self, nome):
        """
        Retorna as informaçãos de um determinado usuário.
        Como nesse banco de dados para testes os usuários 
        não tem nenhum dado único, pode retornar mais de um usuário.
        """
        resultado = self.cursor.execute(f"""
            SELECT nome_usuario, tipo_usuario, senha FROM usuarios WHERE nome_usuario=?
        """, (nome,))

        return resultado.fetchall()


    def listar_usuarios(self):
        """
        Lista todos os usuários cadastrados.
        """
        resultado = self.cursor.execute("""
            SELECT nome_usuario, tipo_usuario, senha FROM usuarios
        """)
        print(resultado.fetchall())


    def atualizar_usuario(self, nome, novo_nome, nova_senha):
        """
        Atualiza as informações de um usuário.
        Se for atualizar uma, tem que atualizar todas.
        Devido a falta de dados únicos, pode atualizar mais de um usuário e uma vez.
        """
        try:
            self.cursor.execute(f"""
                UPDATE usuarios
                SET nome_usuario=?, senha=?
                WHERE nome_usuario=?
            """, (novo_nome, nova_senha, nome))
            self.conexao.commit()

        except Exception as e:
            print("Um erro ocorreu:", e.with_traceback())


    def remover_usuario(self, nome):
        """
        Remove um usuário do banco de dados.
        """
        try:
            self.cursor.execute(f"""
                DELETE FROM usuarios WHERE nome_usuario=?
            """, (nome,))
            self.conexao.commit()

        except Exception as e:
            print("Um erro ocorreu:", e.with_traceback())

if __name__ == "__main__":
    gerenciador = GerenciadorUsuarios()
    gerenciador.adicionar_usuário(
        nome = "Testovaldo", 
        tipo = TIPOS_USUARIOS.NORMAL, 
        senha = "Testovaldo"
        )