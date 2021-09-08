package com.iclean.icleanapi;

public class Trabalho {
    private Double preco;
    private String tipo;
    private Imovel imovel;

    public Trabalho(Double preco, String tipo) {
        this.preco = preco;
        this.tipo = tipo;
    }

    public Double getPreco() {
        return preco;
    }

    public String getTipo() {
        return tipo;
    }

    public Imovel getImovel() {
        return imovel;
    }

    public void setImovel(Imovel imovel) {
        this.imovel = imovel;
    }
}
