package com.example.projeto.projeto.dominio;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAvaliacao;

    private Integer starsOwner;
    private Integer starsWorker;
    private LocalDate data = LocalDate.now();

    public int getIdAvaliacao() {
        return idAvaliacao;
    }

    public void setIdAvaliacao(int idAvaliacao) {
        this.idAvaliacao = idAvaliacao;
    }

    public Integer getStarsOwner() {
        return starsOwner;
    }

    public void setStarsOwner(Integer starsOwner) {
        this.starsOwner = starsOwner;
    }

    public Integer getStarsWorker() {
        return starsWorker;
    }

    public void setStarsWorker(Integer starsWorker) {
        this.starsWorker = starsWorker;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

}
