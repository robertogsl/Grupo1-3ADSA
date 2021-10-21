package com.example.projeto.projeto;

import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.dominio.Proprietaria;
import com.example.projeto.projeto.dominio.Usuario;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class Csv {
    public void gravaListaProprietaria(List<Proprietaria> lista, String nomeArq) {
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

            for (Proprietaria p : lista) {
                saida.format("%d;%s;%s;%s;%s;%s;\n",
                        p.getId(),
                        p.getNome(),
                        p.getCpf(),
                        p.getTelefone(),
                        p.getDataNascimento(),
                        p.getEmail()
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
                saida.format("%d;%s;%s;%s;%s;%s;%s;%s;%s;%.10f;%.10f\n",
                        u.getId(),
                        u.getNome(),
                        u.getCpf(),
                        u.getTelefone(),
                        u.getDataNascimento(),
                        u.getEmail(),
                        u.getCep(),
                        u.getComplemento(),
                        u.getNumero(),
                        u.getLongitude(),
                        u.getLatitude()
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

}
