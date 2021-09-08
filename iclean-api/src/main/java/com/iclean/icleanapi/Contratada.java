package com.iclean.icleanapi;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Contratada extends Usuario {
    private List<Trabalho> listaCandidaturas;

    public Contratada(String nome, String cpf, String telefone, Date dataNascimento, List<Avaliacao> listaAvaliacoes, List<Trabalho> listaCandidaturas) {
        super(nome, cpf, telefone, dataNascimento, listaAvaliacoes);
        this.listaCandidaturas = listaCandidaturas;
    }

    public void candidatarAoTrabalho(Trabalho t) {
        listaCandidaturas.add(t);
    }

    public List<Trabalho> getCandidaturas() {
        return listaCandidaturas;
    }
}
