package com.example.projeto.projeto.dominio;

import javax.persistence.*;
import java.util.List;

@Entity
public class Trabalho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany
    private List<Contratada> candidatas;

    private Double preco; //Valor do trabalho

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public List<Contratada> getCandidatas() {
        return candidatas;
    }

    public void setCandidatas(Contratada candidatas) {
        this.candidatas.add(candidatas);
    }
}
