package com.iclean.icleanapi;

import java.util.Date;
import java.util.List;

public class Contratante extends Usuario {
    private List<Imovel> listaImoveis;

    public Contratante(String nome, String cpf, String telefone, Date dataNascimento, List<Avaliacao> listaAvaliacoes, List<Imovel> listaImoveis) {
        super(nome, cpf, telefone, dataNascimento, listaAvaliacoes);
        this.listaImoveis = listaImoveis;
    }

    public List<Imovel> getListaImoveis() {
        return listaImoveis;
    }
}
