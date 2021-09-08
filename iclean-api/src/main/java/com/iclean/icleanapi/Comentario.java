package com.iclean.icleanapi;

public class Comentario {
    private String tipo;
    private String texto;

    public Comentario(String tipo, String texto) {
        this.tipo = tipo;
        this.texto = texto;
    }

    public String getTipo() {
        return tipo;
    }

    public String getTexto() {
        return texto;
    }
}
