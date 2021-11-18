package com.example.projeto.projeto.dominio;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAvaliacao;

    private Double estrelas;
    private LocalDate data = LocalDate.now();
    private String comentario;
    @ManyToOne
    private Contratada contratada;
    @ManyToOne
    private Proprietaria proprietaria;

    public int getIdAvaliacao() {
        return idAvaliacao;
    }

    public void setIdAvaliacao(int idAvaliacao) {
        this.idAvaliacao = idAvaliacao;
    }

    public Double getEstrelas() {
        return estrelas;
    }

    public void setEstrelas(Double estrelas) {
        this.estrelas = estrelas;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Contratada getContratada() {
        return contratada;
    }

    public void setContratada(Contratada contratada) {
        this.contratada = contratada;
    }

    public Proprietaria getProprietaria() {
        return proprietaria;
    }

    public void setProprietaria(Proprietaria proprietaria) {
        this.proprietaria = proprietaria;
    }
}
