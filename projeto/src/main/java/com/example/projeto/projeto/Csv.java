package com.example.projeto.projeto;

import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.dominio.Usuario;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class Csv {
    public void gravaLista(List<Contratada> lista, String nomeArq) {
        FileWriter arq = null;
        Formatter saida = null;
        boolean deuRuim = false;

        nomeArq += ".csv";

        try {
            arq = new FileWriter(nomeArq, true);
            saida = new Formatter(arq);
        }
        catch (IOException erro) {
            System.err.println("Erro ao abrir arquivo");
            System.exit(1);
        }

        try {

            for (Contratada u : lista) {
                saida.format("%d;%s;%s;%s;%s;%s\n",
                        u.getId(),
                        u.getNome(),
                        u.getCpf(),
                        u.getTelefone(),
                        u.getDataNascimento(),
                        u.getEmail()
                        );
            }
        }
        catch (FormatterClosedException erro) {
            System.err.println("Erro ao gravar no arquivo");
            deuRuim= true;
        }
        finally {

            saida.close();
            try {
                arq.close();
            }
            catch (IOException erro) {
                System.err.println("Erro ao fechar arquivo.");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
    }

    public void leExibeArquivo(String nomeArq) {
        FileReader arq= null;
        Scanner entrada = null;
        boolean deuRuim= false;

        nomeArq += ".csv";

        try {
            arq = new FileReader(nomeArq);
            entrada = new Scanner(arq).useDelimiter(";|\\n");
        }
        catch (FileNotFoundException erro) {
            System.err.println("Arquivo não encontrado");
            System.exit(1);
        }

        try {

            System.out.printf("%8s %-15s %7s\n","NOME","CPF","TELEFONE","DATA DE NASCIMENTO","EMAIL" );

            while (entrada.hasNext()) {
//                String nome = entrada.next();
//                String cpf = entrada.next();
//                String telefone = entrada.next();
//
//                System.out.printf("%8d %-15s %7.2f\n",nome);
            }
        }
        catch (NoSuchElementException erro)
        {
            System.err.println("Arquivo com problemas.");
            deuRuim = true;
        }
        catch (IllegalStateException erro)
        {
            System.err.println("Erro na leitura do arquivo.");
            deuRuim = true;
        }
        finally {
            entrada.close();
            try {
                arq.close();
            }
            catch (IOException erro) {
                System.err.println("Erro ao fechar arquivo.");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
    }
}
