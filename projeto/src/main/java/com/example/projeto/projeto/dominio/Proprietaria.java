package com.example.projeto.projeto.dominio;

import javax.persistence.*;

@Entity
public class Proprietaria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProprietaria;

    @OneToMany
    @JoinColumn(name = "fkUsuario")
    private Usuario fkUsuario;

    public int getIdProprietaria() {
        return idProprietaria;
    }

    public void setIdProprietaria(int idProprietaria) {
        this.idProprietaria = idProprietaria;
    }

    public Usuario getFkUsuario() {
        return fkUsuario;
    }

    public void setFkUsuario(Usuario fkUsuario) {
        this.fkUsuario = fkUsuario;
    }
}
