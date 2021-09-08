package com.iclean.icleanapi;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Usuario {
    private String nome;
    private String cpf;
    private String telefone;
    private Date dataNascimento;
    private List<Avaliacao> listaAvaliacoes;

    public Usuario(String nome, String cpf, String telefone, Date dataNascimento, List<Avaliacao> listaAvaliacoes) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.listaAvaliacoes = listaAvaliacoes;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public List<Avaliacao> getAvaliacoes() {
        return listaAvaliacoes;
    }

    public void receberAvaliacao(Avaliacao a) {
        listaAvaliacoes.add(a);
    }
}
