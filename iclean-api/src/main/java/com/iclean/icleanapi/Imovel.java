package com.iclean.icleanapi;

import java.util.ArrayList;
import java.util.List;

public class Imovel {
    private String especificacao;
    private List<Trabalho> listaTrabalhos;

    public Imovel(String especificacao, List<Trabalho> listaTrabalhos) {
        this.especificacao = especificacao;
        this.listaTrabalhos = listaTrabalhos;
    }

    public String getEspecificacao() {
        return especificacao;
    }

    public void criarTrabalho(Trabalho t) {
        listaTrabalhos.add(t);
    }

    public void deletarTrabalho(Trabalho t) {
        listaTrabalhos.remove(t);
    }
}
