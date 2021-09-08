package com.iclean.icleanapi;

import java.util.ArrayList;
import java.util.List;

public class Avaliacao {
    private Integer estrelas;
    private Comentario comentario;

    public Avaliacao(Integer estrelas, Comentario comentario) {
        this.estrelas = estrelas;
        this.comentario = comentario;
    }

    public Integer getEstrelas() {
        return estrelas;
    }

    public Comentario getComentario() {
        return comentario;
    }
}
