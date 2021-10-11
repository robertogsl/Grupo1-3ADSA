package com.example.projeto.projeto.dominio;

import javax.persistence.*;

@Entity
public class Contratada {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idContratada;

    @OneToMany
    @JoinColumn(name = "fkUsuario")
    private Usuario fkUsuario;

    private String cep;
    private String complemento;
    private String numero;
    private Double longitude;
    private Double latitude;

    public int getIdContratada() {
        return idContratada;
    }

    public void setIdContratada(int idContratada) {
        this.idContratada = idContratada;
    }

    public Usuario getFkUsuario() {
        return fkUsuario;
    }

    public void setFkUsuario(Usuario fkUsuario) {
        this.fkUsuario = fkUsuario;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }
}
