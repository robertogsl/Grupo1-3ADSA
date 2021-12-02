package com.example.projeto.projeto;

import com.example.projeto.projeto.dominio.Avaliacao;
import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.dominio.Proprietaria;
import com.example.projeto.projeto.dominio.Trabalho;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class GravaTxt {
    public static void gravaRegistro(String nomeArq, String registro, Boolean append) {
        BufferedWriter saida = null;
        // Abre o arquivo
        try {
            saida = new BufferedWriter (new FileWriter(nomeArq, append));
        }
        catch (IOException erro) {
            System.out.println("Erro na abertura do arquivo: " +
                    erro.getMessage());
        }

        // Grava o registro e finaliza
        try {
            saida.write(registro + "\n");
            saida.close();
        }
        catch (IOException erro) {
            System.out.println("Erro na gravação do arquivo: " +
                    erro.getMessage());
        }

    }

    public static void gravaArquivoTxtTrabalhoContratada(Trabalho lista, String nomeArq, Boolean append) {

        int contaRegistro = 0;

        // Monta o registro de header
        String header = "00TRABALHO";
        Date dataDeHoje = new Date();
        SimpleDateFormat formataData =
                new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        header += formataData.format(dataDeHoje);
        header += "01";
        nomeArq += ".txt";

        // Grava o registro do header
        gravaRegistro(nomeArq, header, append);

        // Monta e grava o corpo
        String corpo;
            corpo = "02";
            if (lista.getCandidatas().size() > 0) {
                for(int i = 0; i < lista.getCandidatas().size(); i ++) {
                    corpo += String.format("%30s",lista.getCandidatas().get(i).getEmail());
                }
            }
            corpo += String.format("%-8s", lista.getCep());
            corpo += String.format("%-10s", lista.getComplemento());
            corpo += String.format("%6s", lista.getNumero());
            corpo += String.format("%3.6f", lista.getLatitude());
            corpo += String.format("%3.6f", lista.getLongitude());
            corpo += String.format("%-5.2f", lista.getPreco());
            corpo += String.format("%30s", lista.getEspecificacao());
            corpo += String.format("%6s", lista.getProprietaria().getEmail());
            gravaRegistro(nomeArq,corpo, true);
            contaRegistro++;

        // Monta e grava o trailer
        String trailer = "01";
        trailer += String.format("%010d", contaRegistro);
        gravaRegistro(nomeArq,trailer, true);

    }

    public static Avaliacao leArquivoTxtContratada(String nomeArq, List<Contratada> contratadas, List<Proprietaria> proprietarias) {
        BufferedReader entrada = null;
        String registro, tipoRegistro;
        String proprietariaEmail, contratadaEmail, comentario;
        Integer estrelas;
        int contaRegDados = 0;
        int qtdRegGravados;

        List<Avaliacao> listaLida = new ArrayList();

        // Abre o arquivo para leitura
        try {
            entrada = new BufferedReader(new FileReader(nomeArq));
        }
        catch (IOException erro) {
            System.out.println("Erro na abertura do arquivo: " +
                    erro.getMessage());
        }

        // Leitura do arquivo
        try {
            registro = entrada.readLine();  // Lê o primeiro registro do arquivo

            while (registro != null) {      // Enquanto não chegou ao final do arquivo
                // obtém o tipo do registro - primeiros 2 caracteres do registro
                // substring devolve um "pedaço da String",
                // que começa na posição 0 e termina na posição 1 (como num vetor)
                //    0123456
                //    00NOTA
                tipoRegistro = registro.substring(0,2);

                // Verifica se o tipoRegistro é "00" (header), ou "01" (trailer) ou "02" (corpo)
                if (tipoRegistro.equals("00")) {
                    System.out.println("Eh um header");
                    System.out.println("Tipo do arquivo: "+registro.substring(2,6));
                    System.out.println("Data e hora de gravação: "+registro.substring(6,25));
                    System.out.println("Versão do documento: "+registro.substring(25,27));
                }
                else if (tipoRegistro.equals("01")) {
                    System.out.println("Eh um trailer");
                    // Lê a quantidade de registros gravados que está no trailer
                    qtdRegGravados = Integer.valueOf(registro.substring(2,12));
                    // Valida se a quantidade lida é igual a quantidade gravada
                    if (qtdRegGravados == contaRegDados) {
                        System.out.println("Quantidade de registros lidos compatível com quantidade de registros gravados");
                    }
                    else {
                        System.out.println("Quantidade de registros lidos incompatível com quantidade de registros gravados");
                    }

                }
                else if (tipoRegistro.equals("02")) {
                    System.out.println("Eh um registro de corpo");
                    // Lê os dados do registro de corpo
                    proprietariaEmail = registro.substring(2, 32).trim();
                    contratadaEmail = registro.substring(32, 62);
                    estrelas = Integer.valueOf(registro.substring(62, 67).trim());
                    comentario = registro.substring(67, 107).trim();
                    // Cria um objeto Aluno com os dados lidos do registro
                    Avaliacao a = new Avaliacao();
                    // Adiciona esse objeto à listaLida
                    a.setComentario(comentario);
                    a.setEstrelas(estrelas.doubleValue());
                    for (int i = 0; i < contratadas.size(); i++) {
                        if (contratadaEmail.equals(contratadas.indexOf(i))) {
                            a.setContratada(contratadas.get(i));
                            break;
                        }
                    }
                    for (int i = 0; i < proprietarias.size(); i++) {
                        if (proprietariaEmail.equals(proprietarias.indexOf(i))) {
                            a.setProprietaria(proprietarias.get(i));
                            break;
                        }
                    }
                    listaLida.add(a);
                    // Incrementa o contador de registros de dados lidos
                    contaRegDados++;
                    return a;
                }
                else {
                    System.out.println("Tipo de registro inválido");
                }

                // lê o próximo registro
                registro = entrada.readLine();
            }

            // Fecha o arquivo
            entrada.close();
        }
        catch (IOException erro) {
            System.out.println("Erro ao ler arquivo: " + erro.getMessage());
            return null;
        }

        // Exibe a listaLida
        System.out.println("\nConteúdo lido do arquivo:");
        for (Avaliacao a : listaLida) {
            System.out.println(a);
        }

        return null;
    }
}
